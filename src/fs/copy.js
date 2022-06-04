import { readdir, mkdir, copyFile } from 'fs/promises'
import Path from 'path'

export const copy = async () => {
  try {
    const files = await readdir('./files', { withFileTypes: true })
    await mkdir('files_copy')

    for (let file of files) {
      const srcPath = Path.join('./files', file.name)
      const destPath = Path.join('files_copy', file.name)

      if (file.isDirectory()) {
        await copyDir(srcPath, destPath)
      } else {
        await copyFile(srcPath, destPath)
      }
    }
  } catch (err) {
    if (err) {
      if (err.code === 'ENOENT' || err.code === 'EEXIST') {
        throw new Error('FS operation failed')
      }
      throw err
    }
  }
}

await copy()

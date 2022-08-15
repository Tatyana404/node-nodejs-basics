import { readdir, mkdir, copyFile } from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

export const copy = async () => {
  try {
    const files = await readdir(join(dirname(fileURLToPath(import.meta.url)), './files'), { withFileTypes: true })
    await mkdir(join(dirname(fileURLToPath(import.meta.url)), './files_copy'))

    for (let file of files) {
      const srcPath = join(dirname(fileURLToPath(import.meta.url)), './files', file.name)
      const destPath = join(dirname(fileURLToPath(import.meta.url)), './files_copy', file.name)

      if (file.isDirectory()) {
        await copyDir(srcPath, destPath)
      } else {
        await copyFile(srcPath, destPath)
      }
    }
  } catch (err) {
    if (err.code === 'ENOENT' || err.code === 'EEXIST') {
      throw new Error('FS operation failed')
    }
    throw err
  }
}

await copy()

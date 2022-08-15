import { rename as renameFile } from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

export const rename = async () => {
  try {
    await renameFile(join(dirname(fileURLToPath(import.meta.url)), './files/wrongFilename.txt'), join(dirname(fileURLToPath(import.meta.url)), './files/properFilename.md'))
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed')
    }
    throw err
  }
}

await rename()

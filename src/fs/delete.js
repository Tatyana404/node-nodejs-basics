import { unlink } from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

export const remove = async () => {
  try {
    await unlink(join(dirname(fileURLToPath(import.meta.url)), './files/fileToRemove.txt'))
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed')
    }
    throw err
  }
}

await remove()

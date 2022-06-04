import { unlink } from 'fs/promises'

export const remove = async () => {
  try {
    await unlink('files/fileToRemove.txt')
  } catch (err) {
    if (err) {
      if (err.code === 'ENOENT') {
        throw new Error('FS operation failed')
      }
      throw err
    }
  }
}

await remove()

import { open, writeFile } from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

export const create = async () => {
  try {
    await open(join(dirname(fileURLToPath(import.meta.url)), './files/fresh.txt'), 'wx')
    await writeFile(join(dirname(fileURLToPath(import.meta.url)), './files/fresh.txt'), 'I am fresh and young')
  } catch (err) {
    if (err) {
      if (err.code === 'EEXIST') {
        throw new Error('FS operation failed')
      }
      throw err
    }
  }
}

await create()

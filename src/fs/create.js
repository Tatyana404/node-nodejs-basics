import { open, writeFile } from 'fs/promises'

export const create = async () => {
  try {
    await open('files/fresh.txt', 'wx')
    await writeFile('files/fresh.txt', 'I am fresh and young')
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

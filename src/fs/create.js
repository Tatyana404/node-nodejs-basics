import { writeFile } from 'fs/promises'
import { open } from 'fs'

export const create = async () => {
  try {
    open('files/fresh.txt', 'wx', err => {
      if (err) {
        if (err.code === 'EEXIST') {
          throw new Error('FS operation failed')
        }
        throw err
      }
    })
    await writeFile('files/fresh.txt', 'I am fresh and young')
  } catch (err) {
    throw err
  }
}

await create()

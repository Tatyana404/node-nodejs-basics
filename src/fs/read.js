import { readFile } from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

export const read = async () => {
  try {
    const fileContent = await readFile(join(dirname(fileURLToPath(import.meta.url)), './files/fileToRead.txt'))

    console.log(fileContent.toString())
  } catch (err) {
    if (err) {
      if (err.code === 'ENOENT') {
        throw new Error('FS operation failed')
      }
      throw err
    }
  }
}

await read()

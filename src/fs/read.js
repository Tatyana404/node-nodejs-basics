import { readFile } from 'fs/promises'

export const read = async () => {
  try {
    const fileContent = await readFile('files/fileToRead.txt')

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

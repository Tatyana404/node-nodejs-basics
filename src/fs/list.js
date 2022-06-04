import { readdir } from 'fs/promises'

export const list = async () => {
  try {
    const fileNames = await readdir('./files')
    const result = []

    for (const fileName of fileNames) {
      result.push(fileName)
    }

    console.log(result)
  } catch (err) {
    if (err) {
      if (err.code === 'ENOENT') {
        throw new Error('FS operation failed')
      }
      throw err
    }
  }
}

await list()

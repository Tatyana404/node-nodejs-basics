import { readdir } from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

export const list = async () => {
  try {
    const fileNames = await readdir(join(dirname(fileURLToPath(import.meta.url)), './files'))
    const result = []

    for (const fileName of fileNames) {
      result.push(fileName)
    }

    console.log(result)
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed')
    }
    throw err
  }
}

await list()

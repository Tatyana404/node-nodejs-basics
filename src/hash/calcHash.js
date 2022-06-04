const { createHash } = await import('crypto')
import { readFile } from 'fs/promises'

export const calculateHash = async () => {
  try {
    const inp = await readFile('./files/fileToCalculateHashFor.txt')
    const hash = createHash('sha256')

    if (inp) {
      hash.update(inp)
      console.log(hash.digest('hex'))
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('File read error')
    }
    throw err
  }
}

await calculateHash()

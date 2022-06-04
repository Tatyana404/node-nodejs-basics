import { createReadStream, createWriteStream } from 'fs'
import { createUnzip } from 'zlib'
import { pipeline } from 'stream'
import { promisify } from 'util'

export const decompress = async () => {
  try {
    const inp = createReadStream('./archive.gz')
    const out = createWriteStream('./files/fileToCompress.txt')
    const pipe = promisify(pipeline)
    const unzip = createUnzip()

    await pipe(inp, unzip, out)
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('Error while unpacking archive')
    }
    throw err
  }
}

await decompress()

import { createReadStream, createWriteStream } from 'fs'
import { createGzip } from 'zlib'
import { pipeline } from 'stream'
import { promisify } from 'util'

export const compress = async () => {
  try {
    const inp = createReadStream('./files/fileToCompress.txt')
    const out = createWriteStream('archive.gz')
    const pipe = promisify(pipeline)
    const gzip = createGzip()

    await pipe(inp, gzip, out)
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('Error creating archive')
    }
    throw err
  }
}

await compress()

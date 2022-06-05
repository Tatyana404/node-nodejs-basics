import { createReadStream, createWriteStream } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { createGzip } from 'zlib'
import { pipeline } from 'stream'
import { promisify } from 'util'

export const compress = async () => {
  try {
    const inp = createReadStream(join(dirname(fileURLToPath(import.meta.url)), './files/fileToCompress.txt'))
    const out = createWriteStream(join(dirname(fileURLToPath(import.meta.url)), './archive.gz'))
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

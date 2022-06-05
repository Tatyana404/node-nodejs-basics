import { createReadStream } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

export const read = async () => createReadStream(join(dirname(fileURLToPath(import.meta.url)), './files/fileToRead.txt')).pipe(process.stdout)

await read()

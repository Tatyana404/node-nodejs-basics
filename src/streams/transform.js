import { Transform } from 'stream'

export const transform = async () => {
  const reverseText = new Transform({
    transform (chunk, encoding, callback) {
      callback(null, `${chunk.toString().split('').reverse().join('').trim()}\n`)
      process.exit(0)
    }
  })

  process.stdin.pipe(reverseText).pipe(process.stdout)
}

await transform()

import path, { dirname } from 'path'
import { release, version } from 'os'
import { createServer as createServerHttp } from 'http'
import('./files/c.js')
import { readFile } from 'fs/promises'
import { fileURLToPath } from 'url'

const random = Math.random()

export let unknownObject

if (random > 0.5) {
  unknownObject = JSON.parse(await readFile(new URL('./files/a.json', import.meta.url)))
} else {
  unknownObject = JSON.parse(await readFile(new URL('./files/b.json', import.meta.url)))
}

console.log(`Release ${release()}`)
console.log(`Version ${version()}`)
console.log(`Path segment separator is "${path.sep}"`)

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`)
console.log(`Path to current directory is ${dirname(fileURLToPath(import.meta.url))}`)

export const createMyServer = createServerHttp((_, res) => {
  res.end('Request accepted')
})

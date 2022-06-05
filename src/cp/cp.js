import { spawn } from 'child_process'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

export const spawnChildProcess = async args => {
  const cp = spawn('node', [join(dirname(fileURLToPath(import.meta.url)), './files/script.js'), ...args])

  cp.stdout.on('data', data => console.log(data.toString()))

  process.stdin.pipe(cp.stdin)

  cp.stderr.on('data', err => console.error(err.toString()))

  cp.on('close', code => console.log(`Child process exited with code ${code}`))
}

await spawnChildProcess(['arg1', 'arg2', 'arg3', 'arg4'])

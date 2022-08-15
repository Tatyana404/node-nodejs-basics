import { Worker } from 'worker_threads'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url' 
import { cpus } from 'os'

export const performCalculations = async () => {
  const result = []

  const createWorker = workerData =>
    new Promise((response, reject) => {
      const workers = new Worker(join(dirname(fileURLToPath(import.meta.url)),  './worker.js'), { workerData })

      workers.once('message', res => {
        response({
          status: 'resolved',
          data: res
        })
      })

      workers.on('error', err => {
        console.error(err)
      })

      workers.on('exit', code => {
        if (code !== 0) {
          response({
            status: 'error',
            data: null
          })
        }
      })
    })

  for (let i = 0; i < cpus().length; i++) {
    result[i] = createWorker(i + 10)
  }

  console.log((await Promise.allSettled(result)).map(item => item.value))
}

await performCalculations()

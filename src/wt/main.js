import { Worker } from 'worker_threads'
import { cpus } from 'os'

export const performCalculations = async () => {
  const result = []

  const createWorker = workerData =>
    new Promise((response, reject) => {
      const workers = new Worker('./worker.js', { workerData })

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

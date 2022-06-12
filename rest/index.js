import express from 'express'
const app = express()

app.get('/rest/test', (req, res) => {
    
  res.status(200).json({ foo: 'bar' }).end()
})

export default app
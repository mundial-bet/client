const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/league/:id', (req, res) => {
    const actualPage = '/league'
    const queryParams = { id: req.params.id } 
    app.render(req, res, actualPage, queryParams)
  })
  server.get('/bets/:id', (req, res) => {
    const actualPage = '/bets'
    const queryParams = { id: req.params.id } 
    app.render(req, res, actualPage, queryParams)
  })
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
const express = require('express')

const app = express()
const port = 3000

app.use((req, res, next) => {
  const theDate = new Date()
  const time = theDate.toLocaleString()
  const path = `| ${req.method} from ${req.path}`

  if (req.url !== '/favicon.ico') {
    console.log(time, path)
    next()
  }
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send(`新增 Todo 頁面
  <form action="/" method="POST">
    <button type="submit" value="123">POST</button>
  </form>
  `)
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})

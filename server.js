const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log('*** Request made *** \n')
  console.log(req.query)
  const user = req.query.user
  res.send(`Hello, ${user}`)
})

app.get('/search', (req, res) => {
  res.send('This is the search page')
})

app.get('/about/', (req, res) => {
  console.log('*** Request params *** \n')
  res.send('{[topic1: {thisSubject: something}, topic2:{Anothersubject: something}]}')
  console.log(req.params)
})

app.get('/about/:topic', (req, res) => {
  console.log('*** Request params *** \n')
  res.send('topic: {Subject1: something, history: something else}')
  console.log(req.params)
})

app.listen(5000, () => console.log('listening on port 5000!'))

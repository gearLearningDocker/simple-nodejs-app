const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send(`Say hello from Express`)
})

app.listen(PORT, () => console.log(`Server on port ${PORT}`))

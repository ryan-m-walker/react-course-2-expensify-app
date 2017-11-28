const express = require('express')
const path = require('path')

const app = express()
const PUBLIC_PATH = path.join(__dirname, '..', 'public')
const PORT = process.env.PORT || 3000


app.use(express.static(PUBLIC_PATH))

app.get('*', (req, res) => {
  res.sendFile(path.join(PUBLIC_PATH, 'index.html'))

})

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT)
})

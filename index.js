const express   = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
const PORT =process.env.PORT || 3000;
app.listen(port, () => {

})






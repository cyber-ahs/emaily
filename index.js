const express   = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This is my First Code')
})
const PORT =process.env.PORT || 3000;
app.listen(PORT, () => {

})






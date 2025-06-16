/*"Backend code goes here" */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  console.log('Form Data:', req.body);
  res.send('Form received!');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

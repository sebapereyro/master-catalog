const express = require('express'); // common js module instead of ES2015 modules
const app = express(); // we can have multiple express apps. but the vast majority is only one

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

//read PORT env variable
const PORT = process.env.PORT || 5000;
app.listen(PORT);

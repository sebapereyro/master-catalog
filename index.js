// common js module instead of ES2015 modules
const express = require('express');
//const passportConfig = require('./services/passport');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

// we can have multiple express apps.
// but the vast majority is only one
const app = express();
authRoutes(app);

//read PORT env variable
const PORT = process.env.PORT || 5000;
app.listen(PORT);

const path = require('path');

const express = require('express');

app = express();

app.use('/', express.static(path.resolve(__dirname, 'frontend')));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`running on http://localhost:${port}/`));

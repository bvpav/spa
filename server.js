const path = require('path');

const express = require('express');

app = express();

app.use('/static', express.static(path.resolve(__dirname, 'frontend', 'static')));

app.get('/*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'index.html')));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`running on http://localhost:${port}/`));

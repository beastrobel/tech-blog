const express = require('express');
const app = express();
const path = require('path');
const api = require('./routes/post.js');
const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}.`);
)
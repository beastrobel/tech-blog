const express = require('express');
const app = express();
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const api = require('./api/post.js');
const PORT = process.env.PORT || 3001;

//Homepage middleware
app.use(express.static('public'));

// Add express-session and store as Express.js middleware
//app.use(session(sess));
const hbs = exphbs.create({ });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}.`)
);
const express = require('express');
const morgan = require('morgan');

const mongoose = require('mongoose');
const path = require('path');

const app = express();

mongoose.connect('mongodb://localhost/libros')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

const indexRoutes = require('./routes/index');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))

app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
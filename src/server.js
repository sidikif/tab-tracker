const express = require('express');
// const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./models');
const config = require('./config/config');
// const serveStatic = require('serve-static');

let app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
// app.use(serveStatic(__dirname + "/old/dist"));

require('./routes')(app);

sequelize.sync()
  .then(() => {
    app.listen(config.port, () => {
      console.log('Server start and Listening on port ', config.port)
    });
  });



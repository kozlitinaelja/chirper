/**
 * Created by elle on 12/8/15.
 */
var express = require('express');
var login = require('./login.js');

express()
  .set('view engine', 'ejs')
  .use(express.static('./public'))
  .use(login.routes)
  .use(require('./chirps'))
  .get('*', login.required, function (req, res) {
    res.render('index', {
      user: login.safe(req.user)
    });
  })
  .listen(4000);
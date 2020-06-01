// import path creater module
const path = require('path');

// import express
const express = require('express');

// use express router to create routes
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;


'use strict';

const express = require('express');

const router = express.Router();

// YOUR CODE HERE
router.get('/classifieds', function(req, res){
    knex('classifieds')
      .orderBy('title')
       .then(function(data){
          res.send(humps.camelizeKeys(data))
      })
 })
router.get('/classifieds/:id', function(req, res){
  knex('classifieds')
})
 router.post('/classifieds', function(req, res){
   knex
 })
 router.patch('/classifieds/:id', function (req, res){

 })
 router.delete('classifieds/:id', function (req, res){

 })
module.exports = router;

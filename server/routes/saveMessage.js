var mongoose = require('mongoose');
var express = require("express");
var router = express.Router();
var message = require('../models/schemaFile');

router.post('/', function(req, res)
{
 console.log(req);
 var DbSchema = new message({ From: req.body.From,
  Subject: req.body.Subject,date: req.body.date});
 DbSchema.save(function (err)
 {
   if (err) {
     console.log(err);
    res.send('error');
   } else {
     console.log('Hello Saved');
     res.send('Update the record');
   }
 });
});
router.get('/', function(req, res)
{
  //var DbSchema = new message({ From: req.body.From,
    //Subject: req.body.Subject,date: req.body.date});
 message.find(function(err,data)
 {
   if(err){
     console.log(err);
   }else{
     console.log(data);
     res.send(data)
   }
 });
//  res.send('respond with a resource');
});
router.delete('/', function(req, res)
{
message.remove({_id:req.body._id}, function (err) {
  if (err)
       {
        console.log(err);
      } else
      {
        //console.log(req.body._id);
        console.log('deleted');
      }
   });
});
module.exports=router;

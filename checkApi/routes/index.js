var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.send({"responseId":req.body.responseId});
});

module.exports = router;
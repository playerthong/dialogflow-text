var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  var data={
    "payload": {
      "google": {
        "expectUserResponse": true,
        "richResponse": {
          "items": [
            {
              "simpleResponse": {
                "textToSpeech": "this is a simple response"
              }
            }
          ]
        }
      }
    }
  };
  
  res.send(data);
});

module.exports = router;

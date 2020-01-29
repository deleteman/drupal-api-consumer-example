var express = require('express');
var router = express.Router();
const request = require("request")

/* GET users listing. */
router.get('/', function(req, res, next) {
  request
  	.get("http://localhost:8888/api/articles/?_format=json", (err, resp, body) => {
  		if(err) return res.json(err)
  		res.json(JSON.parse(body))
  	})
});

module.exports = router;

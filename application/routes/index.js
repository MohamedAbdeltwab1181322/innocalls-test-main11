var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, response, next) {

    response.send("This is For testing slave");

    console.log("testing")

    // response.render('index', { title: "This is For testing slave" });

});

module.exports = router;
var express = require('express');
var router = express.Router(),
	client = require('../conecctions/conexion');



/* GET home page. */
router.get('/', function(req, res) {

	res.render('index', {
		title: 'Gestion de pedidos time real'
	});
});



module.exports = router;
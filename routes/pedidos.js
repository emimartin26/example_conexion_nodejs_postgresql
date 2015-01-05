var express = require('express');
var router = express.Router(),
	client = require('../conecctions/conexion');



/* GET home page. */
router.get('/', function(req, res) {
	client.query('SELECT * from pedidos', function(err, result) {
		if (err) {
			return console.error('error running query', err);
		}
		//client.end();
		res.render('pedidos', {
			title: result.rows[1].descripcion
		});

	});

});

router.get('/add', function(req, res) {
	res.render('add');
});

router.post('/add', function(req, res) {

	client.query('INSERT INTO pedidos (codigo,descripcion) values ($1,$2);', [req.body.codigo, req.body.descripcion], function(err, result) {
		if (err) {
			return console.error('error running query', err);
		}
		res.redirect('/pedidos/add');
		//client.end();
	});
});


module.exports = router;
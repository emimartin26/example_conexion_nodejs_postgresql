var pg = require('pg');
var conString = "postgres://postgres:metanoia26@localhost/pedidos";

var client = new pg.Client(conString);


client.connect(function(err) {
	if (err) {
		return console.error('Conexion con postgres no fue exitosa', err);
	}
	console.log('Conexion con postgres exitosa');
});
module.exports = client;
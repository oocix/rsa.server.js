/**
 * RSA Calc Server
 * @ moyo <moyo@uuland.org>
 * @ 2013/04/16
 * @ http://demo.uuland.org/~rsa/
 */

var port = 33922;
require('http').createServer(function (request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	var urls = require('url').parse(request.url, true);
	if (urls.pathname != '/query')
	{
			urls.query = {};
	}
	var public_exponent = '';
	var public_modulus = '';
	var string = '';
	if (urls.query.exponent)
	{
		public_exponent = urls.query.exponent;
	}
	if (urls.query.modulus)
	{
		public_modulus = urls.query.modulus;
	}
	if (urls.query.string)
	{
		string = urls.query.string;
	}
	if (public_exponent && public_modulus && string)
	{
		try
		{
			var result = '';
			var lrsa = require('./library/rsa.js');
			var lmath = require('./library/jsbn.js');
			var lrnd = require('./library/rng.js');
			var lrnd4 = require('./library/prng4.js');
			// calc
			var rsa = new lrsa.RSAKey(lmath, lrnd, lrnd4);
			rsa.setPublic(public_modulus, public_exponent);
			var res = rsa.encrypt(string);
			if (urls.query.format == 'base64')
			{
				var lb64 = require('./library/base64.js');
				result = lb64.hex2b64(res);
			}
			else
			{
				result = res;
			}
			// over
			response.end(result);
		}
		catch (e)
		{
			response.end('Server Error');
		}
	}
	else
	{
		response.end('RSA HASH Server');
	}
}).listen(port, '127.0.0.1');
console.log('[RSA HASH Server] running at :'+port);

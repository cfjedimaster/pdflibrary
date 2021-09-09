const pdfLib = require('./');

/*
Requires a file called samples/hamlet.pdf, change to a PDF on your system.
*/
(async () => {

	const lib = new pdfLib('./pdftools-api-credentials.json');

	try {
		await lib.export('./samples/hamlet.pdf', './samples/test.pptx', true);
	} catch(e) {
		console.error(e);
	}
	console.log('Done');

})();
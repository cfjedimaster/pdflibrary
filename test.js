const pdfLib = require('./');

(async () => {

	const lib = new pdfLib('./pdftools-api-credentials.json');

	try {
		await lib.export('./hamlet.pdf', './output/test.pptx', true);
	} catch(e) {
		console.error(e);
	}
	console.log('Done');

})();
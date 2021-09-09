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

	/*
	 An example of passing credentials via individual settings. Remember that
	 the key value needs to be a proper multiline string.
	*/
	const lib2 = new pdfLib({
		clientId: process.env.ADOBE_CLIENT_ID, 
		clientSecret: process.env.ADOBE_CLIENT_SECRET, 
		organizationId: process.env.ADOBE_ORGANIZATION_ID, 
		accountId: process.env.ADOBE_ACCOUNT_ID, 
		privateKey: process.env.ADOBE_KEY
	});

})();
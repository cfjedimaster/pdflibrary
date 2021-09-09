# PDFLibrary - an Opinionated Adobe PDF Services Wrapper

This is an opinionated wrapper for Adobe's [official Node SDK](https://www.npmjs.com/package/@adobe/pdfservices-node-sdk) for the [PDF Services API](https://www.adobe.io/apis/documentcloud/dcsdk/pdf-tools.html). While the SDK was easy to use, I wanted to add some syntatic sugar around stuff by making it work
well with Promises and async/await, and add things like, "do this operation, save it to X, and overwrite X if it exists."

Right now I'm shipping early so it absolutely does not cover 100% of the SDK. PRs are welcome and as I need stuff, I'll add it in. Also note you will need your own credentials to use this library, just like you would the core SDK itself. 

## Getting Started

Add the library like so: `npm i pdflibrary`. (Note for folks who may find this repository before I get a chance to push to npm - I may change the name. Sorry!)

Next, add it to your code:

```js
const pdfLib = require('./pdflibrary');
```

And then instantiate it. Right now you must pass the path to your credentials JSON file. Soon I'll add methods to pass in each value by itself (useful for when your credentials are stored in environment variables):

```js
const lib = new pdfLib('./pdftools-api-credentials.json');
```

## Methods

### export(from, to, overwrite=false)

Performs an export from PDF to another format. Example:

```js
await lib.export('./hamlet.pdf', './output/test.pptx');
```

Or to overwrite the output if it already exists:

```js
await lib.export('./hamlet.pdf', './output/test.pptx', true);
```

## History

9/9/2021: Initial release

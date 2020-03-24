const sdk = require('postman-collection');
const convert = require('./').convert,
    options = [{ indentType: 'Tab', indentCount: 4, followRediredirect: false, trimRequestBody: true, requestTimeout: 0 }];

const option = {
    // headers: {
    header: {
        "User-Agent": 'postman-request'
    },
    body: new sdk.RequestBody({
        raw: { "name": "somesh" },
        mode: "raw",
        disabled :false
    }),
    url: "google.com",
    method: "get"
    // 'content-type': 'text'
    // }
};
var request = new sdk.Request(option)
// console.log(request.body)
convert(request, options, function (err, snippet) {
    if (err) {
        // perform desired action of logging the error
    }
    console.log(snippet)
    // perform action with the snippet
});
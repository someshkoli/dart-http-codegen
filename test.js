const sdk = require('postman-collection'),
    fetchJson = require('./lib/codegen/util/loadJson').fetchJsonFromFile,
    convert = require('./').convert,
    _ = require('lodash');

const options = [{
    indentType: 'Tab',
    indentCount: 4,
    followRediredirect: false,
    trimRequestBody: true,
    requestTimeout: 0
}];
var requestList = [];
fetchJson('../../../test/unit/fixtures/sample_collection.json', (err, json) =>{
    var requests = []
    json.item.forEach((item)=>{
        convert(new sdk.Request(item.request), options, function (err, snippet) {
            if (err) {
            }
            console.log(snippet)
            console.log();
        });
    })
});
console.log(requestList);
const requestOption = {
    header: {
        "User-Agent": 'postman-request'
    },
    body: new sdk.RequestBody({
        raw: "name",
        mode: "raw",
        disabled: false
    }),
    url: "google.com",
    method: "get"
};

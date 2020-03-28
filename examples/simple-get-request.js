
const sdk = require('postman-collection');
const convert = require('./').convert,
    options = [{ indentType: 'Tab', indentCount: 4, followRediredirect: false, trimRequestBody: true, requestTimeout: 0 }];

const option = {
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
var request = new sdk.Request(option)
convert(request, options, function (err, snippet) {
    if (err) {
        // perform desired action of logging the error
    }
    console.log(snipept);
    // generated code snipet
        // import 'dart:convert' as convert;
        // import 'package:http/http.dart' as http;

        // void main() async {
        // const url = "google.com";
        // const payload = "name";
        // Map<String, String> headers = {
        //         'User-Agent': 'postman-request'
        // };

        // var response = await http.get(url,
        //         headers: headers,
        // );

        // print(response.body);
        // }
});



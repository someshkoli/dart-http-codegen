import 'dart:convert' as convert;
import 'package:http/http.dart' as http;

void main() async {
const url = "google.com";
const payload = "name";
Map<String, String> headers = {
        'User-Agent': 'postman-request'
};

var response = await http.get(url,
        headers: headers,
);

print(response.body);
}
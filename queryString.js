const querystring=require('querystring');
const queryString='foo=bar&baz=qux';
const parsedQuery=querystring.parse(queryString);
console.log(parsedQuery);
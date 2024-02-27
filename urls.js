const url=require('url');
const urlString='http://example.com/path?foo=bar&baz=qux';
const parsedUrl=url.parse(urlString,true);
// const parsedUrl=url.parse;

console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
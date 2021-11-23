const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url,req.method);
  //set header context type
  res.setHeader('Content-Type','text/html');


  res.write('hello,ninjas</P>');
  res.write('<p>hello again, ninjas</p>');
  res.end();
});
  server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
  });
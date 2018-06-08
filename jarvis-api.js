let express = require('express')
let app = express()
let Marvel = require('./avengers')



})


app.get('/', function(request,response) {
  var avengers = new Marvel ({
    publicKey : '3d82e91fbd3d89a2a32319235b3aa3b2',
    privateKey : 'aa9171353466ac3df782c0cfd95e2a9454517ce1'
  })  
 
  avengers.assemble(function(avengers){
    response.send(JSON.parse(avengers))

})
})   
     
/*

response.send("<h2>Welcome to the Lady Avengers Home Page!</h2>")


//Thundra
app.get('/Thundra', function(req,res) {
  response.send("<h3>Welcome to Lady Avengers</h3>");
});
//Storm
app.get('/Storm', function(req,res) {
  response.send("<h3>Welcome to Lady Avengers</h3>");
});
//Selene
app.get('/Selene', function(req,res) {
  response.send("<h3>Welcome to Lady Avengers</h3>");
});

//Thena
app.get('/Thena', function(req,res) {
  response.send("<h3>Welcome to Lady Avengers</h3>");
});

//Mary Jane Watson
app.get('/Mary-Jane-Watson', function(req,res) {
  response.send("<h3>Welcome to Lady Avengers</h3>");
});

//notFound
app.get('*', function(req, res) {
  response.send("This is not the page that you are looking for");
});

*/

  app.listen('9410', function() {
    console.log('running on port 9410')
  
  
  })

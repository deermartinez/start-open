var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var todoRouter = require('./routes/todo');

var PORT = 8080;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/todo',todoRouter);


app.get('/',function(req,res){
  res.render('index')
  
});


app.get('/food',function(req,res){
  res.render('food')
  
  
});
app.get('/movies',function(req,res){
  res.render('movies')
  
  
});
app.get('/framework',function(req,res){
  res.render('framework')
  
  
});

app.get('/todo',function(req,res){
  res.render('all')
});





function handleRequest(req,res){
  const path = req.url;

  //routes
  switch(path){
      case"/thanks":
          return renderThankYouPage(req,res);

      default:
          return renderWelcomePage(req,res);
          //have not made these yet
  };
};


//target the fs-file system
//create above pages
function renderWelcomePage(req,res){
  //use the required file system module/package to read and pull from index.html
  fs.readFile(__dirname + "/index.html", function(err,data){
      if(err){
          res.writeHead(500,{"Content-Type":"text/html"});
          
          //response end
          res.end(
              "<html><head><title>OOPS</title></head><body><h1>Something went wrong</h1></body></html>"
              //html won't work on split up lines unless there are quotationmarks on every line
          );
      }else{
          res.writeHead(200,{"Content-Type": "text/html"});
          res.end(data);
      }
  }
  )
};


//give client html page
//tell the browser that

function renderThankYouPage(req,res){
  var requestData = "";
  var myHTML = "<html><head><title>Node</title></head><body><h1>No data yet</h1></body></html>";



//when the server recieves data it will store to requestData
//.enit="fires" event
  req.on("data", function(data){
      requestData+=data;
      console.log("You just posted some data to the server: \n", requestData);

      myHTML = "<html><head><title>Hello</title></head><body>" +
      "<h1>Thank you for the data!:</h1><code>"+
      requestData +
      "</code></body></html>";
  })

//request end

req.on("end",function(){
  res.writeHead(200,{"Content-Type":"text/html"});
});
};




// catch 404 and forward to error handler
// app.use(function(req, res) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res,next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
app.listen(PORT,function(){
  console.log("App is listening on port: "+ PORT)
});

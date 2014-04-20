
// Configuration
var HttpPort = 80;

/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || HttpPort);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  // use jade template, not layout
  app.set('view options', { layout: false });
});

app.configure(function () {
  app.use(express.favicon((__dirname + '/public/images/jswebapp_favicon.ico')));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, '/public')));
});

app.configure('development', function () {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function () {
  app.use(express.errorHandler());
});


// Routes
app.get('/', routes.home);
app.get('/contents', routes.contents);
app.get('/chapter/:chapterNum?', routes.chapter);
app.get('/chapter/:chapterNum/section/:sectionNum?', routes.section);
app.get('/resources', routes.resources);
app.get('/about', routes.about);

http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server listening on port %d in %s mode", app.get('port'), app.settings.env);
});

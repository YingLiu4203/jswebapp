
var chapters = require('./toc').chapters;
// the folder for all chapters, also the prefix for chapter name
var ChapterFolder = 'chapters';
var ChapterPrefix = 'chapter';

// has to be the same as jQuery cookies
// we set old session by jQuery
// connect cookieParser returns lower case name !!!
var LastVisitPathCookieName = 'jswebapp.lastvisitpath';
var IsOldSessionCookieName = 'jswebapp.isoldsession';

exports.home = function (req, res) {
  var lastVisitPath = req.cookies[LastVisitPathCookieName];
  // old session or invalid last visit path or last visit is home, go home
  if (req.cookies[IsOldSessionCookieName] || (!lastVisitPath) || (lastVisitPath === '/')) {
    res.render('home',
      { pageTitle: 'JavaScript for Web Application Development' });
  } else {
    res.redirect(lastVisitPath);
  }
};

exports.contents = function (req, res) {
  res.render('contents', { chapters: chapters });
};

exports.resources = function (req, res) {
  res.render('resources');
};

exports.about = function (req, res) {
  res.render('about');
};

// chapter num and section num start at 1
// we covert them to int for navigation menu calculation
exports.chapter = function (req, res) {
  var chapterNum = parseInt(req.params.chapterNum);
  if (chapterNum) {
    renderSection(res, chapterNum, 1);
  } else {
    res.render('contents');
  }
};

exports.section = function (req, res) {
  var chapterNum = parseInt(req.params.chapterNum);
  var sectionNum = parseInt(req.params.sectionNum);
  if (!sectionNum) {
    sectionNum = 1;
  }
  renderSection(res, chapterNum, sectionNum);
};

function renderSection(res, chapterNum, sectionNum) {
  var chapterName = ChapterPrefix + chapterNum;
  var viewName = ChapterFolder + '/' + chapterName + '/' + sectionNum;
  res.render(viewName,
    {chapterNum: chapterNum, sectionNum: sectionNum, chapters: chapters });
}
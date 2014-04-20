
// jQuery UI settings
$(function () {

  var LastVisitPathCookieName = 'jswebapp.lastvisitpath';
  var IsOldSessionCookieName = 'jswebapp.isoldsession';
  var expireDays = 14;
  var currentPath = window.location.pathname;
  $.cookie(LastVisitPathCookieName, currentPath,
    {
      expires: expireDays,
      path: '/'
    });
  // session cookie, deleted when browser closed
  $.cookie(IsOldSessionCookieName, 1, { path: '/' });

  $("nav.menu a").button();

  $("a.prevSection").button({
    text: false,
    icons: {
      primary: "ui-icon-triangle-1-w"
    }
  });

  $("a.nextSection").button({
    text: false,
    icons: {
      primary: "ui-icon-triangle-1-e"
    }
  });

  $("#BodyContent").addClass("ui-corner-all");

});

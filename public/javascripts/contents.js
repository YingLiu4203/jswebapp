
$(function () {
  var TocStatusCookieName = 'jswebapp.tocbuttonstatus';
  var expireDays = 7;

  var showOptions = {
    label: "minus",
    icons: {
      primary: "ui-icon-minus"
    }
  };

  var hideOptions = {
    label: "plus",
    icons: {
      primary: "ui-icon-plus"
    }
  };

  function setCookieByArray(dataArray) {
    $.cookie(TocStatusCookieName, JSON.stringify(dataArray), { expires: expireDays });
  }

  // insert a button before chapter titile and hide sections
  // add an id to the button
  $("#contents .tocChapter")
    .each(function (currentIndex) {
      $(this).prepend("<button class='tocChapterButton' id = '" + currentIndex + "'>plus</button>");
    });

  var numOfButtons = $(".tocChapterButton").length;
  // read cookie first
  var tocStatusArray = [];
  if ($.cookie(TocStatusCookieName)) {
    tocStatusArray = JSON.parse($.cookie(TocStatusCookieName));
    // elminate invalide elements
    tocStatusArray = tocStatusArray.filter(function (value) {
      return (typeof (value) == 'number' &&
            /^\d*$/.test(value.toString(10)) &&
            value >= 0 &&
            value < numOfButtons);
    });

  } 
  // set a clean cookie
  setCookieByArray(tocStatusArray);
  
  // initial button status from cookie
  $(".tocChapterButton")
    .button({ text: false })
    .each(function (currentIndex) {
      // jQuery returns -1 if not found
      if ($.inArray(currentIndex, tocStatusArray) === -1) {
        $(this).button("option", hideOptions);
        $(this).parent().next().hide();
      } else {
        $(this).button("option", showOptions);
        $(this).parent().next().show();
      }
    })
    .click(function () {
      var tocStatusArray = JSON.parse($.cookie(TocStatusCookieName))
      var buttonIndex = parseInt($(this).attr('id'), 10);
      if ($(this).text() === "plus") {
        $(this).button("option", showOptions);
        $(this).parent().next().show();
        // add it if not found to make it more reliable
        var foundIndex = $.inArray(buttonIndex, tocStatusArray);
        if (foundIndex === -1) {
          tocStatusArray.push(buttonIndex);
        }
        
      } else {
        $(this).button("option", hideOptions);
        $(this).parent().next().hide();
        var foundIndex = $.inArray(buttonIndex, tocStatusArray);
        if (foundIndex !== -1) {
          tocStatusArray.splice(foundIndex, 1);
        }
      }
      setCookieByArray(tocStatusArray);
    }) 
});
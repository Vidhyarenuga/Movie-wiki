window.onhashchange = function() {
  console.log("Welcome back!");
  console.log(window.location.href);

  if (window.location.href.split("#") != undefined) {
    console.log(window.location.href.split("#"));
  } else {
    console.log("Hey User");
  }
};

(function (window) {
  var yaakovGreeter = {};
  yaakovGreeter.name = "Yaakov";
  var greeting = "Hello ";
  yaakovGreeter.sayHello = function () {
    console.log("ololol "+ greeting + yaakovGreeter.name);
  }

  yaakovGreeter.sayName = function (vName) {
    console.log("ololol "+ greeting + vName);
  }

  window.yaakovGreeter = yaakovGreeter;

})(window);

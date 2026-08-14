// tags/greeting.marko
const $template$2 = "<div> </div>";
const $walks$2 = "D l";
const $setup$2 = () => {};
function shout(message) {
	return message.toUpperCase() + "!";
}
const $input_message = ($scope, input_message) => _text($scope["#text/0"], input_message);
const $input = ($scope, input) => $input_message($scope, input.message);
var greeting_default = /*@__PURE__*/ _template("__tests__/tags/greeting.marko", $template$2, "D l", 0, $input);

// tags/v:greeting.marko.register-shout.js
_resume("__tests__/tags/greeting.marko_0/export/shout", shout);

// tags/panel.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<button>panel</button>${_w0}`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)("D l");
const $format$1 = /*@__PURE__*/ _let("format/2");
const $message$1 = /*@__PURE__*/ _let("message/3", ($scope) => $input_message($scope["#childScope/1"], $scope.message));
const $setup__script$1 = _script("__tests__/tags/panel.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$message$1($scope, $scope.format($scope.message));
}));
function $setup$1($scope) {
	$format$1($scope, shout);
	$message$1($scope, "panel");
	$setup__script$1($scope);
}
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button>page</button>${_w0}${_w1}`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => ` b/${_w0}&/${_w1}&`)("D l", $walks$1);
const $format = /*@__PURE__*/ _let("format/3");
const $message = /*@__PURE__*/ _let("message/4", ($scope) => $input_message($scope["#childScope/1"], $scope.message));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$message($scope, $scope.format($scope.message));
}));
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	$format($scope, shout);
	$message($scope, "page");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

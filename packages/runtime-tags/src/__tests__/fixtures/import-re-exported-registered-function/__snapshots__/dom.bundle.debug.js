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

// tags/greetings.marko
const $template$1 = "<div>greetings</div>";
const $walks$1 = "b";
const $setup$1 = () => {};
var greetings_default = /*@__PURE__*/ _template("__tests__/tags/greetings.marko", $template$1, "b");

// tags/v:greeting.marko.register-shout.js
_resume("__tests__/tags/greeting.marko_0/export/shout", shout);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>shout</button>${_w0}`)($template$2);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)("D l");
const $format = /*@__PURE__*/ _let("format/2");
const $message = /*@__PURE__*/ _let("message/3", ($scope) => $input_message($scope["#childScope/1"], $scope.message));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$message($scope, $scope.format($scope.message));
}));
function $setup($scope) {
	$format($scope, shout);
	$message($scope, "hello");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

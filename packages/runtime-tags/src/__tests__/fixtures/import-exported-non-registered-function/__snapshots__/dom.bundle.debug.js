// tags/greeting.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
const $setup$1 = () => {};
function shout(message) {
	return message.toUpperCase() + "!";
}
const $input_message = ($scope, input_message) => _text($scope, "#text/0", input_message);
const $input = ($scope, input) => $input_message($scope, input.message);
var greeting_default = /*@__PURE__*/ _template("__tests__/tags/greeting.marko", $template$1, "D l", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>add</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)("D l");
const $message = /*@__PURE__*/ _let("message/2", ($scope) => $input_message($scope["#childScope/1"], shout($scope.message)));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$message($scope, $scope.message + "!");
}));
function $setup($scope) {
	$message($scope, "hello");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

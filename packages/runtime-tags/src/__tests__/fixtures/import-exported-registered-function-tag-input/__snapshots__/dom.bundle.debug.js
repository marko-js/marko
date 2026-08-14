// tags/handlers.marko
const $template$2 = "";
const $walks$2 = "";
const $setup$2 = () => {};
function shout(message) {
	return message.toUpperCase() + "!";
}
var handlers_default = /*@__PURE__*/ _template("__tests__/tags/handlers.marko", "", "");

// tags/press.marko
const $template$1 = "<button>press</button><div> </div>";
const $walks$1 = " bD l";
const $label = /*@__PURE__*/ _let("label/4", ($scope) => _text($scope["#text/1"], $scope.label));
const $setup__script = _script("__tests__/tags/press.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$label($scope, $scope.input.format($scope.label));
}));
function $setup$1($scope) {
	$label($scope, "quiet");
	$setup__script($scope);
}
const $input = /*@__PURE__*/ _const("input");
var press_default = /*@__PURE__*/ _template("__tests__/tags/press.marko", $template$1, $walks$1, $setup$1, $input);

// tags/v:handlers.marko.register-shout.js
_resume("__tests__/tags/handlers.marko_0/export/shout", shout);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input($scope["#childScope/0"], { format: shout });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

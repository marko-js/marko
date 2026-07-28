// tags/extras.marko
const $template$3 = "";
const $walks$3 = "";
const $setup$3 = () => {};
function gamma(message) {
	return message + "-g";
}
var extras_default = /*@__PURE__*/ _template("__tests__/tags/extras.marko", "", "", $setup$3);

// tags/handlers.marko
const $template$2 = "";
const $walks$2 = "";
const $setup$2 = () => {};
function alpha(message) {
	return message + "-a";
}
function beta(message) {
	return message + "-b";
}
var handlers_default = /*@__PURE__*/ _template("__tests__/tags/handlers.marko", "", "", $setup$2);

// tags/barrel.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = () => {};
var barrel_default = /*@__PURE__*/ _template("__tests__/tags/barrel.marko", "", "", $setup$1);

// tags/v:handlers.marko.register-beta.js
_resume("__tests__/tags/handlers.marko_0/export/beta", beta);

// tags/v:extras.marko.register-gamma.js
_resume("__tests__/tags/extras.marko_0/export/gamma", gamma);

// template.marko
const $template = "<button>go</button><div> </div>";
const $walks = " bD l";
const $first = /*@__PURE__*/ _let("first/2");
const $second = /*@__PURE__*/ _let("second/3");
const $message = /*@__PURE__*/ _let("message/4", ($scope) => _text($scope["#text/1"], $scope.message));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$message($scope, $scope.second($scope.first($scope.message)));
}));
function $setup($scope) {
	$first($scope, beta);
	$second($scope, gamma);
	$message($scope, "start");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

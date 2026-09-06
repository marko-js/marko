// tags/kid.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $c = /*@__PURE__*/ _fill_let("__tests__/tags/kid.marko0", "c/2", ($scope) => {
	_text($scope["#text/1"], $scope.c);
	_return($scope, $scope.c);
});
const $setup__script = _script("__tests__/tags/kid.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, +$scope.c + 1);
}));
function $setup$1($scope) {
	$c($scope, 1);
	$setup__script($scope);
}
var kid_default = /*@__PURE__*/ _template("__tests__/tags/kid.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)($walks$1);
const $x = _var_resume("__tests__/template.marko_0_x#3/var", ($scope, x) => _text($scope["#text/2"], x));
function $setup($scope) {
	_var($scope, "#childScope/0", $x);
	$setup$1($scope["#childScope/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/child.marko
const $template$1 = "<p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p>";
const $walks$1 = "D lD lD lD lD lD lD lD lD lD lD lD lD lD lD lD lD l";
const $setup$1 = () => {};
const $input_a = ($scope, input_a0) => _text($scope["#text/0"], input_a0);
const $input_a2 = ($scope, input_a1) => _text($scope["#text/1"], input_a1);
const $input_a3 = ($scope, input_a2) => _text($scope["#text/2"], input_a2);
const $input_a4 = ($scope, input_a3) => _text($scope["#text/3"], input_a3);
const $input_a5 = ($scope, input_a4) => _text($scope["#text/4"], input_a4);
const $input_a6 = ($scope, input_a5) => _text($scope["#text/5"], input_a5);
const $input_a7 = ($scope, input_a6) => _text($scope["#text/6"], input_a6);
const $input_a8 = ($scope, input_a7) => _text($scope["#text/7"], input_a7);
const $input_a9 = ($scope, input_a8) => _text($scope["#text/8"], input_a8);
const $input_a10 = ($scope, input_a9) => _text($scope["#text/9"], input_a9);
const $input_a11 = ($scope, input_a10) => _text($scope["#text/10"], input_a10);
const $input_a12 = ($scope, input_a11) => _text($scope["#text/11"], input_a11);
const $input_a13 = ($scope, input_a12) => _text($scope["#text/12"], input_a12);
const $input_a14 = ($scope, input_a13) => _text($scope["#text/13"], input_a13);
const $input_a15 = ($scope, input_a14) => _text($scope["#text/14"], input_a14);
const $input_a16 = ($scope, input_a15) => _text($scope["#text/15"], input_a15);
const $input_a17 = ($scope, input_a16) => _text($scope["#text/16"], input_a16);
const $input = ($scope, input) => {
	$input_a($scope, input.a0);
	$input_a2($scope, input.a1);
	$input_a3($scope, input.a2);
	$input_a4($scope, input.a3);
	$input_a5($scope, input.a4);
	$input_a6($scope, input.a5);
	$input_a7($scope, input.a6);
	$input_a8($scope, input.a7);
	$input_a9($scope, input.a8);
	$input_a10($scope, input.a9);
	$input_a11($scope, input.a10);
	$input_a12($scope, input.a11);
	$input_a13($scope, input.a12);
	$input_a14($scope, input.a13);
	$input_a15($scope, input.a14);
	$input_a16($scope, input.a15);
	$input_a17($scope, input.a16);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button id=inc> </button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& D l`)($walks$1);
const $x = /*@__PURE__*/ _let("x/3", ($scope) => {
	$input_a($scope["#childScope/0"], $scope.x);
	$input_a2($scope["#childScope/0"], $scope.x);
	$input_a3($scope["#childScope/0"], $scope.x);
	$input_a4($scope["#childScope/0"], $scope.x);
	$input_a5($scope["#childScope/0"], $scope.x);
	$input_a6($scope["#childScope/0"], $scope.x);
	$input_a7($scope["#childScope/0"], $scope.x);
	$input_a8($scope["#childScope/0"], $scope.x);
	$input_a9($scope["#childScope/0"], $scope.x);
	$input_a10($scope["#childScope/0"], $scope.x);
	$input_a11($scope["#childScope/0"], $scope.x);
	$input_a12($scope["#childScope/0"], $scope.x);
	$input_a13($scope["#childScope/0"], $scope.x);
	$input_a14($scope["#childScope/0"], $scope.x);
	_text($scope["#text/2"], $scope.x);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$x($scope, +$scope.x + 1);
}));
function $setup($scope) {
	$input_a15($scope["#childScope/0"], 14);
	$input_a16($scope["#childScope/0"], 15);
	$input_a17($scope["#childScope/0"], 16);
	$x($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/effect-only.marko
const $template$3 = "";
const $walks$3 = "";
const $setup$3 = () => {};
const $input_n__script = _script("__tests__/tags/effect-only.marko_0_input_n#2", ($scope) => console.log($scope.input_n));
const $input_n = /*@__PURE__*/ _const("input_n", $input_n__script);
const $input = ($scope, input) => $input_n($scope, input.n);
var effect_only_default = /*@__PURE__*/ _template("__tests__/tags/effect-only.marko", "", "", 0, $input);

// tags/text-end.marko
const $template$2 = "<b></b>tail";
const $walks$2 = "c";
const $setup$2 = () => {};
var text_end_default = /*@__PURE__*/ _template("__tests__/tags/text-end.marko", $template$2, "c");

// tags/text-start.marko
const $template$1 = "head<b></b>";
const $walks$1 = "c";
const $setup$1 = () => {};
var text_start_default = /*@__PURE__*/ _template("__tests__/tags/text-start.marko", $template$1, "c");

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1, _w2, _w3, _w4, _w5) => `<div>${_w0}</div><span> </span><p>${_w1}${_w2}<!> more <span> </span><i> </i></p><p>lead ${_w3}<!>${_w4}<span> </span><i> </i></p><p>lead ${_w5} more <span> </span><i> </i></p><p>lead  more <span> </span><i> </i></p><button></button>`)("", $template$2, "", "", $template$1, "");
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2, _w3, _w4, _w5) => `/${_w0}&bD lD/${_w1}&/${_w2}&cD lD /${_w3}&mDc/${_w4}&D lD /${_w5}&mDbD lD /&mDbD lD m b`)("", "c", "", "", "c", "");
const $Foo_content__n__script = _script("__tests__/template.marko_1_n#2", ($scope) => console.log($scope.n));
const $Foo_content__n = /*@__PURE__*/ _const("n", $Foo_content__n__script);
const $Foo_content__$params = ($scope, $params2) => $Foo_content__$temp($scope, $params2?.[0]);
const $Foo_content__$temp = ($scope, $temp) => $Foo_content__n($scope, $temp.n);
const $n = /*@__PURE__*/ _let("n/17", ($scope) => {
	$input_n($scope["#childScope/0"], $scope.n);
	_text($scope["#text/1"], $scope.n);
	$input_n($scope["#childScope/3"], $scope.n);
	_text($scope["#text/4"], $scope.n);
	_text($scope["#text/5"], $scope.n);
	$input_n($scope["#childScope/6"], $scope.n);
	_text($scope["#text/8"], $scope.n);
	_text($scope["#text/9"], $scope.n);
	$input_n($scope["#childScope/10"], $scope.n);
	_text($scope["#text/11"], $scope.n);
	_text($scope["#text/12"], $scope.n);
	$Foo_content__n($scope["#childScope/13"], $scope.n);
	_text($scope["#text/14"], $scope.n);
	_text($scope["#text/15"], $scope.n);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/16"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

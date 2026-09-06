// tags/widget/tags/inner/index.marko
const $template$2 = "<button class=bump>+</button>";
const $walks$2 = " b";
const $n = /*@__PURE__*/ _fill_let("__tests__/tags/widget/tags/inner/index.marko0", "n/1", ($scope) => _return($scope, $scope.n));
const $setup__script$2 = _script("__tests__/tags/widget/tags/inner/index.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup$2($scope) {
	_return_change($scope, $valueChange($scope));
	$n($scope, 1);
	$setup__script$2($scope);
}
const $valueChange = ($scope) => function(v) {
	$n($scope, v);
};
_resume("__tests__/tags/widget/tags/inner/index.marko_0/valueChange", $valueChange);
var inner_default = /*@__PURE__*/ _template("__tests__/tags/widget/tags/inner/index.marko", $template$2, " b", $setup$2);

// tags/widget/index.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `${_w0}<em> </em><button class=reset>r</button>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `0${_w0}&D l b`)(" b");
const $v = _var_resume("__tests__/tags/widget/index.marko_0_v#4/var", ($scope, v) => _text($scope["#text/2"], v));
const $setup__script$1 = _script("__tests__/tags/widget/index.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	_var_change($scope["#childScope/0"], 0, "v");
}));
function $setup$1($scope) {
	_var($scope, "#childScope/0", $v);
	$setup$2($scope["#childScope/0"]);
	$setup__script$1($scope);
}
var widget_default = /*@__PURE__*/ _template("__tests__/tags/widget/index.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = "<main><!><button class=toggle>t</button></main>";
const $walks = "D%b l";
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/g.marko
const $template$1 = "";
const $walks$1 = "";
const $value = /*@__PURE__*/ _let("value/0", ($scope) => _return($scope, $scope.value));
function $setup$1($scope) {
	_return_change($scope, $valueChange($scope));
	$value($scope, 0);
}
const $valueChange = ($scope) => function(next) {
	$scope.$global.store = next;
};
_resume("__tests__/tags/g.marko_0/valueChange", $valueChange);
var g_default = /*@__PURE__*/ _template("__tests__/tags/g.marko", "", "", $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button> </button>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}& D l`)("");
const $v = _var_resume("__tests__/template.marko_0_v#4/var", ($scope, v) => _text($scope["#text/3"], v));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	_var_change($scope["#childScope/0"], 1, "v");
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $v);
	$setup$1($scope["#childScope/0"]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

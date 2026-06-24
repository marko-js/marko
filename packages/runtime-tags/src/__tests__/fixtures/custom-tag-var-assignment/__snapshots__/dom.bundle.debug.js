// tags/counter.marko
const $template$1 = "<button class=inc-child> </button>";
const $walks$1 = " D l";
const $x__script = _script("__tests__/tags/counter.marko_0_x", ($scope) => _on($scope["#button/0"], "click", function() {
	$x($scope, $scope.x + 1);
}));
const $x = /*@__PURE__*/ _let("x/2", ($scope) => {
	_text($scope["#text/1"], $scope.x);
	_return($scope, $scope.x);
	$x__script($scope);
});
function $setup$1($scope) {
	_return_change($scope, $valueChange($scope));
	$x($scope, 1);
}
function $valueChange($scope) {
	return (_new_x) => {
		$x($scope, _new_x);
	};
}
_resume("__tests__/tags/counter.marko_0/valueChange", $valueChange);
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button class=inc-parent> </button><button class=reset>reset</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}& D l b`)($walks$1);
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/2"], "click", function() {
	_var_change($scope["#childScope/0"], $scope.count + 1, "count");
}));
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _const("count", ($scope) => {
	_text($scope["#text/3"], $scope.count);
	$count__script($scope);
}));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/4"], "click", function() {
	_var_change($scope["#childScope/0"], 0, "count");
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $count);
	$setup$1($scope["#childScope/0"]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

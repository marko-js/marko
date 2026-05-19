// tags/let-global.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = () => {};
const subsByKey = {};
const $value = /* @__PURE__ */ _let("value/3", ($scope) => _return($scope, $scope.value));
const $input_value__script = _script("__tests__/tags/let-global.marko_0_input_value", ($scope) => {
	{
		const subs = subsByKey[$scope.input_value] ??= new Set();
		const sub = () => $value($scope, $scope.$global[$scope.input_value]);
		$signal($scope, 0).onabort = () => subs.delete(sub);
		subs.add(sub);
	}
});
const $input_value = /* @__PURE__ */ _const("input_value", ($scope) => {
	$signalReset($scope, 0);
	_return_change($scope, $valueChange($scope));
	$value($scope, $scope.$global[$scope.input_value]);
	$input_value__script($scope);
});
const $input = ($scope, input) => $input_value($scope, input.value);
function $valueChange($scope) {
	return function(next) {
		$scope.$global[$scope.input_value] = next;
		subsByKey[$scope.input_value]?.forEach((cb) => cb());
	};
}
_resume("__tests__/tags/let-global.marko_0/valueChange", $valueChange);
var let_global_default = /* @__PURE__ */ _template("__tests__/tags/let-global.marko", "", "", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `${_w0}<div> </div><div> </div><button> </button>`)("");
const $walks = /* @__PURE__ */ ((_w0) => `0${_w0}&D lD l D l`)("");
const $a__OR__b = /* @__PURE__ */ _or(8, ($scope) => _text($scope["#text/5"], `${$scope.a},${$scope.b}`), 1, "#scopeOffset/1");
const $b = /* @__PURE__ */ _let("b/7", ($scope) => {
	_text($scope["#text/3"], $scope.b);
	$a__OR__b($scope);
});
const $a = _var_resume("__tests__/template.marko_0_a/var", /* @__PURE__ */ _const("a", ($scope) => {
	_text($scope["#text/2"], $scope.a);
	$b($scope, $scope.a + 1);
	$a__OR__b($scope);
}));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/4"], "click", function() {
	_var_change($scope["#childScope/0"], 2, "a");
	$b($scope, 2);
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $a);
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_value($scope["#childScope/0"], "count");
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);

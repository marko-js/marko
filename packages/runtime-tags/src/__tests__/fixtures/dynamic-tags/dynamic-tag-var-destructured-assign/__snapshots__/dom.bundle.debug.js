// tags/a.marko
const $template$2 = "<span>a:<!></span>";
const $walks$2 = "Db%l";
const $value$2 = /*@__PURE__*/ _let("value/1", ($scope) => {
	_return($scope, {
		value: $scope.value,
		valueChange: $_return$1($scope)
	});
	_text($scope["#text/0"], $scope.value);
});
function $setup$2($scope) {
	$value$2($scope, 1);
}
const $_return$1 = ($scope) => function(v) {
	$value$2($scope, v);
};
_resumed["__tests__/tags/a.marko_0/_return"] = $_return$1;
var a_default = /*@__PURE__*/ _template("__tests__/tags/a.marko", $template$2, $walks$2, $setup$2);

// tags/b.marko
const $template$1 = "<span>b:<!></span>";
const $walks$1 = "Db%l";
const $value$1 = /*@__PURE__*/ _let("value/1", ($scope) => {
	_return($scope, {
		value: $scope.value,
		valueChange: $_return($scope)
	});
	_text($scope["#text/0"], $scope.value);
});
function $setup$1($scope) {
	$value$1($scope, 10);
}
const $_return = ($scope) => function(v) {
	$value$1($scope, v);
};
_resumed["__tests__/tags/b.marko_0/_return"] = $_return;
var b_default = /*@__PURE__*/ _template("__tests__/tags/b.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = "<!><!><button> </button>";
const $walks = "b1b D l";
const $setup = () => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, () => $pattern2);
const $pattern2 = _var_resume("__tests__/template.marko_0_$pattern#7/var", ($scope, $pattern) => {
	$value($scope, $pattern.value);
	$valueChange2($scope, $pattern.valueChange);
});
const $value__OR__$valueChange__script = _script("__tests__/template.marko_0_value#8_$valueChange#9", ($scope) => _on($scope["#button/2"], "click", function() {
	$scope.$valueChange(+$scope.value + 1);
}));
const $value__OR__$valueChange = /*@__PURE__*/ _or(10, $value__OR__$valueChange__script, 1, "#scopeOffset/1");
const $value = /*@__PURE__*/ _const("value", ($scope) => {
	_text($scope["#text/3"], $scope.value);
	$value__OR__$valueChange($scope);
});
const $valueChange2 = /*@__PURE__*/ _const("$valueChange", $value__OR__$valueChange);
const $input_a = ($scope, input_a) => $dynamicTag($scope, input_a ? a_default : b_default);
const $input = ($scope, input) => $input_a($scope, input.a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

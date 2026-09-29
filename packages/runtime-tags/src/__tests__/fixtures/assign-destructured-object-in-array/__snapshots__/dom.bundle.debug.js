// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $pattern2 = ($scope, $pattern) => {
	$value2($scope, $pattern[0].value);
	$valueChange2($scope, $pattern[0].valueChange);
};
const $value__OR__$valueChange__script = _script("__tests__/template.marko_0_value#5_$valueChange#6", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.$valueChange(+$scope.value + 1);
}));
const $value__OR__$valueChange = $value__OR__$valueChange__script;
const $count = /*@__PURE__*/ _let("count/2", ($scope) => {
	$pattern2($scope, [{
		value: $scope.count,
		valueChange: $value($scope)
	}]);
	$value__OR__$valueChange($scope);
});
function $setup($scope) {
	$count($scope, 0);
}
const $value2 = /*@__PURE__*/ _const("value", ($scope) => _text($scope["#text/1"], $scope.value));
const $valueChange2 = /*@__PURE__*/ _const("$valueChange");
const $value = ($scope) => function(v) {
	$count($scope, v);
};
_resumed["__tests__/template.marko_0/value"] = $value;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

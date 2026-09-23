// template.marko
const $for_content__setup = ($scope) => {
	_attr($scope.a, "value", $scope.M);
	_text($scope.b, $scope.M);
};
const $for = /*@__PURE__*/ _for_of(0, "<option> </option>", " D ", $for_content__setup);
const $options = /*@__PURE__*/ _let(4, ($scope) => {
	$options_($scope, $scope.e?.[0]);
	$for($scope, [$scope.e, (v) => v]);
});
const $value = /*@__PURE__*/ _let(6, ($scope) => {
	_attr_select_value($scope, "a", $scope.g, $valueChange($scope));
	_text($scope.b, $scope.g);
});
const $options_ = /*@__PURE__*/ _const(5, ($scope) => $value($scope, $scope.f));
const $setup__script = _script("a1", ($scope) => {
	_attr_select_value_script($scope, "a");
	_on($scope.a, "change", console.log);
	_on($scope.a, "input", console.log);
	_on($scope.c, "click", function() {
		$options($scope, $scope.e.slice(1));
	});
	_on($scope.d, "click", function() {
		$options($scope, [$scope.e?.length ? $scope.e?.[0] - 1 : 3, ...$scope.e]);
	});
});
const $valueChange = ($scope) => (_new_value) => {
	$value($scope, _new_value);
};
_resumed.a0 = $valueChange;

// template.marko
const $for_content__setup = ($scope) => {
	_attr($scope.a, "value", $scope.M);
	_text($scope.b, $scope.M);
};
const $for = /*@__PURE__*/ _for_of(0, "<option> </option>", " D ", $for_content__setup);
const $options = /*@__PURE__*/ _let(3, ($scope) => $for($scope, [$scope.d, (v) => v]));
const $selected = /*@__PURE__*/ _let(4, ($scope) => {
	_attr_select_value($scope, "a", $scope.e, $valueChange($scope));
	_text($scope.b, $scope.e.join(","));
});
const $setup__script = _script("a1", ($scope) => {
	_attr_select_value_script($scope, "a");
	_on($scope.c, "click", function() {
		$options($scope, [...$scope.d, "d"]);
	});
});
const $valueChange = ($scope) => function(v) {
	$selected($scope, v);
};
_resumed.a0 = $valueChange;

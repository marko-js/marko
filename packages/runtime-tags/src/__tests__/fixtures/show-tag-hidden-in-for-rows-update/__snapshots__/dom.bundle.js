// template.marko
const $for_content__label = ($scope, label) => {
	_text($scope.a, label);
	$for_content__show($scope, label?.length > 1);
};
const $for_content__show = /*@__PURE__*/ _show(1);
const $for_content__$params = ($scope, $params2) => $for_content__label($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(2, "<!><li> </li><!><!>", "bD l%", 0, $for_content__$params);
const $labels = /*@__PURE__*/ _let(3, ($scope) => $for($scope, [$scope.d]));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$labels($scope, [...$scope.d, "dd"]);
	});
	_on($scope.b, "click", function() {
		$labels($scope, $scope.d.map((label) => label + label));
	});
});

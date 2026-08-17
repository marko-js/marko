// template.marko
const $count = /*@__PURE__*/ _let(9, ($scope) => _text($scope.b, $scope.j));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.j + 1);
}));
const $input_attrs__script = _script("a1", ($scope) => _attrs_script($scope, "a"));
const $input_box__script = _script("a0", ($scope) => _attrs_script($scope, "c"));

// template.marko
const $if_content__input_img__script = _script("a1", ($scope) => _attrs_script($scope, "a"));
const $count = /*@__PURE__*/ _let(11, ($scope) => _text($scope.e, $scope.l));
const $setup__script = _script("a2", ($scope) => _on($scope.d, "click", function() {
	$count($scope, +$scope.l + 1);
}));
const $input_attrs__script = _script("a3", ($scope) => _attrs_script($scope, "a"));

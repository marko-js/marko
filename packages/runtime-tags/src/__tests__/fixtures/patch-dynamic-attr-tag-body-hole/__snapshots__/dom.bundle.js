// card.marko
const $input_meta_n = ($scope, input_meta_n) => _text($scope.a, input_meta_n);

// template.marko
const $count = /*@__PURE__*/ _fill_let("c5", 5, ($scope) => $input_meta_n($scope.a, $scope.f));
const $setup__script = _script("c4", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));

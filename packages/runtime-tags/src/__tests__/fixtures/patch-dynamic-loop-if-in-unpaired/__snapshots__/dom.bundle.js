// card.marko
const $input_meta = ($scope, input_meta) => _text($scope.a, input_meta ? input_meta?.n : "-");

// template.marko
const $count = /*@__PURE__*/ _let(7, ($scope) => $input_meta($scope.a, attrTag({ n: $scope.h })));
const $setup__script = _script("c3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.h + 1);
}));

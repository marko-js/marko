// tags/relay/tags/leaf/index.marko
const $input_note = ($scope, input_note) => _text($scope.b, input_note);

// tags/relay/index.marko
const $input_qty = ($scope, input_qty) => $input_note($scope.a, input_qty);

// template.marko
const $count = /*@__PURE__*/ _let(5, ($scope) => $input_qty($scope.a, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));

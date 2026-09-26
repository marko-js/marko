// tags/relay/tags/leaf/index.marko
const $input_text = ($scope, input_text) => _text($scope.a, input_text);
const $input_note = ($scope, input_note) => _text($scope.b, input_note);

// tags/relay/index.marko
const $input_label = ($scope, input_label) => $input_text($scope.a, input_label);
const $input_qty = ($scope, input_qty) => $input_note($scope.a, input_qty);

// template.marko
const $count = /*@__PURE__*/ _let(5, ($scope) => $input_qty($scope.a, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
const $input_title = _fill_const("a0", 4, ($scope) => $input_label($scope.a, $scope.e));

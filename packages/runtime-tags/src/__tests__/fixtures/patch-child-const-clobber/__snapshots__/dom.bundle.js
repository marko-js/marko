// tags/card/index.marko
const $input_note = ($scope, input_note) => _text($scope.c, input_note);

// template.marko
const $note = /*@__PURE__*/ _let(5, ($scope) => $input_note($scope.a, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$note($scope, "client");
}));

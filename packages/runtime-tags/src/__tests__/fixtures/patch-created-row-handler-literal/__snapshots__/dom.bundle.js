// tags/row.marko
const $input_onPick__script = _script("b0", ($scope) => _on($scope.b, "click", $scope.g));

// template.marko
const $selected = /*@__PURE__*/ _let(5, ($scope) => _text($scope.a, $scope.f));
const $onPick = ($scope) => function() {
	$selected($scope._, $scope._.f + $scope.d + 10);
};
_resumed.a0 = $onPick;

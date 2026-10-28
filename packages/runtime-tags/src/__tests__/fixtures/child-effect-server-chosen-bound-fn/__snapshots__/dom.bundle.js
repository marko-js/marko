// tags/child.marko
const $input_fn__OR__input_v__script = _script("b0", ($scope) => $scope.c($scope.d));

// template.marko
const $last = /*@__PURE__*/ _let(6, ($scope) => _text($scope.b, $scope.g));
const $fa = ($scope) => function(v) {
	$last($scope, "a" + v);
};
const $fb = ($scope) => function(v) {
	$last($scope, "b" + v);
};
_resumed.a0 = $fa;
_resumed.a1 = $fb;

// tags/ctl.marko
const $if_content__count = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.b, $scope._.f));
const $if_content__setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope._, 5);
}));
const $count = /*@__PURE__*/ _let_change(5, $if_content__count);

// template.marko
const $total = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $countChange = ($scope) => function(v) {
	$total($scope, v * 10);
};
_resumed.a0 = $countChange;

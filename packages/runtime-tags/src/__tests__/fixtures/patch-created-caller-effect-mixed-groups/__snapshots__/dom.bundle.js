// tags/probe.marko
const $input_label__OR__input_count__script = _script("b0", ($scope) => console.log("probe", $scope.c, $scope.d));
const $input_label__OR__input_count = /*@__PURE__*/ _or_resume("b1", 4, $input_label__OR__input_count__script);
const $input_count = /*@__PURE__*/ _const(3, $input_label__OR__input_count);

// template.marko
const $if_content__count = /*@__PURE__*/ _init_resume("a5", /*@__PURE__*/ _if_closure(2, 0, ($scope) => $input_count($scope.a, $scope._.h)));
const $count = /*@__PURE__*/ _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	$if_content__count($scope);
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.h + 1);
}));

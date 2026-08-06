// template.marko
const $for_content__boost = /*@__PURE__*/ _resume_init("a3", /*@__PURE__*/ _for_closure(0, ($scope) => _text($scope.b, $scope._.f)));
const $boost = /*@__PURE__*/ _let(5, $for_content__boost);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$boost($scope, $scope.f + 1);
}));

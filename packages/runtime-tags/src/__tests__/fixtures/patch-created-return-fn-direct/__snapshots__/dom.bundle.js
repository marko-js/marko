// tags/card.marko
const $_return = ($scope) => function() {
	return "f:" + $scope.c;
};
_bind_resume("b0 c", $_return);

// template.marko
const $if_content__shown = /*@__PURE__*/ _let(6, ($scope) => _text($scope.d, $scope.g));
const $if_content__setup__script = _script("a1", ($scope) => _on($scope.e, "click", function() {
	$if_content__shown($scope, $scope.f.fn());
}));
const $if_content__r = _var_resume("a0", /*@__PURE__*/ _const(5, ($scope) => _text($scope.c, $scope.f.fn())));

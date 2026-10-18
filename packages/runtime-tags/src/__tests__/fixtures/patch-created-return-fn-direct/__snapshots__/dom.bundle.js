// tags/card.marko
const $_return = ($scope) => function() {
	return "f:" + $scope.c;
};
_resumed.b0 = $_return;

// template.marko
const $if_content__shown = /*@__PURE__*/ _fill_let("a3", 6, ($scope) => _text($scope.d, $scope.g));
const $if_content__setup__script = _script("a2", ($scope) => _on($scope.e, "click", function() {
	$if_content__shown($scope, $scope.f.fn());
}));
const $if_content__r = _var_resume("a1", /*@__PURE__*/ _const(5, ($scope) => _text($scope.c, $scope.f.fn())));

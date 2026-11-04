// tags/gate.marko
const $if = /*@__PURE__*/ _if(0, "<b>shown</b>");
const $input_on__OR__flag = /*@__PURE__*/ _or_patch("b2", 6, ($scope) => {
	_text($scope.b, $scope.f && $scope.e ? "on" : "off");
	$if($scope, $scope.f && $scope.e ? 0 : 1);
});
const $input_on = /*@__PURE__*/ _const(4, $input_on__OR__flag);

// template.marko
const $on = _let(2, ($scope) => $input_on($scope.b, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.c);
}));

// template.marko
const $if_content__fmt = /*@__PURE__*/ _fill_join("a0", 7, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.h())));
const $if_content__setup = $if_content__fmt;
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__setup);
const $open = /*@__PURE__*/ _let(8, ($scope) => $if($scope, $scope.i ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.i);
}));
function $fmt($scope) {
	return () => $scope.e + ":" + $scope.f;
}
_resume("a0", $fmt);

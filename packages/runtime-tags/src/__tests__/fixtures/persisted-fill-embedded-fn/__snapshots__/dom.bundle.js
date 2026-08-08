// template.marko
const $if_content__bag = /*@__PURE__*/ _fill_join("a0", 6, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.g.get())));
const $if_content__setup = $if_content__bag;
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__setup);
const $open = /*@__PURE__*/ _let(7, ($scope) => $if($scope, $scope.h ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.h);
}));
function $mk($scope) {
	return () => $scope.e;
}
_resume("a0", $mk);

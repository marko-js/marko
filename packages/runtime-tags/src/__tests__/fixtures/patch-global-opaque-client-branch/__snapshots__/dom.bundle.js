// template.marko
function brandOf(g) {
	return g.brand + "!";
}
const $if_content__$global = /*@__PURE__*/ _if_closure_patch("a3", 1, 0, ($scope) => _text($scope.a, brandOf($scope.$)));
const $if = /*@__PURE__*/ _if(1, "<p> </p>", "D ", $if_content__$global);
const $open = _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $global2 = _fill_global("a0", $if_content__$global, "");
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.c);
}));

// template.marko
function brandOf(g) {
	return g.brand + "!";
}
const $if_content__$global = /*@__PURE__*/ _fill_global_join("", "a0", ($scope) => {
	_text($scope.a, brandOf($scope.$));
});
const $if_content__setup = ($scope) => $if_content__$global($scope);
const $if = /*@__PURE__*/ _if(1, "<p> </p>", "D ", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("a2", 2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.c);
}));

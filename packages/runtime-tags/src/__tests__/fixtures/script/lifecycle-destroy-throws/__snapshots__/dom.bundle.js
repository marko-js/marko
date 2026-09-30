// template.marko
const $if_content__setup = _script("a0", ($scope) => _lifecycle($scope, { onDestroy: function() {
	throw new Error("onDestroy failed");
} }));
const $if = /*@__PURE__*/ _if(0, 0, 0, $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$show($scope, false);
}));

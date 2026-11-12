// template.marko
const $global_x_key = /*@__PURE__*/ _global_key("x");
const $if_content__$global_x = /*@__PURE__*/ _global_if($global_x_key, 1, 0, "a0", ($scope) => _text($scope.a, $scope.$.x));
const $if_content__$global_x__script = _global_script("a1", ($scope) => document.body.dataset.x = $scope.$.x, /*@__PURE__*/ _global_closure($global_x_key));
const $if_content__setup = ($scope) => {
	$if_content__$global_x__script($scope);
	$if_content__$global_x($scope);
};
const $if = /*@__PURE__*/ _if(1, "<p> </p>", "D ", $if_content__setup);
const $show = _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));

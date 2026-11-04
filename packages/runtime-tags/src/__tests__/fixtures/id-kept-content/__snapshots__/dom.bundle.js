// tags/keeper.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.f));
const $if_content__setup = $if_content__content;
const $content = /*@__PURE__*/ _let(5, $if_content__content);
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__setup);
const $show = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$content($scope, $scope.f);
	$show($scope, !$scope.g);
}));

// template.marko
const $keeper_content__input_prefix__OR__uid = /*@__PURE__*/ _or(4, ($scope) => {
	_text($scope.b, $scope._.d + " " + $scope.d);
	_attr($scope.c, "title", $scope._.d + " " + $scope.d);
});
const $keeper_content__input_prefix = /*@__PURE__*/ _closure_get(4, $keeper_content__input_prefix__OR__uid, 0, "a0");
const $keeper_content__uid = /*@__PURE__*/ _const(3, ($scope) => {
	_attr($scope.a, "for", $scope.d);
	_attr($scope.c, "id", $scope.d);
	$keeper_content__input_prefix__OR__uid($scope);
});
const $keeper_content__setup = ($scope) => {
	$keeper_content__input_prefix($scope);
	$keeper_content__uid($scope, _id($scope));
};
const $keeper_content = _content("a1", "<label> </label><input>", " D l ", $keeper_content__setup);

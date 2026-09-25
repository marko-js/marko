// template.marko
const $Box_content__walks = " b", $Box_content__template = "<div></div>";
const $if_content__setup = ($scope) => {
	$Box_content__setup._($scope.a, $scope._);
};
const $Box_content__setup = /*@__PURE__*/ _child_setup(/* @__PURE__ */ _closure_get(8, ($scope) => _attr_class($scope.a, $scope._.f)));
const $Box_content = _content("a0", $Box_content__template, $Box_content__walks, $Box_content__setup);
const $if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Box_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Box_content__walks), $if_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(2);
const $show__OR__Box = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.d ? $scope.g : null));
const $show = /*@__PURE__*/ _let(3, ($scope) => {
	$if($scope, $scope.d ? 0 : 1);
	$show__OR__Box($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.d);
}));

// template.marko
const $Box_content__walks = " b";
const $Box_content__template = "<div></div>";
const $if_content__setup = ($scope) => {
	$scope.a._ = $scope._;
	$Box_content__setup($scope.a);
};
const $Box_content__setup = /* @__PURE__ */ _closure_get(5, ($scope) => _attr_class($scope.a, $scope._.e));
const $if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Box_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Box_content__walks), $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));

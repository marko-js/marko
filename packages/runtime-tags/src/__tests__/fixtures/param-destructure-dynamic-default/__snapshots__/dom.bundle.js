// template.marko
const $ChildB_content__$pattern = ($scope, $pattern2) => $ChildB_content__$bar($scope, $pattern2.bar);
const $ChildB_content__count__OR__$foo = /* @__PURE__ */ _or(10, ($scope) => $ChildB_content__$pattern($scope, void 0 !== $scope.g ? $scope.g : { bar: $scope._.h + 2 }));
const $ChildB_content__bar = ($scope, bar) => _text($scope.b, bar);
const $ChildB_content__count__OR__$bar = /* @__PURE__ */ _or(11, ($scope) => $ChildB_content__bar($scope, void 0 !== $scope.i ? $scope.i : $scope._.h + 1));
const $ChildB_content__count = /* @__PURE__ */ _closure_get(7, ($scope) => {
	$ChildB_content__count__OR__$foo($scope);
	$ChildB_content__count__OR__$bar($scope);
});
const $ChildB_content__$bar = /* @__PURE__ */ _const(8, $ChildB_content__count__OR__$bar);
const $ChildA_content__$pattern = ($scope, $pattern) => $ChildA_content__$bar($scope, $pattern.bar);
const $ChildA_content__count__OR__$foo = /* @__PURE__ */ _or(10, ($scope) => $ChildA_content__$pattern($scope, void 0 !== $scope.g ? $scope.g : { bar: $scope._.h + 2 }));
const $ChildA_content__bar = ($scope, bar) => _text($scope.b, bar);
const $ChildA_content__count__OR__$bar = /* @__PURE__ */ _or(11, ($scope) => $ChildA_content__bar($scope, void 0 !== $scope.i ? $scope.i : $scope._.h + 1));
const $ChildA_content__count = /* @__PURE__ */ _closure_get(7, ($scope) => {
	$ChildA_content__count__OR__$foo($scope);
	$ChildA_content__count__OR__$bar($scope);
});
const $ChildA_content__$bar = /* @__PURE__ */ _const(8, $ChildA_content__count__OR__$bar);
const $count__closure = /* @__PURE__ */ _closure($ChildA_content__count, $ChildB_content__count);
const $count__script = _script("a2", ($scope) => _on($scope.g, "click", function() {
	$count($scope, $scope.h + 1);
}));
const $count = /* @__PURE__ */ _let(7, ($scope) => {
	$count__closure($scope);
	$count__script($scope);
});

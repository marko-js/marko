// total: 3583 (min) 1719 (brotli)
// template.marko: 222 (min) 118 (brotli)
const $await_content3__count = /* @__PURE__ */ _closure_get(4, ($scope) => _text($scope.b, $scope._.e));
const $await_content2__count = /* @__PURE__ */ _closure_get(4, ($scope) => _text($scope.b, $scope._.e));
const $await_content__count = /* @__PURE__ */ _closure_get(4, ($scope) => _text($scope.b, $scope._.e));
const $count__closure = /* @__PURE__ */ _closure($await_content__count, $await_content2__count, $await_content3__count);
const $count__script = _script("a0", ($scope) => _on($scope.d, "click", function() {
	$count($scope, $scope.e + 1);
}));
const $count = /* @__PURE__ */ _let(4, ($scope) => {
	$count__closure($scope);
	$count__script($scope);
});

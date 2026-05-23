// total: 6875 (min) 3110 (brotli)
// template.marko: 194 (min) 139 (brotli)
_enable_catch();
const $placeholder_content = _content_resume("a2", "loading...", "b");
const $await_content__value__script = _script("a1", ($scope) => !$scope._._.b && $value($scope._._, $scope._._.b + 1) - 1);
const $await_content__value = /* @__PURE__ */ _closure_get(1, ($scope) => {
	_text($scope.a, $scope._._.b);
	$await_content__value__script($scope);
}, ($scope) => $scope._._, "a0");
const $value = /* @__PURE__ */ _let(1, /* @__PURE__ */ _closure($await_content__value));

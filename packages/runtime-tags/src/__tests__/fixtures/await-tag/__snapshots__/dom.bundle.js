// template.marko
const $await_content3__count = /* @__PURE__ */ _closure_get(4, ($scope) => _text($scope.b, $scope._.e));
const $await_content2__count = /* @__PURE__ */ _closure_get(4, ($scope) => _text($scope.b, $scope._.e));
const $await_content__count = /* @__PURE__ */ _closure_get(4, ($scope) => _text($scope.b, $scope._.e));
const $count = /* @__PURE__ */ _let(4, /* @__PURE__ */ _closure($await_content__count, $await_content2__count, $await_content3__count));
const $setup__script = _script("a0", ($scope) => _on($scope.d, "click", function() {
	$count($scope, $scope.e + 1);
}));

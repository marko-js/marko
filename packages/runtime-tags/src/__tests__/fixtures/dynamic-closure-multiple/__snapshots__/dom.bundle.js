// template.marko
_enable_catch();
const $if_content__a = /* @__PURE__ */ _closure_get(2, ($scope) => _text($scope.a, $scope._._.c), ($scope) => $scope._._);
const $if_content__b = /* @__PURE__ */ _closure_get(3, ($scope) => _text($scope.b, $scope._._.d), ($scope) => $scope._._);
const $a = /* @__PURE__ */ _let(2, /* @__PURE__ */ _closure($if_content__a));
const $b = /* @__PURE__ */ _let(3, /* @__PURE__ */ _closure($if_content__b));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$a($scope, $scope.c + 1);
	$b($scope, $scope.d + 1);
}));

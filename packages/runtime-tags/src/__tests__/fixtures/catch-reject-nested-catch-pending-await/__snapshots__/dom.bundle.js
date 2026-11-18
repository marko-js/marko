// template.marko
const never = new Promise(() => {});
const $catch_content2 = _content("a0", "inner caught");
const $catch_content__err = ($scope, err) => _text($scope.a, err?.message);
const $catch_content = _content("a1", "caught: <!>", "b%", 0, $catch_content__err);
const $placeholder_content = _content("a4", "loading outer...");
const $await_content__changes = /*@__PURE__*/ _closure_get(2, ($scope) => _text($scope.c, $scope._._.b), ($scope) => $scope._._, "a3");
const $await_content__setup__script = _script("a2", ($scope) => _on($scope.b, "change", function() {
	$changes($scope._._, +$scope._._.b + 1);
}));
const $changes = /*@__PURE__*/ _let(1, /* @__PURE__ */ _closure($await_content__changes));

// template.marko
const $placeholder_content2 = /*@__PURE__*/ _content("a2", "loading inner...");
pendingEnabled && (_resumed.a2 = $placeholder_content2);
const $placeholder_content = /*@__PURE__*/ _content("a4", "loading outer...");
pendingEnabled && (_resumed.a4 = $placeholder_content);
const $await_content2__changes = /*@__PURE__*/ _closure_get(2, ($scope) => _text($scope.b, $scope._._._._.b), ($scope) => $scope._._._._, "a1", 1);
const $await_content2__setup__script = _script("a0", ($scope) => _on($scope.a, "change", function() {
	$changes($scope._._._._, +$scope._._._._.b + 1);
}));
const $changes = /*@__PURE__*/ _let(1, /* @__PURE__ */ _closure($await_content2__changes));

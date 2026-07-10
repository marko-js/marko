// template.marko
_enable_catch();
const $placeholder_content2 = _content_resume("a2", "loading inner...", "b");
const $placeholder_content = _content_resume("a4", "loading outer...", "b");
const $await_content2__changes = /*@__PURE__*/ _closure_get(2, ($scope) => _text($scope.b, $scope._._._._.b), ($scope) => $scope._._._._, "a0");
const $await_content2__setup__script = _script("a1", ($scope) => _on($scope.a, "change", function() {
	$changes($scope._._._._, $scope._._._._.b + 1);
}));
const $changes = /*@__PURE__*/ _let(1, /* @__PURE__ */ _closure($await_content2__changes));

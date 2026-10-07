// template.marko
const $placeholder_content = _content("a1", "loading");
const $try_content__value = /*@__PURE__*/ _closure_get(3, ($scope) => _text($scope.a, $scope._.c), 0, "a0");
const $value = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($try_content__value));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$value($scope, +$scope.c + 1);
}));

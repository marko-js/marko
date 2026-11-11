// template.marko
const $await_content__$params = ($scope, $params3) => _text($scope.a, $params3[0]);
const $placeholder_content__$label = ($scope, $label) => _text($scope.a, void 0 !== $label ? $label : "loading");
const $placeholder_content__$params = ($scope, $params2) => $placeholder_content__$label($scope, $params2[0]);
const $placeholder_content = _content("a1", " ", " ", 0, $placeholder_content__$params);
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__value = /*@__PURE__*/ _closure_get(3, ($scope) => $try_content__await_promise($scope, resolveAfter($scope._.c)), 0, "a0");
const $value = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($try_content__value));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$value($scope, "b");
}));

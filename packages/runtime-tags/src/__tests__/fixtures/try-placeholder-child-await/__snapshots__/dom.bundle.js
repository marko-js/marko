// tags/child.marko
const $await_content__value$1 = ($scope, value) => _text($scope.a, value);
const $await_content__$params$1 = ($scope, $params2) => $await_content__value$1($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params$1);
const $input_value$1 = ($scope, input_value) => $await_promise($scope, resolveAfter(input_value));

// tags/boundary.marko
const $await_content__value = ($scope, value) => _text($scope.a, value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content$1 = /*@__PURE__*/ _content("b0", "loading inner");
pendingEnabled && (_resumed.b0 = $placeholder_content$1);
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__input_value = /*@__PURE__*/ _closure_get(4, ($scope) => $try_content__await_promise($scope, resolveAfter($scope._.d)), 0, "b2", 3);
const $input_value__closure = /*@__PURE__*/ _closure($try_content__input_value);
const $input_value = /*@__PURE__*/ _const(3, $input_value__closure);

// template.marko
const $placeholder_content3 = /*@__PURE__*/ _content("a5", "loading outer");
pendingEnabled && (_resumed.a5 = $placeholder_content3);
const $placeholder_content2 = /*@__PURE__*/ _content("a3", "loading static");
pendingEnabled && (_resumed.a3 = $placeholder_content2);
const $placeholder_content = /*@__PURE__*/ _content("a0", "loading changing");
pendingEnabled && (_resumed.a0 = $placeholder_content);
const $try_content2__count = /*@__PURE__*/ _closure_get(5, ($scope) => $input_value($scope.a, $scope._.e), 0, "a7", 4);
const $try_content__count = /*@__PURE__*/ _closure_get(5, ($scope) => $input_value$1($scope.a, $scope._.e), 0, "a2", 4);
const $count = /*@__PURE__*/ _let(4, /* @__PURE__ */ _closure($try_content__count, $try_content2__count));
const $setup__script = _script("a8", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.e + 1);
}));

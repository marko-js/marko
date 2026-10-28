// tags/show-await.marko
const $await_content__x = ($scope, x) => _text($scope.b, x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;

// template.marko
const $placeholder_content = _content("a2", "<em>loading</em>");
const $try_content__p = /*@__PURE__*/ _closure_get(8, ($scope) => $input_promise($scope.a, $scope._.g), 0, "a1");
const $p = /*@__PURE__*/ _let(6, /* @__PURE__ */ _closure($try_content__p));
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));

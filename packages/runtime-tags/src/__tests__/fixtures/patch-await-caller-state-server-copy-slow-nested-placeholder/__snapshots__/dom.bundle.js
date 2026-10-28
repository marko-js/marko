// tags/show-await.marko
const $await_content__x = ($scope, x) => _text($scope.b, x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;

// template.marko
const $placeholder_content2 = _content$1("a3", "<em>inner</em>");
const $placeholder_content = _content$1("a6", "<em>outer</em>");
const $try_content2__p = /*@__PURE__*/ _init_resume("a20", /*@__PURE__*/ _closure_get(12, ($scope) => $input_promise($scope.a, $scope._._._.i), ($scope) => $scope._._._, "a2"));
const $p = /*@__PURE__*/ _let(8, /* @__PURE__ */ _closure($try_content2__p));
const $setup__script = _script("a15", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));

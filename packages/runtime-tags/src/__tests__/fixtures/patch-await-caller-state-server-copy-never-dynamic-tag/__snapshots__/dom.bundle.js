// tags/show-await.marko
const $xbi_content__x = /*@__PURE__*/ _init_resume("b1", /*@__PURE__*/ _closure_get(3, ($scope) => _text($scope.a, $scope._.c), 0, "b2"));
const $await_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0, /* @__PURE__ */ _content$1("b0", " ", " ", $xbi_content__x));
const $await_content__x__closure = /*@__PURE__*/ _closure($xbi_content__x);
const $await_content__x = /*@__PURE__*/ _const(2, ($scope) => {
	$await_content__dynamicTag($scope, $scope.c ? "b" : "i", ($_) => ({ class: "k" }));
	$await_content__x__closure($scope);
});
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;

// template.marko
const $if_content__p = /*@__PURE__*/ _init_resume("a3", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_promise($scope.a, $scope._.g)));
const $p = _let(6, $if_content__p);
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));

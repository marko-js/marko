// tags/show-await.marko
const $await_content2__n = /*@__PURE__*/ _init_resume("b0", /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._.c), 0, "b1"));
const $await_content2__setup = $await_content2__n;
const $await_content2__y = ($scope, y) => _text($scope.b, y);
const $await_content2__$params = ($scope, $params4) => $await_content2__y($scope, $params4[0]);
const $await_content2 = /*@__PURE__*/ _await_content(0, "<b><!>:<!></b>", "D%c%", $await_content2__setup);
const $for_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content2__$params);
const $for_content__setup = ($scope) => {
	$await_content2($scope);
	$for_content__await_promise($scope, Promise.resolve($scope.M));
};
const $for_content__$params = ($scope, $params3) => $for_content__n($scope, $params3[0]);
const $for_content__n = /*@__PURE__*/ _const(2, /* @__PURE__ */ _closure($await_content2__n));
const $await_content__for = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $await_content__x = ($scope, x) => $await_content__for($scope, [[x]]);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;

// template.marko
const $if_content__p = /*@__PURE__*/ _init_resume("a3", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_promise($scope.a, $scope._.g)));
const $p = /*@__PURE__*/ _let(6, $if_content__p);
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));

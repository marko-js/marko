// tags/wrapper.marko
const $placeholder_content$1 = _content("c2", "wrapper loading");
const $if_content__rest__script = _script("c0", ($scope) => _attrs_script($scope, "a"));
const $if_content__rest = /*@__PURE__*/ _closure_get(6, ($scope) => {
	_attrs_content($scope, "a", $scope._._.e);
	$if_content__rest__script($scope);
}, ($scope) => $scope._._, "c1", 4);
const $try_content__if$1 = /*@__PURE__*/ _if(0, "<section></section>", " ", $if_content__rest);
const $try_content__input_show = /*@__PURE__*/ _closure_get(5, ($scope) => $try_content__if$1($scope, $scope._.d ? 0 : 1), 0, "c4", 3);
const $show__closure$1 = /*@__PURE__*/ _closure($try_content__input_show);
const $show$1 = /*@__PURE__*/ _const(3, $show__closure$1);

// template.marko
const $await_content2__v = ($scope, v) => _text($scope.a, v);
const $await_content2__$params = ($scope, $params3) => $await_content2__v($scope, $params3[0]);
const $await_content2 = /*@__PURE__*/ _await_content(0, " ", " ");
const $wrapper_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content2__$params);
const $wrapper_content__setup = ($scope) => {
	$await_content2($scope);
	$wrapper_content__await_promise($scope, resolveAfter("wrapped"));
};
const $wrapper_content = _content("a4", "<!><!><!>", "b%", $wrapper_content__setup);
const $placeholder_content = _content("a1", "define loading");
const $await_content__v = ($scope, v) => _text($scope.a, v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $if_content__setup = /* @__PURE__ */ _closure_get(7, ($scope) => _attr_content($scope, "a", $scope._._.f), ($scope) => $scope._._);
const $await_content = /*@__PURE__*/ _await_content(0, " ", " ");
const $Content_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $Content_content__setup = ($scope) => {
	$await_content($scope);
	$Content_content__await_promise($scope, resolveAfter("defined"));
};
const $Content_content = _content("a0", "<!><!><!>", "b%", $Content_content__setup);
const $try_content__if = /*@__PURE__*/ _if(0, "<div></div>", " ", $if_content__setup);
const $try_content__show = /*@__PURE__*/ _closure_get(6, ($scope) => $try_content__if($scope, $scope._.e ? 0 : 1), 0, "a3", 4);
const $show__closure = /*@__PURE__*/ _closure($try_content__show);
const $show = /*@__PURE__*/ _let(4, ($scope) => {
	$show$1($scope.c, $scope.e);
	$show__closure($scope);
});
const $setup__script = _script("a8", ($scope) => _on($scope.a, "click", function() {
	$show($scope, true);
}));

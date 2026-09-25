// tags/wrapper.marko
const $placeholder_content$1 = /*@__PURE__*/ _content("d2", "wrapper loading");
pendingEnabled && (_resumed.d2 = $placeholder_content$1);
const $if_content__rest__script = _script("d0", ($scope) => _attrs_script($scope, "a"));
const $if_content__rest = /*@__PURE__*/ _closure_get(6, ($scope) => {
	_attrs_content($scope, "a", $scope._._.e);
	$if_content__rest__script($scope);
}, ($scope) => $scope._._, "d1", 4);
const $try_content__if$1 = /*@__PURE__*/ _if(0, "<section></section>", " ", $if_content__rest);
const $try_content__input_show = /*@__PURE__*/ _closure_get(5, ($scope) => $try_content__if$1($scope, $scope._.d ? 0 : 1), 0, "d4", 3);
const $show__closure$1 = /*@__PURE__*/ _closure($try_content__input_show);
const $show$1 = /*@__PURE__*/ _const(3, $show__closure$1);

// tags/layout.marko
const $template = "<div class=layout><!></div>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// tags/base-button.marko
const $input__script = _script("b0", ($scope) => _attrs_script($scope, "a"));

// template.marko
const $placeholder_content4 = /*@__PURE__*/ _content("a12", "button loading");
pendingEnabled && (_resumed.a12 = $placeholder_content4);
const $placeholder_content3 = /*@__PURE__*/ _content("a8", "layout attr loading");
pendingEnabled && (_resumed.a8 = $placeholder_content3);
const $placeholder_content2 = /*@__PURE__*/ _content("a6", "layout loading");
pendingEnabled && (_resumed.a6 = $placeholder_content2);
const $await_content2__v = ($scope, v) => _text($scope.a, v);
const $await_content2__$params = ($scope, $params3) => $await_content2__v($scope, $params3[0]);
const $await_content2 = /*@__PURE__*/ _await_content(0, " ", " ");
const $wrapper_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content2__$params);
const $wrapper_content__setup = ($scope) => {
	$await_content2($scope);
	$wrapper_content__await_promise($scope, resolveAfter("wrapped"));
};
const $wrapper_content = _content("a4", "<!><!><!>", "b%", $wrapper_content__setup);
const $placeholder_content = /*@__PURE__*/ _content("a1", "define loading");
pendingEnabled && (_resumed.a1 = $placeholder_content);
const $await_content__v = ($scope, v) => _text($scope.a, v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $if_content2__setup = /* @__PURE__ */ _closure_get(9, ($scope) => $input_content($scope.a, $scope._._.h), ($scope) => $scope._._);
const $if_content__setup = /* @__PURE__ */ _closure_get(9, ($scope) => _attr_content($scope, "a", $scope._._.h), ($scope) => $scope._._);
const $await_content = /*@__PURE__*/ _await_content(0, " ", " ");
const $Content_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $Content_content__setup = ($scope) => {
	$await_content($scope);
	$Content_content__await_promise($scope, resolveAfter("defined"));
};
const $Content_content = _content("a0", "<!><!><!>", "b%", $Content_content__setup);
const $try_content2__if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content2__setup);
const $try_content2__show = /*@__PURE__*/ _closure_get(8, ($scope) => $try_content2__if($scope, $scope._.g ? 0 : 1), 0, "a10", 6);
const $try_content__if = /*@__PURE__*/ _if(0, "<div></div>", " ", $if_content__setup);
const $try_content__show = /*@__PURE__*/ _closure_get(8, ($scope) => $try_content__if($scope, $scope._.g ? 0 : 1), 0, "a3", 6);
const $show__closure = /*@__PURE__*/ _closure($try_content__show, $try_content2__show);
const $show = /*@__PURE__*/ _let(6, ($scope) => {
	$show$1($scope.c, $scope.g);
	$show__closure($scope);
});
const $setup__script = _script("a14", ($scope) => _on($scope.a, "click", function() {
	$show($scope, true);
}));

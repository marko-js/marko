// tags/c2.marko
const $template$1 = "<!><!><!>";
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $for_content__$params = ($scope, $params2) => $for_content__dynamicTag($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", 0, $for_content__$params);
const $input_tab = ($scope, input_tab) => $for($scope, [input_tab]);

// tags/c1.marko
const $template = "<!><!><!>";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content(0);

// template.marko
const $tab_content = /*@__PURE__*/ _content("a0");
const $c1_content__v = /*@__PURE__*/ _closure_get(3, ($scope) => $input_tab($scope.a, attrTag({
	x: $scope._._.c,
	content: $tab_content($scope)
})), ($scope) => $scope._._, "a1");
const $c1_content = /*@__PURE__*/ _content("a2", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $c1_content__v);
const $if_content__setup = ($scope) => $input_content_direct($scope.a, $c1_content($scope));
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $v__closure = /*@__PURE__*/ _closure($c1_content__v);
const $v = /*@__PURE__*/ _let(2, ($scope) => {
	$if($scope, $scope.c ? 0 : 1);
	$v__closure($scope);
});
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$v($scope, false);
}));

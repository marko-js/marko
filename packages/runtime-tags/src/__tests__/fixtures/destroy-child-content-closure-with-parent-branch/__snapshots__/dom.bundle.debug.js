// tags/c2.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = ($_) => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__$params = ($scope, $params2) => $for_content__dynamicTag($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $input_tab = ($scope, input_tab) => $for($scope, [input_tab]);
const $input$1 = ($scope, input) => $input_tab($scope, input.tab);
var c2_default = /*@__PURE__*/ _template("__tests__/tags/c2.marko", $template$2, "b%c", 0, $input$1);

// tags/c1.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var c1_default = /*@__PURE__*/ _template("__tests__/tags/c1.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = "<!><!><button></button>";
const $walks = "b%b b";
const $tab_content = /*@__PURE__*/ _content("__tests__/template.marko_3*content");
const $c1_content__v = /*@__PURE__*/ _closure_get("v/3", ($scope) => $input_tab($scope["#childScope/0"], attrTag({
	x: $scope._._.v,
	content: $tab_content($scope)
})), ($scope) => $scope._._, "__tests__/template.marko_2_v#0:2/subscribe");
const $c1_content__setup = $c1_content__v;
const $c1_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $c1_content__setup);
const $if_content__setup = ($scope) => $input_content_direct($scope["#childScope/0"], $c1_content($scope));
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $v__closure = /*@__PURE__*/ _closure($c1_content__v);
const $v = /*@__PURE__*/ _let("v/2", ($scope) => {
	$if($scope, $scope.v ? 0 : 1);
	$v__closure($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$v($scope, false);
}));
function $setup($scope) {
	$v($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

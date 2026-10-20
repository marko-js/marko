// tags/wrap.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _shell_init("__tests__/tags/wrap.marko_1_input_content#0:4/init", /*@__PURE__*/ _fill_join("__tests__/tags/wrap.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content))));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/0", "<ul><!></ul>", "D%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$2 = ($scope, input) => {
	$input_show($scope, input.show);
	$input_content($scope, input.content);
};
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/wrap.marko_fill0", "input_content", $if_content__input_content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$2, "b%c", 0, $input$2);

// tags/tree.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<li><!>${_w0}</li>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `D%b/${_w0}&l`)("b%c");
const $wrap_content__input_node_kid = /*@__PURE__*/ _shell_init("__tests__/tags/tree.marko_1_input_node_kid#0:6/init", /*@__PURE__*/ _closure_get("input_node_kid/7", ($scope) => $input_node$1($scope["#childScope/0"], $scope._.input_node_kid), 0, "__tests__/tags/tree.marko_1_input_node_kid#0:6/subscribe"));
const $wrap_content__setup = ($scope) => {
	$wrap_content__input_node_kid($scope);
	$setup$1($scope["#childScope/0"]);
};
const $wrap_content = _content("__tests__/tags/tree.marko_1*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $wrap_content__setup);
const $input_node_name = ($scope, input_node_name) => _text($scope["#text/0"], input_node_name);
const $input_node$1 = ($scope, input_node) => {
	$input_node_name($scope, input_node?.name);
	$input_node_kid($scope, input_node?.kid);
};
function $setup$1($scope) {
	$input_content($scope["#childScope/1"], $wrap_content($scope));
}
const $input_node_kid__closure = /*@__PURE__*/ _closure($wrap_content__input_node_kid);
const $input_node_kid = /*@__PURE__*/ _const("input_node_kid", ($scope) => {
	$input_node_kid__closure($scope);
	$input_show($scope["#childScope/1"], !!$scope.input_node_kid);
});
const $input$1 = ($scope, input) => $input_node$1($scope, input.node);
var tree_default = /*@__PURE__*/ _template("__tests__/tags/tree.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<ul><!></ul>";
const $walks = "D%l";
const $Card_content__node_name = ($scope, node_name) => _text($scope["#text/0"], node_name);
const $Card_content__$params = ($scope, $params2) => $Card_content__node_name($scope, $params2[0].node?.name);
const $Card_content = _content("__tests__/template.marko_1*content", "<b> </b>", "D ", 0, $Card_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_deep__OR__input_node__OR__Card = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.input_deep ? tree_default : $scope.Card, ($_) => ({ node: $scope.input_node })), 2);
const $Card = /*@__PURE__*/ _const("Card", $input_deep__OR__input_node__OR__Card);
function $setup($scope) {
	$Card($scope, { content: $Card_content($scope) });
}
const $input_deep = /*@__PURE__*/ _const("input_deep", $input_deep__OR__input_node__OR__Card);
const $input_node = /*@__PURE__*/ _const("input_node", $input_deep__OR__input_node__OR__Card);
const $input = ($scope, input) => {
	$input_deep($scope, input.deep);
	$input_node($scope, input.node);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", $setup, $input);

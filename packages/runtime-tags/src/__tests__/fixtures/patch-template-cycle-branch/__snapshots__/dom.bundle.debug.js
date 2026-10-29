// tags/tree-b.marko
const $template$2 = "<div><!><!></div>";
const $walks$2 = "D%b%l";
const $setup$2 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_node_kid$1 = /*@__PURE__*/ _init_resume("__tests__/tags/tree-b.marko_1_input_node_kid#0:6/init", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, tree_a_default, ($_) => ({ node: $scope._.input_node_kid }))));
const $if_content__setup$2 = $if_content__input_node_kid$1;
const $input_node_name$1 = ($scope, input_node_name) => _text($scope["#text/0"], input_node_name);
const $if$2 = /*@__PURE__*/ _if("#text/1", "<ul><!></ul>", "D%", $if_content__setup$2);
const $input_node_kid$1 = /*@__PURE__*/ _const("input_node_kid", ($scope) => {
	$if_content__input_node_kid$1($scope);
	$if$2($scope, $scope.input_node_kid ? 0 : 1);
});
const $input$2 = ($scope, input) => $input_node$2($scope, input.node);
const $input_node$2 = ($scope, input_node) => {
	$input_node_kid$1($scope, input_node?.kid);
	$input_node_name$1($scope, input_node?.name);
};
var tree_b_default = /*@__PURE__*/ _template("__tests__/tags/tree-b.marko", $template$2, $walks$2, 0, $input$2);

// tags/tree-a.marko
const $template$1 = "<li><!><!></li>";
const $walks$1 = "D%b%l";
const $setup$1 = ($_) => {};
const $if_content__input_node_kid = /*@__PURE__*/ _init_resume("__tests__/tags/tree-a.marko_1_input_node_kid#0:6/init", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $input_node$2($scope["#childScope/0"], $scope._.input_node_kid)));
const $if_content__setup$1 = $if_content__input_node_kid;
const $input_node_name = ($scope, input_node_name) => _text($scope["#text/0"], input_node_name);
const $if$1 = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<ul>${_w0}</ul>`)($template$2), /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$2), $if_content__setup$1);
const $input_node_kid = /*@__PURE__*/ _const("input_node_kid", ($scope) => {
	$if$1($scope, $scope.input_node_kid ? 0 : 1);
	$if_content__input_node_kid($scope);
});
const $input$1 = ($scope, input) => $input_node$1($scope, input.node);
const $input_node$1 = ($scope, input_node) => {
	$input_node_name($scope, input_node?.name);
	$input_node_kid($scope, input_node?.kid);
};
var tree_a_default = /*@__PURE__*/ _template("__tests__/tags/tree-a.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $setup = ($_) => {};
const $if_content__input_node = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_node#0:4/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_node", /*@__PURE__*/ _if_closure("#ul/0", 0, ($scope) => $input_node$1($scope["#childScope/0"], $scope._.input_node))));
const $if_content__setup = $if_content__input_node;
const $if = /*@__PURE__*/ _if("#ul/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_node($scope, input.node);
};
const $input_node = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_node", $if_content__input_node);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);

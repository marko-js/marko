// tags/tree.marko
const $template$1 = "<li><!><!></li>";
const $walks$1 = "D%b%l";
const $setup$1 = () => {};
const $for_content__child = ($scope, child) => $input_node($scope["#childScope/0"], child);
const $for_content__$params = ($scope, $params2) => $for_content__child($scope, $params2[0]);
const $if_content__for = /*@__PURE__*/ _for_of("#ul/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), 0, $for_content__$params);
const $if_content__input_node_children = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__for($scope, [$scope._.input_node_children]));
const $if_content__setup$1 = $if_content__input_node_children;
const $input_node_name = ($scope, input_node_name) => _text($scope["#text/0"], input_node_name);
const $input_node = ($scope, input_node) => {
	$input_node_children($scope, input_node?.children);
	$input_node_name($scope, input_node?.name);
};
const $if$1 = /*@__PURE__*/ _if("#text/1", "<ul></ul>", " ", $if_content__setup$1);
const $input_node_children = /*@__PURE__*/ _const("input_node_children", ($scope) => {
	$if_content__input_node_children($scope);
	$if$1($scope, $scope.input_node_children ? 0 : 1);
});
const $input$1 = ($scope, input) => $input_node($scope, input.node);
var tree_default = /*@__PURE__*/ _template("__tests__/tags/tree.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const $if_content__input_tree = /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $input_node($scope["#childScope/0"], $scope._.input_tree));
const $if_content__setup = $if_content__input_tree;
const $if = /*@__PURE__*/ _if("#main/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_tree($scope, input.tree);
	$input_show($scope, input.show);
};
const $input_tree = /*@__PURE__*/ _const("input_tree", $if_content__input_tree);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);

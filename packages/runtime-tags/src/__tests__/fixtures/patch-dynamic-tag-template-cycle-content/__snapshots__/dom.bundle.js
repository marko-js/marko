// tags/wrap.marko
const $template$2 = "<!><!><!>";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _shell_init("d1", /*@__PURE__*/ _fill_join("d2", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e))));
const $if = /*@__PURE__*/ _if(0, "<ul><!></ul>", "D%", $if_content__input_content);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_content = /*@__PURE__*/ _fill_const("d2", 4, $if_content__input_content);

// tags/tree-b.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<div><!>${_w0}</div>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `D%b/${_w0}&l`)("b%c");
const $wrap_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $wrap_content__input_node_kid$1 = /*@__PURE__*/ _shell_init("c1", /*@__PURE__*/ _closure_get(7, ($scope) => $wrap_content__dynamicTag($scope, tree_a_default, ($_) => ({ node: $scope._.g })), 0, "c2"));
const $wrap_content$1 = _content$1("c0", "<!><!><!>", "b%", $wrap_content__input_node_kid$1);
const $input_node_name$1 = ($scope, input_node_name) => _text($scope.a, input_node_name);
function $setup$1($scope) {
	$input_content($scope.b, $wrap_content$1($scope));
}
const $input_node_kid__closure$1 = /*@__PURE__*/ _closure($wrap_content__input_node_kid$1);
const $input_node_kid$1 = /*@__PURE__*/ _const(6, ($scope) => {
	$input_node_kid__closure$1($scope);
	$input_show($scope.b, !!$scope.g);
});
const $input_node$1 = ($scope, input_node) => {
	$input_node_kid$1($scope, input_node?.kid);
	$input_node_name$1($scope, input_node?.name);
};

// tags/tree-a.marko
const $template = /*@__PURE__*/ ((_w0) => `<li><!>${_w0}</li>`)($template$2);
const $walks = /*@__PURE__*/ ((_w0) => `D%b/${_w0}&l`)("b%c");
const $wrap_content__input_node_kid = /*@__PURE__*/ _shell_init("b1", /*@__PURE__*/ _closure_get(7, ($scope) => $input_node$1($scope.a, $scope._.g), 0, "b2"));
const $wrap_content__setup = ($scope) => {
	$wrap_content__input_node_kid($scope);
	$setup$1($scope.a);
};
const $wrap_content = _content$1("b0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $wrap_content__setup);
const $input_node_name = ($scope, input_node_name) => _text($scope.a, input_node_name);
function $setup($scope) {
	$input_content($scope.b, $wrap_content($scope));
}
const $input_node_kid__closure = /*@__PURE__*/ _closure($wrap_content__input_node_kid);
const $input_node_kid = /*@__PURE__*/ _const(6, ($scope) => {
	$input_node_kid__closure($scope);
	$input_show($scope.b, !!$scope.g);
});
const $input = ($scope, input) => $input_node($scope, input.node);
const $input_node = ($scope, input_node) => {
	$input_node_kid($scope, input_node?.kid);
	$input_node_name($scope, input_node?.name);
};
var tree_a_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);

// template.marko
const $Card_content__node_name = ($scope, node_name) => _text($scope.a, node_name);
const $Card_content__$params = ($scope, $params2) => $Card_content__node_name($scope, $params2[0].node?.name);
const $Card_content = _content$1("a0", "<b> </b>", "D ", 0, $Card_content__$params);

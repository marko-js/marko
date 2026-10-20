// tags/wrap.marko
const $template$1 = "<!><!><!>";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _shell_init("c1", /*@__PURE__*/ _fill_join("c2", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e))));
const $if = /*@__PURE__*/ _if(0, "<ul><!></ul>", "D%", $if_content__input_content);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_content = /*@__PURE__*/ _fill_const("c2", 4, $if_content__input_content);

// tags/tree.marko
const $template = /*@__PURE__*/ ((_w0) => `<li><!>${_w0}</li>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D%b/${_w0}&l`)("b%c");
const $wrap_content__input_node_kid = /*@__PURE__*/ _shell_init("b1", /*@__PURE__*/ _closure_get(7, ($scope) => $input_node($scope.a, $scope._.g), 0, "b2"));
const $wrap_content__setup = ($scope) => {
	$wrap_content__input_node_kid($scope);
	$setup($scope.a);
};
const $wrap_content = _content$1("b0", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $wrap_content__setup);
const $input_node_name = ($scope, input_node_name) => _text($scope.a, input_node_name);
const $input_node = ($scope, input_node) => {
	$input_node_name($scope, input_node?.name);
	$input_node_kid($scope, input_node?.kid);
};
function $setup($scope) {
	$input_content($scope.b, $wrap_content($scope));
}
const $input_node_kid__closure = /*@__PURE__*/ _closure($wrap_content__input_node_kid);
const $input_node_kid = /*@__PURE__*/ _const(6, ($scope) => {
	$input_node_kid__closure($scope);
	$input_show($scope.b, !!$scope.g);
});

// template.marko
const $Card_content__node_name = ($scope, node_name) => _text($scope.a, node_name);
const $Card_content__$params = ($scope, $params2) => $Card_content__node_name($scope, $params2[0].node?.name);
const $Card_content = _content$1("a0", "<b> </b>", "D ", 0, $Card_content__$params);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_depth($scope["#childScope/0"], 1);
}
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/wrap.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = ($_) => {};
const $if_content__dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure_patch("__tests__/tags/wrap.marko_1_input_content#0:4/setup", "#text/0", 0, ($scope) => $if_content__dynamicTag$1($scope, $scope._.input_content));
const $if_content__setup$1 = $if_content__input_content;
const $if$1 = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup$1);
const $input_show$2 = ($scope, input_show) => $if$1($scope, input_show ? 0 : 1);
const $input$2 = ($scope, input) => {
	$input_show$2($scope, input.show);
	$input_content($scope, input.content);
};
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$2, "b%c", 0, $input$2);

// tags/tree-b.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)("b%c");
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_show__OR__input_depth = /*@__PURE__*/ _or_patch("__tests__/tags/tree-b.marko_2_input_show#0:4_input_depth#0:5/setup", 1, ($scope) => $if_content__dynamicTag($scope, tree_a_default, ($_) => ({
	show: $scope._.input_show,
	depth: $scope._.input_depth - 1
})));
const $if_content__input_show = /*@__PURE__*/ _if_closure_patch("__tests__/tags/tree-b.marko_2_input_show#0:4/setup", "#text/1", 0, $if_content__input_show__OR__input_depth);
const $if_content__setup = ($scope) => {
	$if_content__input_show._($scope);
	$if_content__input_depth._($scope);
};
const $if_content__input_depth = /*@__PURE__*/ _if_closure_patch("__tests__/tags/tree-b.marko_2_input_depth#0:5/setup", "#text/1", 0, $if_content__input_show__OR__input_depth);
const $wrap_content__input_depth = /*@__PURE__*/ _closure_get_patch("__tests__/tags/tree-b.marko_1_input_depth#0:5/subscribe", "input_depth/7", ($scope) => _text($scope["#text/0"], $scope._.input_depth), 0, "__tests__/tags/tree-b.marko_0_input_depth#5/subscribers", 0);
const $wrap_content__setup = $wrap_content__input_depth;
const $wrap_content = _content("__tests__/tags/tree-b.marko_1*content", "<span> </span>", "D ", $wrap_content__setup);
function $setup$1($scope) {
	$input_content($scope["#childScope/0"], $wrap_content($scope));
}
const $input_show$1 = /*@__PURE__*/ _const("input_show", ($scope) => {
	$if_content__input_show($scope);
	$input_show$2($scope["#childScope/0"], $scope.input_show);
});
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $input_depth__closure = /*@__PURE__*/ _closure($wrap_content__input_depth);
const $input_depth$1 = /*@__PURE__*/ _const("input_depth", ($scope) => {
	$input_depth__closure($scope);
	$if_content__input_depth($scope);
	$if($scope, $scope.input_depth ? 0 : 1);
});
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_depth$1($scope, input.depth);
};
var tree_b_default = /*@__PURE__*/ _template("__tests__/tags/tree-b.marko", $template$1, $walks$1, $setup$1, $input$1);

// tags/tree-a.marko
const $template = /*@__PURE__*/ ((_w0) => `<button> </button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&b`)($walks$1);
const $count = /*@__PURE__*/ _fill_let("__tests__/tags/tree-a.marko_0_count#7/fill", "count/7", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/tags/tree-a.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	$setup__script($scope);
	$count($scope, 0);
}
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/2"], input_show);
const $input_depth = ($scope, input_depth) => $input_depth$1($scope["#childScope/2"], input_depth);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_depth($scope, input.depth);
};
var tree_a_default = /*@__PURE__*/ _template("__tests__/tags/tree-a.marko", $template, $walks, $setup, $input);

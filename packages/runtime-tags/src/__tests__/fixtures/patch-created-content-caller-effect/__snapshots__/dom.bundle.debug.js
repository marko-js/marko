// tags/wrap.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_body = /*@__PURE__*/ _init_resume("__tests__/tags/wrap.marko_1_input_body#0:4/init", /*@__PURE__*/ _fill_signal("input_body __tests__/tags/wrap.marko_fill0", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_body))));
const $if_content__setup = $if_content__input_body;
const $if = /*@__PURE__*/ _if("#text/0", "<div><!></div>", "D%", $if_content__setup);
const $input_show$2 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$2 = ($scope, input) => {
	$input_show$2($scope, input.show);
	$input_body($scope, input.body);
};
const $input_body = /*@__PURE__*/ _fill_const("__tests__/tags/wrap.marko_fill0", "input_body", $if_content__input_body);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$2, "b%c", 0, $input$2);

// tags/child.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $body_content__input_count__script = _script("__tests__/tags/child.marko_1_input_count#0:4", ($scope) => console.log("content count", $scope._.input_count));
const $body_content__input_count = /*@__PURE__*/ _init_resume("__tests__/tags/child.marko_1_input_count#0:4/init", /*@__PURE__*/ _closure_get("input_count/5", $body_content__input_count__script, 0, "__tests__/tags/child.marko_1_input_count#0:4/subscribe"));
const $body_content__setup = $body_content__input_count;
const $body_content = _content("__tests__/tags/child.marko_1*content", "<p>body</p>", 0, $body_content__setup);
function $setup$1($scope) {
	$input_body($scope["#childScope/0"], attrTag({ content: $body_content($scope) }));
}
const $input_show$1 = ($scope, input_show) => $input_show$2($scope["#childScope/0"], input_show);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_count$1($scope, input.count);
};
const $input_count__closure = /*@__PURE__*/ _closure($body_content__input_count);
const $input_count$1 = /*@__PURE__*/ _const("input_count", $input_count__closure);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button> </button>${_w0}${_w1}<!>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => ` D l/${_w0}&/${_w1}&b`)($walks$1, $walks$1);
const $count = /*@__PURE__*/ _let("count/8", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$input_count$1($scope["#childScope/2"], $scope.count);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	$setup$1($scope["#childScope/3"]);
	$count($scope, 0);
	$setup__script($scope);
}
const $input_show = ($scope, input_show) => {
	$input_show$1($scope["#childScope/2"], input_show);
	$input_show$1($scope["#childScope/3"], input_show);
};
const $input_count = ($scope, input_count) => $input_count$1($scope["#childScope/3"], input_count);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_count($scope, input.count);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

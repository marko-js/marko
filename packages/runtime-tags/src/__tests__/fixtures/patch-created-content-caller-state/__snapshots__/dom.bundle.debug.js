// tags/wrap.marko
const $template$2 = "<section><!></section>";
const $walks$2 = "D%l";
const $setup$2 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$2 = ($scope, input) => $input_content($scope, input.content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$2, "D%l", 0, $input$2);

// tags/panel.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $wrap_content__input_n = /*@__PURE__*/ _shell_init("__tests__/tags/panel.marko_2_input_n#0:4/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/panel.marko_fill0", "input_n", /*@__PURE__*/ _closure_get("input_n/5", ($scope) => _text($scope["#text/0"], $scope._._.input_n), ($scope) => $scope._._, "__tests__/tags/panel.marko_2_input_n#0:4/subscribe"), 0));
const $wrap_content__setup = $wrap_content__input_n;
const $wrap_content = /*@__PURE__*/ _content("__tests__/tags/panel.marko_2*content", "<em> </em>", "D ", $wrap_content__setup);
const $if_content__setup = ($scope) => $input_content_direct($scope["#childScope/0"], $wrap_content($scope));
const $if = /*@__PURE__*/ _if("#text/0", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_n($scope, input.n);
};
const $input_n__closure = /*@__PURE__*/ _closure($wrap_content__input_n);
const $input_n = /*@__PURE__*/ _fill_const("__tests__/tags/panel.marko_fill0", "input_n", $input_n__closure);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)("b%c");
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/5", ($scope) => $input_n($scope["#childScope/0"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

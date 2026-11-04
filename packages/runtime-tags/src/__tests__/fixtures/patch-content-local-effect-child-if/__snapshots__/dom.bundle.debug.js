// tags/wrap.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure_patch("__tests__/tags/wrap.marko_1_input_content#0:4/setup", "#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/0", "<div><!></div>", "D%", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_content($scope, input.content);
};
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $wrap_content__inner__script = _script_patch("__tests__/template.marko_1_inner#1 inner", ($scope) => _el_read($scope["#div/0"]).textContent = $scope.inner);
const $wrap_content__inner = /*@__PURE__*/ _const("inner", $wrap_content__inner__script);
const $wrap_content__input_prefix = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_prefix#0:4/subscribe", "input_prefix/5", ($scope) => $wrap_content__inner($scope, $scope._.input_prefix + "!"), 0, "__tests__/template.marko_0_input_prefix#4/subscribers", 0);
const $wrap_content__setup = $wrap_content__input_prefix;
const $wrap_content = _content_resume("__tests__/template.marko_1*content", "<div></div>", " ", $wrap_content__setup);
function $setup($scope) {
	$input_content($scope["#childScope/0"], $wrap_content($scope));
}
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_prefix($scope, input.prefix);
};
const $input_prefix__closure = /*@__PURE__*/ _closure($wrap_content__input_prefix);
const $input_prefix = /*@__PURE__*/ _const("input_prefix", $input_prefix__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

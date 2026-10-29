// tags/wrap.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _init_resume("__tests__/tags/wrap.marko_1_input_content#0:4/init", /*@__PURE__*/ _fill("__tests__/tags/wrap.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content))));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/0", "<div><!></div>", "D%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show($scope, input.show);
	$input_content$1($scope, input.content);
};
const $input_content$1 = /*@__PURE__*/ _fill_const("__tests__/tags/wrap.marko_fill0", "input_content", $if_content__input_content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$2, "b%c", 0, $input$1);

// layout.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<html><body><main>${_w0}<!></main></body></html>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `F/${_w0}&%n`)("b%c");
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $wrap_content = _content("__tests__/layout.marko_1*content", "<b>shown</b>");
function $setup$1($scope) {
	$input_content$1($scope["#childScope/0"], $wrap_content($scope));
}
const $input_open = ($scope, input_open) => $input_show($scope["#childScope/0"], input_open);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag;
const $input = ($scope, input) => {
	$input_content($scope, input.content);
	$input_open($scope, input.open);
};
var layout_default = /*@__PURE__*/ _template("__tests__/layout.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $Layout_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope._, !$scope._.open);
}));
const $Layout_content__setup = $Layout_content__setup__script;
const $Layout_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<button>toggle</button>", " ", $Layout_content__setup);
const $open = _let("open/1", ($scope) => $input_open($scope["#childScope/0"], $scope.open));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content_direct($scope["#childScope/0"], $Layout_content($scope));
	$open($scope, false);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

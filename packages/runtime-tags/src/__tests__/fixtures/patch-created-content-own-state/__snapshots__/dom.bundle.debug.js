// tags/wrap.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _init_resume("__tests__/tags/wrap.marko_1_input_content#0:4/init", /*@__PURE__*/ _fill_join("__tests__/tags/wrap.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content))));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/0", "<section><!></section>", "D%", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_content($scope, input.content);
};
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/wrap.marko_fill0", "input_content", $if_content__input_content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $wrap_content__input_id = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_id#0:4/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_id", /*@__PURE__*/ _closure_get("input_id/5", ($scope) => _text($scope["#text/2"], $scope._.input_id), 0, "__tests__/template.marko_1_input_id#0:4/subscribe"), 0));
const $wrap_content__c = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "c/3", ($scope) => _text($scope["#text/1"], $scope.c));
const $wrap_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$wrap_content__c($scope, +$scope.c + 1);
}));
const $wrap_content__setup = ($scope) => {
	$wrap_content__input_id($scope);
	$wrap_content__setup__script($scope);
	$wrap_content__c($scope, 0);
};
const $wrap_content = _content("__tests__/template.marko_1*content", "<button><!> <!></button>", " D%c%", $wrap_content__setup);
function $setup($scope) {
	$input_content($scope["#childScope/0"], $wrap_content($scope));
}
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_id($scope, input.id);
};
const $input_id__closure = /*@__PURE__*/ _closure($wrap_content__input_id);
const $input_id = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_id", $input_id__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

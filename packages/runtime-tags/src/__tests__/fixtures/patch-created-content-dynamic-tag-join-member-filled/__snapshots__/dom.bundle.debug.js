// tags/one.marko
const $template$3 = "<i>one <!></i>";
const $walks$3 = "Db%l";
const $setup$3 = ($_) => {};
const $input_id$2 = ($scope, input_id) => _text($scope["#text/0"], input_id);
const $input$3 = ($scope, input) => $input_id$2($scope, input.id);
var one_default = /*@__PURE__*/ _template("__tests__/tags/one.marko", $template$3, $walks$3, 0, $input$3);

// tags/two.marko
const $template$2 = "<b>two <!></b>";
const $walks$2 = "Db%l";
const $setup$2 = ($_) => {};
const $input_id$1 = ($scope, input_id) => _text($scope["#text/0"], input_id);
const $input$2 = ($scope, input) => $input_id$1($scope, input.id);
var two_default = /*@__PURE__*/ _template("__tests__/tags/two.marko", $template$2, $walks$2, 0, $input$2);

// tags/wrap.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _init_resume("__tests__/tags/wrap.marko_1_input_content#0:4/init", /*@__PURE__*/ _fill("__tests__/tags/wrap.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content))));
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
const $try_content__input_id = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_input_id#0:5/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill1 __tests__/template.marko_fill1/unpatched", "input_id", /*@__PURE__*/ _closure_get("input_id/7", ($scope) => _text($scope["#text/0"], $scope._._.input_id), ($scope) => $scope._._, "__tests__/template.marko_3_input_id#0:5/subscribe"), 2));
const $try_content__setup = $try_content__input_id;
const $placeholder_content__input_id = /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill1 __tests__/template.marko_fill1/unpatched", "input_id", /*@__PURE__*/ _closure_get("input_id/7", ($scope) => _text($scope["#text/0"], $scope._._.input_id), ($scope) => $scope._._), 1);
const $placeholder_content__setup = $placeholder_content__input_id;
const $placeholder_content = _content("__tests__/template.marko_2*content", "loading <!>", "b%", $placeholder_content__setup);
const $wrap_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $wrap_content__input_which__OR__input_id = /*@__PURE__*/ _fill_subscribers("__tests__/template.marko_fill1/unpatched | __tests__/template.marko_fill1", "input_id", /*@__PURE__*/ _fill_subscribers("__tests__/template.marko_fill0/unpatched", "input_which", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_which#0:4_input_id#0:5/init", 2, ($scope) => $wrap_content__dynamicTag($scope, $scope._.input_which ? one_default : two_default, ($_) => ({ id: $scope._.input_id }))), "input_which/6", 0), "input_id/7", 0);
const $wrap_content__input_which = /*@__PURE__*/ _closure_get("input_which/6", $wrap_content__input_which__OR__input_id, 0, "__tests__/template.marko_1_input_which#0:4/subscribe");
const $wrap_content__try = /*@__PURE__*/ _try("#text/1", "<p> </p>", "D ", $try_content__setup, $placeholder_content);
const $wrap_content__setup = ($scope) => {
	$wrap_content__input_which($scope);
	$wrap_content__input_id($scope);
	$wrap_content__try($scope);
};
const $wrap_content__input_id = /*@__PURE__*/ _closure_get("input_id/7", $wrap_content__input_which__OR__input_id, 0, "__tests__/template.marko_1_input_id#0:5/subscribe");
const $wrap_content = _content("__tests__/template.marko_1*content", "<!><!><!><!>", "b%b%", $wrap_content__setup);
function $setup($scope) {
	$input_content($scope["#childScope/0"], $wrap_content($scope));
}
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_which($scope, input.which);
	$input_id($scope, input.id);
};
const $input_which__closure = /*@__PURE__*/ _closure($wrap_content__input_which);
const $input_which = /*@__PURE__*/ _const("input_which", $input_which__closure);
const $input_id__closure = /*@__PURE__*/ _closure($wrap_content__input_id, $placeholder_content__input_id, $try_content__input_id);
const $input_id = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_id", $input_id__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

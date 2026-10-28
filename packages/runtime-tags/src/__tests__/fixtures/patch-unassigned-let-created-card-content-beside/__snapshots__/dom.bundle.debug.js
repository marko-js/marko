// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_on__OR__input_n__OR__input_w = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill2", "input_w", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_n", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_on", /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.input_on ? card_default : "div", ($_) => ({
	n: $scope.input_n,
	w: $scope.input_w
})), 2))));
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__OR__input_n__OR__input_w);
const $input_n = /*@__PURE__*/ _const("input_n", $input_on__OR__input_n__OR__input_w);
const $input_w = /*@__PURE__*/ _const("input_w", $input_on__OR__input_n__OR__input_w);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_n($scope, input.n);
	$input_w($scope, input.w);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", 0, $input);

// tags/wrap.marko
const $template$2 = "<div><!></div>";
const $walks$2 = "D%l";
const $setup$2 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$2 = ($scope, input) => $input_content($scope, input.content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$2, "D%l", 0, $input$2);

// tags/show-value.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input$1 = ($scope, input) => $input_value($scope, input.value);
var show_value_default = /*@__PURE__*/ _template("__tests__/tags/show-value.marko", $template$1, "D l", 0, $input$1);

// tags/card.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$2);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)("D%l");
const $wrap_content__n = /*@__PURE__*/ _init_resume("__tests__/tags/card.marko_2_n#0:6/init", /*@__PURE__*/ _closure_get("n/8", ($scope) => _text($scope["#text/0"], $scope._.n)));
const $wrap_content__setup = $wrap_content__n;
const $wrap_content = /*@__PURE__*/ _content("__tests__/tags/card.marko_2*content", "<b> </b>", "D ", $wrap_content__setup);
const $if_content__input_w = /*@__PURE__*/ _fill_join("__tests__/tags/card.marko_fill0", "input_w", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $input_value($scope["#childScope/0"], $scope._.input_w)));
const $if_content__setup = $if_content__input_w;
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<section><h3>Branch heading</h3><p>Static paragraph text that only the branch renders.</p></section>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)("D l"), $if_content__setup);
const $n__closure = /*@__PURE__*/ _closure($wrap_content__n);
const $n = _fill_resume("__tests__/tags/card.marko_fill1", /*@__PURE__*/ _let("n/6", ($scope) => {
	$if($scope, $scope.n ? 0 : 1);
	$n__closure($scope);
}));
const $input_n = $n;
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $wrap_content($scope));
}
const $input = ($scope, input) => {
	$input_n($scope, input.n);
	$input_w($scope, input.w);
};
const $input_w = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill0", "input_w", $if_content__input_w);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_on__OR__input_n = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_n", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_on", /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.input_on ? card_default : "div", ($_) => ({ n: $scope.input_n })))));
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__OR__input_n);
const $input_n = /*@__PURE__*/ _const("input_n", $input_on__OR__input_n);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_n($scope, input.n);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", 0, $input);

// tags/wrap.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, "D%l", 0, $input$1);

// tags/card.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $wrap_content__n = /*@__PURE__*/ _init_resume("__tests__/tags/card.marko_1_n#0:4/init", /*@__PURE__*/ _closure_get("n/5", ($scope) => _text($scope["#text/0"], $scope._.n)));
const $wrap_content__setup = $wrap_content__n;
const $wrap_content = /*@__PURE__*/ _content("__tests__/tags/card.marko_1*content", "<b> </b>", "D ", $wrap_content__setup);
const $n__closure = /*@__PURE__*/ _closure($wrap_content__n);
const $n = _fill_resume("__tests__/tags/card.marko_fill0", /*@__PURE__*/ _let("n/4", $n__closure));
const $input_n = $n;
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $wrap_content($scope));
}
const $input = ($scope, input) => $input_n($scope, input.n);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, $setup, $input);

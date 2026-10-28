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
const $template$2 = "<div><header><h2>Section title</h2><p>Some static introduction text for this wrapper.</p></header><!><footer><a href=/more>Read more</a></footer><aside><h3>Related</h3><ul><li>First related item</li><li>Second related item</li><li>Third related item</li></ul></aside></div>";
const $walks$2 = "Db%l";
const $setup$2 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$2 = ($scope, input) => $input_content($scope, input.content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$2, $walks$2, 0, $input$2);

// tags/show-value.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input$1 = ($scope, input) => $input_value($scope, input.value);
var show_value_default = /*@__PURE__*/ _template("__tests__/tags/show-value.marko", $template$1, "D l", 0, $input$1);

// tags/card.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $wrap_content__input_w = /*@__PURE__*/ _fill_join_closure("__tests__/tags/card.marko_fill0", "input_w", /*@__PURE__*/ _closure_get("input_w/6", ($scope) => _text($scope["#text/1"], $scope._._.input_w), ($scope) => $scope._._, "__tests__/tags/card.marko_2_input_w#0:4/subscribe"), 0);
const $wrap_content__setup = ($scope) => {
	$wrap_content__input_w($scope);
	$wrap_content__n($scope);
};
const $wrap_content__n = /*@__PURE__*/ _closure_get("n/7", ($scope) => _text($scope["#text/0"], $scope._._.n), ($scope) => $scope._._);
const $wrap_content = /*@__PURE__*/ _content("__tests__/tags/card.marko_2*content", "<b> </b> <i> </i>", "D lbD ", $wrap_content__setup);
const $if_content__input_w = /*@__PURE__*/ _fill_join("__tests__/tags/card.marko_fill0", "input_w", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_value($scope["#childScope/1"], $scope._.input_w)));
const $if_content__setup = ($scope) => {
	$if_content__input_w._($scope);
	$input_content_direct($scope["#childScope/0"], $wrap_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0, _w1) => `<section><h3>Branch heading</h3><p>Static paragraph text that only the branch renders.</p></section>${_w0}${_w1}`)($template$2, $template$1), /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&`)($walks$2, "D l"), $if_content__setup);
const $n__closure = /*@__PURE__*/ _closure($wrap_content__n);
const $n = _fill_resume("__tests__/tags/card.marko_fill1", /*@__PURE__*/ _let("n/5", ($scope) => {
	$if($scope, $scope.n ? 0 : 1);
	$n__closure($scope);
}));
const $input_n = $n;
const $input = ($scope, input) => {
	$input_n($scope, input.n);
	$input_w($scope, input.w);
};
const $input_w__closure = /*@__PURE__*/ _closure($wrap_content__input_w);
const $input_w = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill0", "input_w", ($scope) => {
	$if_content__input_w($scope);
	$input_w__closure($scope);
});
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, "b%c", 0, $input);

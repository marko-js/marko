// card.marko
const $template$1 = "<section><em> </em><!></section>";
const $walks$1 = "E l%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $input_meta = ($scope, input_meta) => _text($scope["#text/0"], input_meta ? input_meta?.n : "-");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_meta($scope, input.meta);
};
var card_default = /*@__PURE__*/ _template("__tests__/card.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($walks$1);
const $inputonpdiv_content__input_label = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko1", "input_label", /*@__PURE__*/ _closure_get("input_label", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._), 0);
const $inputonpdiv_content__setup = $inputonpdiv_content__input_label;
const $inputonpdiv_content = _content_resume("__tests__/template.marko_2*content", " ", " ", $inputonpdiv_content__setup);
const $Card_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputonpdiv_content);
const $Card_content__input_on__OR__count = /*@__PURE__*/ _fill_join_subscribers("__tests__/template.marko0", "input_on", /*@__PURE__*/ _or(1, ($scope) => $Card_content__dynamicTag($scope, $scope._.input_on ? "p" : "div", () => ({ "data-n": $scope._.count }))), () => $Card_content__input_on, 0);
const $Card_content__input_on = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_on", /*@__PURE__*/ _closure_get("input_on", $Card_content__input_on__OR__count), 0);
const $Card_content__setup = ($scope) => {
	$Card_content__input_on($scope);
	$Card_content__count($scope);
};
const $Card_content__count = /*@__PURE__*/ _closure_get("count", $Card_content__input_on__OR__count);
const $Card_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $Card_content__setup);
const $count__closure = /*@__PURE__*/ _closure($Card_content__count);
const $count = /*@__PURE__*/ _let("count/6", ($scope) => {
	$input_meta($scope["#childScope/0"], attrTag({ n: $scope.count }));
	$count__closure($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $Card_content($scope));
	$count($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_label($scope, input.label);
};
const $input_on__closure = /*@__PURE__*/ _closure($Card_content__input_on);
const $input_on = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_on", $input_on__closure);
const $input_label__closure = /*@__PURE__*/ _closure($inputonpdiv_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko1", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

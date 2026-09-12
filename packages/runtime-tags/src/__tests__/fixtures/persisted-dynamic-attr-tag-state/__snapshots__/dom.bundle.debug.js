// card.marko
const $template$1 = "<section><em> </em><!></section>";
const $walks$1 = "E l%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $input_meta_n = ($scope, input_meta_n) => _text($scope["#text/0"], input_meta_n);
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag$1;
const $input$1 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_meta($scope, input.meta);
};
const $input_meta = ($scope, input_meta) => $input_meta_n($scope, input_meta?.n);
var card_default = /*@__PURE__*/ _template("__tests__/card.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $inputonCardnull_content__input_label = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko1", "input_label", /*@__PURE__*/ _closure_get("input_label", ($scope) => _text($scope["#text/0"], $scope._.input_label)), 0);
const $inputonCardnull_content__setup = $inputonCardnull_content__input_label;
const $inputonCardnull_content = _content_resume("__tests__/template.marko_1*content", " ", " ", $inputonCardnull_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputonCardnull_content);
const $input_on__OR__count = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_on", /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.input_on ? card_default : null, () => ({ meta: attrTag({ n: $scope.count }) }))));
const $count = /*@__PURE__*/ _let("count/6", $input_on__OR__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_on = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_on", $input_on__OR__count);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($inputonCardnull_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko1", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

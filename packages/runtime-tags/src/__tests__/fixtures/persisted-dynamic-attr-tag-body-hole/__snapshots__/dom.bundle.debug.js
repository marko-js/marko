// card.marko
const $template$1 = "<section><em> </em><!><!></section>";
const $walks$1 = "E l%b%l";
const $setup$1 = () => {};
const $input_meta_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/2");
const $input_meta_n = ($scope, input_meta_n) => _text($scope["#text/0"], input_meta_n);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_meta_content = $dynamicTag;
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_content = $dynamicTag2;
const $input$1 = ($scope, input) => {
	$input_meta($scope, input.meta);
	$input_content($scope, input.content);
};
const $input_meta = ($scope, input_meta) => {
	$input_meta_n($scope, input_meta?.n);
	$input_meta_content($scope, input_meta?.content);
};
var card_default = /*@__PURE__*/ _template("__tests__/card.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($walks$1);
const $Card_content__input_label = /*@__PURE__*/ _closure_get("input_label", ($scope) => _text($scope["#text/0"], $scope._.input_label));
const $Card_content__setup = $Card_content__input_label;
const $Card_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", " ", " ", $Card_content__setup);
const $meta_content__input_label = /*@__PURE__*/ _closure_get("input_label", ($scope) => _text($scope["#text/0"], $scope._.input_label));
const $meta_content__setup = $meta_content__input_label;
const $meta_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", " ", " ", $meta_content__setup);
const $count = /*@__PURE__*/ _let("count/5", ($scope) => $input_meta_n($scope["#childScope/0"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$input_meta_content_direct($scope["#childScope/0"], $meta_content($scope));
	$input_content_direct($scope["#childScope/0"], $Card_content($scope));
	$count($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($meta_content__input_label, $Card_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

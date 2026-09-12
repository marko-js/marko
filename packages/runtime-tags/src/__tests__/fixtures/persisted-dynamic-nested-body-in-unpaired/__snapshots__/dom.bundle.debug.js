// card.marko
const $template$2 = "<section><em> </em><!></section>";
const $walks$2 = "E l%l";
const $setup$2 = () => {};
const $input_content_direct$1 = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $input_meta = ($scope, input_meta) => _text($scope["#text/0"], input_meta ? input_meta?.n : "-");
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content$1 = $dynamicTag$1;
const $input$2 = ($scope, input) => {
	$input_content$1($scope, input.content);
	$input_meta($scope, input.meta);
};
var card_default = /*@__PURE__*/ _template("__tests__/card.marko", $template$2, $walks$2, 0, $input$2);

// box.marko
const $template$1 = "<article><b> </b><!></article>";
const $walks$1 = "E l%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $input_k = ($scope, input_k) => _text($scope["#text/0"], input_k);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_k($scope, input.k);
};
var box_default = /*@__PURE__*/ _template("__tests__/box.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($template$2);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($walks$2);
const $Box_content__input_label = /*@__PURE__*/ _closure_get("input_label", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._);
const $Box_content__setup = ($scope) => {
	$Box_content__input_label($scope);
	$Box_content__count($scope);
};
const $Box_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/1"], $scope._._.count), ($scope) => $scope._._);
const $Box_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<!>!<!>", "%c%", $Box_content__setup);
const $Card_content__input_label = /*@__PURE__*/ _closure_get("input_label", ($scope) => $input_k($scope["#childScope/0"], $scope._.input_label));
const $Card_content__setup = ($scope) => {
	$Card_content__input_label($scope);
	$input_content_direct($scope["#childScope/0"], $Box_content($scope));
};
const $Card_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1), $Card_content__setup);
const $count__closure = /*@__PURE__*/ _closure($Box_content__count);
const $count = /*@__PURE__*/ _let("count/5", ($scope) => {
	$input_meta($scope["#childScope/0"], attrTag({ n: $scope.count }));
	$count__closure($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$input_content_direct$1($scope["#childScope/0"], $Card_content($scope));
	$count($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($Card_content__input_label, $Box_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

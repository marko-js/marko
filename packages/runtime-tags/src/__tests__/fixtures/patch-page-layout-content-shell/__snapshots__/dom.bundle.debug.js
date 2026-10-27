// tags/layout.marko
const $template$1 = "<main><!></main>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var layout_default = /*@__PURE__*/ _template("__tests__/tags/layout.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<html><body>${_w0}</body></html>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `E/${_w0}&m`)("D%l");
const $layout_content__input_label = /*@__PURE__*/ _closure_get("input_label/4", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:3/subscribe");
const $layout_content__n = /*@__PURE__*/ _let("n/3", ($scope) => _text($scope["#text/1"], $scope.n));
const $layout_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/2"], "click", function() {
	$layout_content__n($scope, +$scope.n + 1);
}));
const $layout_content__setup = ($scope) => {
	$layout_content__input_label($scope);
	$layout_content__n($scope, 0);
	$layout_content__setup__script($scope);
};
const $layout_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<p><!> <!></p><button>+</button>", "D%c%l ", $layout_content__setup);
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $layout_content($scope));
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($layout_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

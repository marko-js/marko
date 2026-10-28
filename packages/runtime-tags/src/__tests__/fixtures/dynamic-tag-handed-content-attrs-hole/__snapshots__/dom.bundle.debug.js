// tags/one.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content__OR__input_t = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.input_content, ($_) => ({ title: $scope.input_t })));
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__OR__input_t);
const $input_t = /*@__PURE__*/ _const("input_t", $input_content__OR__input_t);
const $input$1 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_t($scope, input.t);
};
var one_default = /*@__PURE__*/ _template("__tests__/tags/one.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $one_content__input_y = /*@__PURE__*/ _closure_get("input_y/4", ($scope) => _text($scope["#text/0"], $scope._.input_y), 0, "__tests__/template.marko_1_input_y#0:3/subscribe");
const $one_content__setup = $one_content__input_y;
const $one_content = _content("__tests__/template.marko_1*content", "A<!>", "b%", $one_content__setup);
function $setup($scope) {
	$input_content($scope["#childScope/0"], $one_content($scope));
}
const $input_y__closure = /*@__PURE__*/ _closure($one_content__input_y);
const $input_y = /*@__PURE__*/ _const("input_y", ($scope) => {
	$input_t($scope["#childScope/0"], $scope.input_y);
	$input_y__closure($scope);
});
const $input = ($scope, input) => $input_y($scope, input.y);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

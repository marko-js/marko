// tags/one.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content__OR__input_attrs = /*@__PURE__*/ _fill_join("__tests__/tags/one.marko_fill1", "input_attrs", /*@__PURE__*/ _fill_join("__tests__/tags/one.marko_fill0", "input_content", /*@__PURE__*/ _or_resume("__tests__/tags/one.marko_0_input_content#3_input_attrs#4/init", 5, ($scope) => $dynamicTag($scope, $scope.input_content, ($_) => $scope.input_attrs))));
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__OR__input_attrs);
const $input_attrs = /*@__PURE__*/ _const("input_attrs", $input_content__OR__input_attrs);
const $input$1 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_attrs($scope, input.attrs);
};
var one_default = /*@__PURE__*/ _template("__tests__/tags/one.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=z>z</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $one_content = _content("__tests__/template.marko_1*content", "A");
const $z = _let("z/5");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$z($scope, +$scope.z + 1);
}));
function $setup($scope) {
	$input_content($scope["#childScope/1"], $one_content($scope));
	$setup__script($scope);
	$z($scope, 0);
}
const $input_y = ($scope, input_y) => $input_attrs($scope["#childScope/1"], { title: input_y });
const $input = ($scope, input) => $input_y($scope, input.y);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

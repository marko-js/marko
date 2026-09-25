// tags/heading.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $inputtype_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $inputtype_content__input_content = /*@__PURE__*/ _closure_get("input_content", ($scope) => $inputtype_content__dynamicTag($scope, $scope._.input_content), 0, "__tests__/tags/heading.marko_1_input_content#4/subscribe");
const $inputtype_content__setup = $inputtype_content__input_content;
const $inputtype_content = /*@__PURE__*/ _content("__tests__/tags/heading.marko_1*content", "<!><!><!>", "b%", $inputtype_content__setup);
const $inputtype_content2 = /*@__PURE__*/ _content_resume($inputtype_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtype_content);
const $input_type = $dynamicTag;
const $input = ($scope, input) => {
	$input_type($scope, input.type);
	$input_content($scope, input.content);
};
const $input_content__closure = /*@__PURE__*/ _closure($inputtype_content__input_content);
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__closure);
const $renders = [$inputtype_content2];
var heading_default = /*@__PURE__*/ _template("__tests__/tags/heading.marko", $template$1, "b%c", 0, $input, $renders);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button id=toggle>toggle</button>${_w0}${_w1}<!>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => ` b/${_w0}&/${_w1}&b`)("b%c", "b%c");
const $heading_content2 = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "static: not registered");
const $heading_content = _content("__tests__/template.marko_1*content", "state driven string: not registered");
const $big = /*@__PURE__*/ _let("big/3", ($scope) => $input_type($scope["#childScope/1"], $scope.big ? "h1" : "h2"));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$big($scope, !$scope.big);
}));
function $setup($scope) {
	$input_content($scope["#childScope/1"], $heading_content($scope));
	$input_content($scope["#childScope/2"], $heading_content2($scope));
	$input_type($scope["#childScope/2"], "h3");
	$big($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/title.marko
const $template$2 = "<div class=title><!></div>";
const $walks$2 = "D%l";
const $setup$2 = () => {};
const $input_content_direct$1 = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content$1 = $dynamicTag$1;
const $input$1 = ($scope, input) => $input_content$1($scope, input.content);
var title_default = /*@__PURE__*/ _template("__tests__/tags/title.marko", $template$2, "D%l", 0, $input$1);

// tags/textarea.marko
const $template$1 = "<div class=textarea><!></div>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var textarea_default = /*@__PURE__*/ _template("__tests__/tags/textarea.marko", $template$1, "D%l", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button>inc</button>${_w0}${_w1}`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => ` b/${_w0}&/${_w1}&`)("D%l", "D%l");
const $textarea_content__n = /*@__PURE__*/ _closure_get("n", ($scope) => _text($scope["#text/0"], $scope._.n));
const $textarea_content__setup = $textarea_content__n;
const $textarea_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "textarea <!>", "b%", $textarea_content__setup);
const $title_content__n = /*@__PURE__*/ _closure_get("n", ($scope) => _text($scope["#text/0"], $scope._.n));
const $title_content__setup = $title_content__n;
const $title_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "title <!>", "b%", $title_content__setup);
const $n__closure = /*@__PURE__*/ _closure($title_content__n, $textarea_content__n);
const $n = /*@__PURE__*/ _let("n/3", $n__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$input_content_direct$1($scope["#childScope/1"], $title_content($scope));
	$input_content_direct($scope["#childScope/2"], $textarea_content($scope));
	$n($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

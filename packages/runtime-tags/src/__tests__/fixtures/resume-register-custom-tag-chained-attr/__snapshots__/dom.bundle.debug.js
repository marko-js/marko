// tags/heading.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = () => {};
const $inputtype_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $inputtype_content__input_content = /*@__PURE__*/ _closure_get("input_content", ($scope) => $inputtype_content__dynamicTag($scope, $scope._.input_content), 0, "__tests__/tags/heading.marko_1_input_content#4/subscribe");
const $inputtype_content__setup = $inputtype_content__input_content;
const $inputtype_content = /*@__PURE__*/ _content("__tests__/tags/heading.marko_1*content", "<!><!><!>", "b%", $inputtype_content__setup);
const $inputtype_content2 = /*@__PURE__*/ _content_resume($inputtype_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtype_content);
const $input_type = $dynamicTag;
const $input$1 = ($scope, input) => {
	$input_type($scope, input.type);
	$input_content$1($scope, input.content);
};
const $input_content__closure$1 = /*@__PURE__*/ _closure($inputtype_content__input_content);
const $input_content$1 = /*@__PURE__*/ _const("input_content", $input_content__closure$1);
const $renders$1 = [$inputtype_content2];
var heading_default = /*@__PURE__*/ _template("__tests__/tags/heading.marko", $template$2, "b%c", 0, $input$1, $renders$1);

// tags/wrapper.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $heading_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $heading_content__input_content = /*@__PURE__*/ _closure_get("input_content", ($scope) => $heading_content__dynamicTag($scope, $scope._.input_content), 0, "__tests__/tags/wrapper.marko_1_input_content#4/subscribe");
const $heading_content__setup = $heading_content__input_content;
const $heading_content = _content("__tests__/tags/wrapper.marko_1*content", "<!><!><!>", "b%", $heading_content__setup);
function $setup$1($scope) {
	$input_content$1($scope["#childScope/0"], $heading_content($scope));
}
const $input_kind = ($scope, input_kind) => $input_type($scope["#childScope/0"], input_kind);
const $input = ($scope, input) => {
	$input_kind($scope, input.kind);
	$input_content($scope, input.content);
};
const $input_content__closure = /*@__PURE__*/ _closure($heading_content__input_content);
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__closure);
const $renders = [$inputtype_content2];
var wrapper_default = /*@__PURE__*/ _template("__tests__/tags/wrapper.marko", $template$1, $walks$1, $setup$1, $input, $renders);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button id=inc> </button>${_w0}${_w1}<!>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => ` D l/${_w0}&/${_w1}&b`)($walks$1, $walks$1);
const $wrapper_content2 = _content("__tests__/template.marko_2*content", "chained state string: not registered");
const $wrapper_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "chained string: not registered");
const $count = /*@__PURE__*/ _let("count/4", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$input_kind($scope["#childScope/3"], $scope.count % 2 ? "h2" : "h1");
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	$input_content($scope["#childScope/2"], $wrapper_content($scope));
	$input_kind($scope["#childScope/2"], "h1");
	$setup$1($scope["#childScope/3"]);
	$input_content($scope["#childScope/3"], $wrapper_content2($scope));
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

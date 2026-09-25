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
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $heading_content__if = /*@__PURE__*/ _if("#text/2", "<em>odd</em>");
const $heading_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => {
	_text($scope["#text/1"], $scope._.count);
	$heading_content__if($scope, $scope._.count % 2 ? 0 : 1);
}, 0, "__tests__/template.marko_1_count#1/subscribe");
const $heading_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._, +$scope._.count + 1);
}));
const $heading_content__setup = ($scope) => {
	$heading_content__count($scope);
	$heading_content__setup__script($scope);
};
const $heading_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<button id=inc> </button><!><!>", " D l%", $heading_content__setup);
const $count__closure = /*@__PURE__*/ _closure($heading_content__count);
const $count = /*@__PURE__*/ _let("count/1", $count__closure);
function $setup($scope) {
	$input_content($scope["#childScope/0"], $heading_content($scope));
	$input_type($scope["#childScope/0"], "h1");
	$count($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

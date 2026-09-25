// tags/heading.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $inputtype_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $inputtype_content__input_content = /*@__PURE__*/ _closure_get("input_content", ($scope) => $inputtype_content__dynamicTag($scope, $scope._.input_content), 0, "__tests__/tags/heading.marko_1_input_content#4/subscribe");
const $inputtype_content__setup = $inputtype_content__input_content;
const $inputtype_content = /*@__PURE__*/ _content("__tests__/tags/heading.marko_1*content", "<!><!><!>", "b%", $inputtype_content__setup);
const $inputtype_content2 = /*@__PURE__*/ _content_resume($inputtype_content);
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtype_content);
const $input_type = $dynamicTag$1;
const $input = ($scope, input) => {
	$input_type($scope, input.type);
	$input_content($scope, input.content);
};
const $input_content__closure = /*@__PURE__*/ _closure($inputtype_content__input_content);
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__closure);
const $renders = [$inputtype_content2];
var heading_default = /*@__PURE__*/ _template("__tests__/tags/heading.marko", $template$1, "b%c", 0, $input, $renders);

// template.marko
const $template = "<button id=inc> </button><!><!>";
const $walks = " D l%c";
const $Heading_content = _content("__tests__/template.marko_1*content", "template as value: registered");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2", $Heading_content);
const $count = /*@__PURE__*/ _let("count/3", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$dynamicTag($scope, heading_default, () => ({ type: $scope.count % 2 ? "h2" : "h1" }));
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

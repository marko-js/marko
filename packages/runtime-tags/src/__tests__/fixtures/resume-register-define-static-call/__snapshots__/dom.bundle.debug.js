// template.marko
const $Heading_content__walks = "b%c", $Heading_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button id=inc> </button>${_w0}${_w1}<!>`)($Heading_content__template, $Heading_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => ` D l/${_w0}&/${_w1}&b`)($Heading_content__walks, $Heading_content__walks);
const $Heading_content3 = /*@__PURE__*/ _content("__tests__/template.marko_4*content", "also static: not registered");
const $Heading_content2 = /*@__PURE__*/ _content("__tests__/template.marko_3*content", "static content: not registered");
const $inputtype_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $inputtype_content__input_content = /*@__PURE__*/ _closure_get("input_content", ($scope) => $inputtype_content__dynamicTag($scope, $scope._.input_content), 0, "__tests__/template.marko_2_input_content#4/subscribe");
const $inputtype_content__setup = $inputtype_content__input_content;
const $inputtype_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<!><!><!>", "b%", $inputtype_content__setup);
const $Heading_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtype_content);
const $Heading_content__input_type = $Heading_content__dynamicTag;
const $Heading_content__tag_input_content__closure = /*@__PURE__*/ _closure($inputtype_content__input_content);
const $Heading_content__tag_input_content = /*@__PURE__*/ _const("input_content", $Heading_content__tag_input_content__closure);
const $Heading_content__$params = ($scope, $params2) => $Heading_content__input($scope, $params2[0]);
const $Heading_content__input = ($scope, input) => {
	$Heading_content__input_type($scope, input.type);
	$Heading_content__tag_input_content($scope, input.content);
};
const $count = /*@__PURE__*/ _let("count/4", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$Heading_content__tag_input_content($scope["#childScope/2"], $Heading_content2($scope));
	$Heading_content__input_type($scope["#childScope/2"], "h1");
	$Heading_content__tag_input_content($scope["#childScope/3"], $Heading_content3($scope));
	$Heading_content__input_type($scope["#childScope/3"], "h2");
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

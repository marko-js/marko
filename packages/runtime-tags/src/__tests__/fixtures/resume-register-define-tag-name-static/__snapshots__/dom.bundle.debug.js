// template.marko
const $Heading_content__walks = "b%c", $Heading_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button id=inc> </button>${_w0}${_w1}<!>`)($Heading_content__template, $Heading_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => ` D l/${_w0}&/${_w1}&b`)($Heading_content__walks, $Heading_content__walks);
const $inputtype_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "define body: not registered");
const $Heading_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtype_content);
const $Heading_content__input_type = $Heading_content__dynamicTag;
const $Heading_content__$params = ($scope, $params2) => $Heading_content__input($scope, $params2[0]);
const $Heading_content__input = ($scope, input) => $Heading_content__input_type($scope, input.type);
const $count = /*@__PURE__*/ _let("count/4", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$Heading_content__input_type($scope["#childScope/3"], $scope.count % 2 ? "h2" : "h3");
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$Heading_content__input_type($scope["#childScope/2"], "h1");
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

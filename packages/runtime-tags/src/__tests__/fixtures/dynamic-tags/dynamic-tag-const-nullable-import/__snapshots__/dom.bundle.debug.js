// tags/custom-tag.marko
const $template$1 = "<div class=custom>custom <!> body</div>";
const $walks$1 = "Db%l";
const $setup$1 = () => {};
const $input_content = ($scope, input_content) => _text($scope["#text/0"], input_content ? "with" : "without");
const $input = ($scope, input) => $input_content($scope, input.content);
var custom_tag_default = /*@__PURE__*/ _template("__tests__/tags/custom-tag.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = "<!><!><button id=toggle></button>";
const $walks = "b%b b";
const $x_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "Fallback Body");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $x_content);
const $x = $dynamicTag;
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $x($scope, $scope.show ? custom_tag_default : null));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

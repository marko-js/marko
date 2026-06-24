// template.marko
const $template = "<!><!><button></button>";
const $walks = "b%b b";
const $x_content = _content_resume("__tests__/template.marko_1_content", "Body Content", "b");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $x_content);
const $x__script = _script("__tests__/template.marko_0_x", ($scope) => _on($scope["#button/1"], "click", function() {
	$x($scope, $scope.x ? null : "div");
}));
const $x = /*@__PURE__*/ _let("x/2", ($scope) => {
	$dynamicTag($scope, $scope.x);
	$x__script($scope);
});
function $setup($scope) {
	$x($scope, null);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

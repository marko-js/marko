// template.marko
const $template = "<!><!><button id=swap>swap</button><button id=read>read</button><output> </output>";
const $walks = "b1b b bD l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, () => $el);
const $tag = /*@__PURE__*/ _let("tag/5", ($scope) => $dynamicTag($scope, $scope.tag));
const $text = /*@__PURE__*/ _let("text/6", ($scope) => _text($scope["#text/4"], $scope.text));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/2"], "click", function() {
		$tag($scope, $scope.tag === "div" ? "span" : "div");
	});
	_on($scope["#button/3"], "click", function() {
		$text($scope, $scope.el() ? $scope.el().tagName : "none");
	});
});
function $setup($scope) {
	$tag($scope, "div");
	$text($scope, "");
	$setup__script($scope);
}
const $el = _var_resume("__tests__/template.marko_0_el#7/var", /*@__PURE__*/ _const("el"));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

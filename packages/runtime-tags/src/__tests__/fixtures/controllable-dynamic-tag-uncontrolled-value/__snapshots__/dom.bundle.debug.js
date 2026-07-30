// template.marko
const $template = "<!><button>pick c</button>";
const $walks = "%b b";
_enable_controllable();
const $tag_content = _content_resume("__tests__/template.marko_1_content", "<option value=a>A</option><option value=b>B</option><option value=c>C</option>");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $tag_content);
const $tag__OR__pick = /*@__PURE__*/ _or(4, ($scope) => $dynamicTag($scope, $scope.tag, () => ({ value: $scope.pick })));
const $tag = /*@__PURE__*/ _const("tag", $tag__OR__pick);
const $pick = /*@__PURE__*/ _let("pick/3", $tag__OR__pick);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$pick($scope, "c");
}));
function $setup($scope) {
	$tag($scope, "select");
	$pick($scope, "b");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

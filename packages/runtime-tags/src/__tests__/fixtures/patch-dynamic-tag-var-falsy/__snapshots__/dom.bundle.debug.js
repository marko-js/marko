// template.marko
const $template = "<!><!><button> </button>";
const $walks = "b1b D l";
_dynamic_tag_var_resume("#text/0");
const $clicks = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "clicks/7", ($scope) => _text($scope["#text/3"], $scope.clicks));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$clicks($scope, $scope.clicks + ($scope.el ? 1 : -1));
}));
function $setup($scope) {
	$setup__script($scope);
	$clicks($scope, 0);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, () => $el);
const $el = _var_resume("__tests__/template.marko_0_el#8/var", /*@__PURE__*/ _const("el"));
const $input_tag = $dynamicTag;
const $input = ($scope, input) => $input_tag($scope, input.tag);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

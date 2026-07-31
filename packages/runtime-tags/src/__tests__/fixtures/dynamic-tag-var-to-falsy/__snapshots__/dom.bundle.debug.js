// template.marko
const $template = "<!><!><button> </button>";
const $walks = "b1b D l";
const $clicks = /*@__PURE__*/ _let("clicks/7", ($scope) => _text($scope, "#text/3", $scope.clicks));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$clicks($scope, $scope.clicks + ($scope.el ? 1 : -1));
}));
function $setup($scope) {
	$clicks($scope, 0);
	$setup__script($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, () => $el);
const $el = _var_resume("__tests__/template.marko_0_el#8/var", /*@__PURE__*/ _const("el"));
const $input_tag = $dynamicTag;
const $input = ($scope, input) => $input_tag($scope, input.tag);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<textarea></textarea><textarea></textarea><title>&lt;p&gt;hi &amp; bye</title><textarea></textarea>";
const $walks = " b c b";
const $v = /*@__PURE__*/ _let("v/3", ($scope) => _attr_textarea_value_default($scope, "#textarea/1", `<p>${$scope.v}`));
function $setup($scope) {
	_attr_textarea_value_default($scope, "#textarea/0", "<p>hi & bye");
	_attr_textarea_value_default($scope, "#textarea/2", "&lt;p&gt;hi");
	$v($scope, "x");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// template.marko
const $template = "<div></div><section></section><span></span>";
const $walks = " b b b";
function $setup($scope) {
	_attr_content($scope, "#div/0", undefined);
	_attr_content($scope, "#section/1", null);
	_attr_content($scope, "#span/2", false);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

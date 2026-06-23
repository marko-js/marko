// template.marko
const $template = "<select><option value=a>A</option><option value=b>B</option><option value=c>C</option></select>";
const $walks = " b";
function $setup($scope) {
	_attr_select_value_default($scope, "#select/0", "b");
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, " b", $setup);

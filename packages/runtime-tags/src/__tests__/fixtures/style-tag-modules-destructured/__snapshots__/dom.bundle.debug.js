// template.marko
const $template = "<div>Hello</div>";
const $walks = " b";
const { content } = v_template_marko_module_exports;
function $setup($scope) {
	_attr_class($scope["#div/0"], content);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, " b", $setup);

// v:template.marko.module.css
var v_template_marko_module_exports = /* @__PURE__ */ __exportAll({ default: () => v_template_marko_module_default });
var v_template_marko_module_default = "\n  .content {\n    color: green;\n  }\n";

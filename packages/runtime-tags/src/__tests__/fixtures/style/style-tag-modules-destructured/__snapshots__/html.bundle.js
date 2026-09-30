// v:template.marko.module.css
var v_template_marko_module_exports = /* @__PURE__ */ __exportAll({ default: () => v_template_marko_module_default });
var v_template_marko_module_default = "\n  .content {\n    color: green;\n  }\n";

// template.marko
const { content } = v_template_marko_module_exports;
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html(`<div${_attr_class(content)}>Hello</div>`);
}, 1);

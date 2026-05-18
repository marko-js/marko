// v:template.marko.css
var v_template_marko_default = "\n  .content {\n    color: green;\n  }\n";

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div class=content>Hello</div>");
}, 1);

// page.css
var page_default = ".page-global {\n  margin: 0;\n}\n";

// child.css
var child_default$1 = ".child-global {\n  padding: 0;\n}\n";

// v:child.marko.css
var v_child_marko_default = "\n  .child {\n    color: blue;\n  }\n";

// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div class=child>Child</div>");
});

// v:template.marko.css
var v_template_marko_default = "\n  .page {\n    color: red;\n  }\n";

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	child_default({});
	_html("<div class=page>Page</div>");
}, 1);

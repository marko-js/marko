// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html("<div class=child>Child</div>");
});

// template.marko
var template_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	child_default({});
	_html("<div class=page>Page</div>");
}, 1);

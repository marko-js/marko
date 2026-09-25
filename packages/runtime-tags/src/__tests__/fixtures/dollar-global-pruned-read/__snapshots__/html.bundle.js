// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span>child</span>");
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	child_default({});
	_html("<div>hi</div>");
}, 1);

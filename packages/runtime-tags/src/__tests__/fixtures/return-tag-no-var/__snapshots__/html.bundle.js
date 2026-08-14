// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	let x = 1;
	_html("<span>child</span>");
	return x;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	child_default({});
}, 1);

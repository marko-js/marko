// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span>child</span>");
	return 1;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html(`<div>parent ${_escape(child_default({}))}</div>`);
}, 1);

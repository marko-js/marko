// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span>child</span>");
	return 4;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	let data = child_default({});
	_html(`<div>${_escape(data)}</div>`);
}, 1);

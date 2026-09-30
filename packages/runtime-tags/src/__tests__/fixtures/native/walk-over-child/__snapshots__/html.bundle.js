// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span>Hello</span>");
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	let count = 0;
	_html("<section>");
	child_default({});
	_html(`</section><div>${_escape(count)}</div>`);
}, 1);

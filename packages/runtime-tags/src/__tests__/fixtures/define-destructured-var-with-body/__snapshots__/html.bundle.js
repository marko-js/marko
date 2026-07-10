// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	const { value } = {
		value: 2,
		content: _content("a0", () => {
			_scope_id();
			_scope_reason();
			_html("<div>body</div>");
		})
	};
	_html(`<span>${_escape(value)}</span>`);
}, 1);

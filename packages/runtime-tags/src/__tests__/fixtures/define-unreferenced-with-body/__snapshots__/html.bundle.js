// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_content("a0", () => {
		_scope_id();
		_scope_reason();
		_html("<div>never rendered</div>");
	});
	_html("<span>only this</span>");
}, 1);

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_attr_select_value(_scope_id(), "a", "b", void 0, () => {
		_html("<select><option>a</option><option>b</option></select>");
	});
}, 1);

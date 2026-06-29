// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html("<search><form action=/recipes><input type=search name=q aria-label=\"Search recipes\"></form></search>");
}, 1);

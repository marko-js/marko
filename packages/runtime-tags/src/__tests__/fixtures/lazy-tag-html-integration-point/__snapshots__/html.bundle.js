// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html("<input value=lazy>");
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<svg><foreignObject class=host>");
	$Child_withLoadAssets({});
	_html("</foreignObject></svg>");
}, 1);

// tags/static-child.marko
var static_child_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span class=child>Static</span>");
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(static_child_default, flush, "_b");
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html(`<!DOCTYPE html><html><head><title>Static</title>${_flush_head()}</head><body>`);
	$Child_withLoadAssets({});
	_trailers("</body></html>");
}, 1);

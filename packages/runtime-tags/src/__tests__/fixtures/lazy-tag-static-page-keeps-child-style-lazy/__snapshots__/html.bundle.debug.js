// tags/v:static-child.marko.css
var v_static_child_marko_default = "\n  .child { color: green }\n";

// tags/static-child.marko
var static_child_default = _template("__tests__/tags/static-child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span class=child>Static</span>");
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(static_child_default, flush, "ready:__tests__/tags/static-child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<!DOCTYPE html><html><head><title>Static</title>${_flush_head()}</head><body>`);
	$Child_withLoadAssets({});
	_trailers("</body></html>");
}, 1);

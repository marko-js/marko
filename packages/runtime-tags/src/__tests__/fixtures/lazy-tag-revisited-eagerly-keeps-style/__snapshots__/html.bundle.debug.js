// tags/v:shared.marko.css
var v_shared_marko_default = "\n  .shared { color: green }\n";

// tags/shared.marko
var shared_default = _template("__tests__/tags/shared.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span class=shared>Shared</span>");
});

// tags/lazy-wrap.marko
var lazy_wrap_default = _template("__tests__/tags/lazy-wrap.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div class=lazy>");
	shared_default({});
	_html("</div>");
});

// template.marko
const $LazyWrap_withLoadAssets = withLoadAssets(lazy_wrap_default, flush, "ready:__tests__/tags/lazy-wrap.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<!DOCTYPE html><html><head><title>Revisit</title>${_flush_head()}</head><body>`);
	$LazyWrap_withLoadAssets({});
	shared_default({});
	_trailers("</body></html>");
}, 1);

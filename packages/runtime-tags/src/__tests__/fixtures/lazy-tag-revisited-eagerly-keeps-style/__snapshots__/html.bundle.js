// tags/shared.marko
var shared_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span class=shared>Shared</span>");
});

// tags/lazy-wrap.marko
var lazy_wrap_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<div class=lazy>");
	shared_default({});
	_html("</div>");
});

// template.marko
const $LazyWrap_withLoadAssets = withLoadAssets(lazy_wrap_default, flush, "_b");
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html(`<!DOCTYPE html><html><head><title>Revisit</title>${_flush_head()}</head><body>`);
	$LazyWrap_withLoadAssets({});
	shared_default({});
	_trailers("</body></html>");
}, 1);

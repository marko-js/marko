// tags/shared.marko
var shared_default = _template("d", (input) => {
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

// tags/resume-root.marko
var resume_root_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_as = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.as, {}, _content_resume("c0", () => {
		_scope_id();
		_scope_reason();
		shared_default({});
	}, $scope0_id), 0, $wg__input_as);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
const $LazyWrap_withLoadAssets = withLoadAssets(lazy_wrap_default, flush, "_b");
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html(`<!DOCTYPE html><html><head><title>Revisit</title>${_flush_head()}</head><body>`);
	$LazyWrap_withLoadAssets({});
	resume_root_default({ as: "section" });
	_trailers("</body></html>");
}, 1);

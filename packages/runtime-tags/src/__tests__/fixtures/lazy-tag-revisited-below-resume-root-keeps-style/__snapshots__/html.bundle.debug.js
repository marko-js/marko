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

// tags/resume-root.marko
var resume_root_default = _template("__tests__/tags/resume-root.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_as = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.as, {}, _content_resume("__tests__/tags/resume-root.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		shared_default({});
	}, $scope0_id), 0, $wg__input_as);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/resume-root.marko", 0);
});

// template.marko
const $LazyWrap_withLoadAssets = withLoadAssets(lazy_wrap_default, flush, "ready:__tests__/tags/lazy-wrap.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<!DOCTYPE html><html><head><title>Revisit</title>${_flush_head()}</head><body>`);
	$LazyWrap_withLoadAssets({});
	resume_root_default({ as: "section" });
	_trailers("</body></html>");
}, 1);

// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span class=child>${_text_resume($scope0_id, "a", input.value, $wg__input_value)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// layout.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var layout_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html(`<!DOCTYPE html><html><head><title>T</title>${_flush_head()}</head><body>`);
	$Child_withLoadAssets({ value: 1 });
	_trailers("</body></html>");
}, 1);

// template.marko
var template_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		_scope_id();
		layout_default({});
	}, void 0, (e) => {
		_scope_reason();
		_scope_id();
		_html("caught");
	}, void 0, "c0");
}, 1);

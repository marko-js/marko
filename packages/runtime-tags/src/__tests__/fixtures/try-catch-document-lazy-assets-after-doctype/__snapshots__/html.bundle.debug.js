// child.css
var child_default$1 = ".child {\n  color: green;\n}\n";

// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span class=child>${_text_resume($scope0_id, "#text/0", input.value, $wg__input_value)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/child.marko", 0);
});

// layout.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var layout_default = _template("__tests__/layout.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<!DOCTYPE html><html><head><title>T</title>${_flush_head()}</head><body>`);
	$Child_withLoadAssets({ value: 1 });
	_trailers("</body></html>");
}, 1);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		layout_default({});
	}, void 0, (e) => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("caught");
	}, void 0, "__tests__/template.marko_2*content");
}, 1);

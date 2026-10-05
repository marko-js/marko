// layout.marko
var layout_default = _template("__tests__/layout.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<!DOCTYPE html><html><head><title>Layout</title>${_flush_head()}</head><body>`);
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
	_trailers("</body></html>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/layout.marko", 0);
}, 1);

// template.marko
const $Layout_withLoadAssets = withLoadAssets(layout_default, flush, "ready:__tests__/layout.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0), $wi__input_value = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_value__closures = new Set();
	$Layout_withLoadAssets({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.value, $wg__input_value)}</p>`);
		$wi__input_value && _subscribe($input_value__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), "__tests__/template.marko_1_input_value#0:4/subscribe", $wg__input_value);
		$wg__input_value || $wi__input_value && _resume_branch($scope1_id);
	}, $scope0_id) });
	$wi__input_value && _scope($scope0_id, { "ClosureScopes:input_value/5": $input_value__closures }, "__tests__/template.marko", 0);
}, 1);

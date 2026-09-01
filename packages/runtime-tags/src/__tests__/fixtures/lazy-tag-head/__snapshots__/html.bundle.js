// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.value, _serialize_guard($scope0_reason, 0))}</span>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<!DOCTYPE html><html><head><title>Head Flush Test</title>${_flush_head()}</head><body>`);
	_set_serialize_reason(_serialize_guard($scope0_reason, 0));
	const $childScope = _peek_scope_id();
	$Child_withLoadAssets({ value: input.value });
	_trailers("</body></html>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);

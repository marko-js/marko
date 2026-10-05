// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content);
	_html("</section>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "_a");
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0), $wi__input_value = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_value__closures = /* @__PURE__ */ new Set();
	$Child_withLoadAssets({ content: _content("b1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<div>${_text_resume($scope1_id, "a", input.value, $wg__input_value)}</div>`);
		$wi__input_value && _subscribe($input_value__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b0", $wg__input_value);
		$wg__input_value || $wi__input_value && _resume_branch($scope1_id);
	}, $scope0_id) });
	$wi__input_value && _scope($scope0_id, { f: $input_value__closures });
}, 1);

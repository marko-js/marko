// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", input.label, _write_guard($scope0_reason, 0))}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { g: count });
});

// template.marko
function boom(error) {
	throw error;
}
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0), $wg__input_error = _write_guard($scope0_reason, 1), $wi__input_error = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_error__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "a", input.error ? boom(input.error) : "ok", $wg__input_error)}</p>`);
		$wi__input_error && _subscribe($input_error__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), "b1", $wg__input_error);
		$wg__input_error || $wi__input_error && _resume_branch($scope2_id);
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason(), $wg__err_message = _write_guard($scope1_reason, 0);
		const $scope1_id = _scope_id();
		_html(`<b>${_text_resume($scope1_id, "a", err.message, $wg__err_message)}</b>`);
		_set_scope_reason($wg__input_label << 1);
		const $childScope = _peek_scope_id();
		$Child_withLoadAssets({ label: input.label });
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			c: $wi__input_label && _existing_scope($childScope)
		}), "b0", $wg__input_label || $wg__err_message);
		$wg__input_label || $wg__err_message || _resume_branch($scope1_id);
	}, void 0, "b2");
	_scope($scope0_id, {
		d: input.label,
		f: $wi__input_label && $input_label__closures,
		g: $wi__input_error && $input_error__closures
	});
}, 1);

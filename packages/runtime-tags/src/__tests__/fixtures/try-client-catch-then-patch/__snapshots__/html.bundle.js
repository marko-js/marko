// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_message = _write_guard($scope0_reason, 0), $wi__input_message = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_message__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<em>${_text_resume($scope2_id, "a", input.message, $wg__input_message)}${_text_resume($scope2_id, "b", "", 2)}</em>`);
		_subscribe($count__closures, _subscribe($wi__input_message && $input_message__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Ch: $wi__input_message && 1
		}), "a1"), "a2");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason(), $wg__err_message = _write_guard($scope1_reason, 0);
		const $scope1_id = _scope_id();
		_html(`<b>${_text_resume($scope1_id, "a", err.message, $wg__err_message)} ${_text_resume($scope1_id, "b", input.message, $wg__input_message * 2)}</b>`);
		_subscribe($wi__input_message && $input_message__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $wg__input_message || $wg__err_message);
		$wg__input_message || $wg__err_message || _resume_branch($scope1_id);
	}, void 0, "a3");
	_html(`<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		f: input.message,
		g: count,
		h: $wi__input_message && $input_message__closures,
		i: $count__closures
	});
}, 1);

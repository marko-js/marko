// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0), $wi__input_value = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_value__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.value, (value) => {
			const $scope4_id = _scope_id();
			_html(`Got: ${_text_resume($scope4_id, "a", value, $wg__input_value * 2)}`);
			$wi__input_value && _scope($scope4_id, {});
		}, $wg__input_value);
		$wi__input_value && _subscribe($input_value__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", 0);
		$wi__input_value && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("Loading...");
	}, (err) => {
		const $scope2_reason = _scope_reason(), $wg__err_message = _write_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`Error: ${_text_resume($scope2_id, "a", err.message, $wg__err_message * 2)}`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, "a1", "a2");
	$wi__input_value && _scope($scope0_id, { e: $input_value__closures });
}, 1);

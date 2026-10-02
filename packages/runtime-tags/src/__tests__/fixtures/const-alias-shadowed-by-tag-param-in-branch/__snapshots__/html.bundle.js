// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0), $wi__input_value = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $value__closures = /* @__PURE__ */ new Set();
	const value = input.value;
	{
		const $scope1_id = _scope_id();
		forOf([1], (input) => {
			const $scope2_id = _scope_id();
			_html(`<span>${_text_resume($scope2_id, "a", value, $wg__input_value)}${_escape(input)}</span>`);
			$wi__input_value && _subscribe($value__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_value);
		});
		$wi__input_value && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}
	$wi__input_value && _scope($scope0_id, { e: $value__closures });
}, 1);

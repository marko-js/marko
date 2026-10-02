// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0), $wi__input_value = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $value__closures = new Set();
	const value = input.value;
	if (true) {
		const $scope1_id = _scope_id();
		forOf([1], (input) => {
			const $scope2_id = _scope_id();
			_html(`<span>${_text_resume($scope2_id, "#text/0", value, $wg__input_value)}${_escape(input)}</span>`);
			$wi__input_value && _subscribe($value__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "1:35"), "__tests__/template.marko_2_value#0:3/subscribe", $wg__input_value);
		});
		$wi__input_value && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2");
	}
	$wi__input_value && _scope($scope0_id, { "ClosureScopes:value/4": $value__closures }, "__tests__/template.marko", 0);
}, 1);

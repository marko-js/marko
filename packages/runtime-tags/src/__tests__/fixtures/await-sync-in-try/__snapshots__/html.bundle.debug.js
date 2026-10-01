// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0), $wi__input_value = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_value__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.value, (value) => {
			const $scope4_id = _scope_id();
			_html(`Got: ${_text_resume($scope4_id, "#text/0", value, $wg__input_value * 2)}`);
			$wi__input_value && _scope($scope4_id, {}, "__tests__/template.marko", "2:4");
		}, $wg__input_value);
		$wi__input_value && _subscribe($input_value__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), "__tests__/template.marko_1_input_value#0:3/subscribe", 0);
		$wi__input_value && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("Loading...");
	}, (err) => {
		const $scope2_reason = _scope_reason(), $wg__err_message = _write_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`Error: ${_text_resume($scope2_id, "#text/0", err.message, $wg__err_message * 2)}`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "5:4");
	}, "__tests__/template.marko_3*content", "__tests__/template.marko_2*content");
	$wi__input_value && _scope($scope0_id, { "ClosureScopes:input_value/4": $input_value__closures }, "__tests__/template.marko", 0);
}, 1);

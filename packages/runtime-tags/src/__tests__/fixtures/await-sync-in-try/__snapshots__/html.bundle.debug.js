// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0), $si__input_value = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_value__closures = new Set();
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", input.value, (value) => {
			const $scope4_id = _scope_id();
			_html(`Got: ${_sep($sg__input_value)}${_escape(value)}${_el_resume($scope4_id, "#text/0", $sg__input_value)}`);
			$si__input_value && writeScope($scope4_id, {}, "__tests__/template.marko", "2:4");
		}, $sg__input_value);
		$si__input_value && _subscribe($input_value__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"));
		_resume_branch($scope1_id);
	}, $scope0_id), {
		catch: attrTag({ content: _content_resume("__tests__/template.marko_2_content", (err) => {
			const $scope2_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope2_reason, 0);
			const $scope2_id = _scope_id();
			_html(`Error: ${_sep($sg__err_message)}${_escape(err.message)}${_el_resume($scope2_id, "#text/0", $sg__err_message)}`);
			_serialize_if($scope2_reason, 0) && writeScope($scope2_id, {}, "__tests__/template.marko", "5:4");
		}, $scope0_id) }),
		placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3_content", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html("Loading...");
		}, $scope0_id) })
	});
	$si__input_value && writeScope($scope0_id, { "ClosureScopes:input_value": $input_value__closures }, "__tests__/template.marko", 0);
}, 1);

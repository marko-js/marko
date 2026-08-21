// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a = _serialize_guard($scope0_reason, 1), $si__input_a = _serialize_if($scope0_reason, 1), $sg__input_b = _serialize_guard($scope0_reason, 2), $si__input_b = _serialize_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	const $input_b__closures = new Set();
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", input.a, (v) => {
			const $scope4_id = _scope_id();
			_html(`<p>A:${_sep($sg__input_a)}${_escape((console.log("body-ran:a", v), v))}${_el_resume($scope4_id, "#text/0", $sg__input_a)}</p>`);
			$si__input_a && writeScope($scope4_id, {}, "__tests__/template.marko", "2:4");
		}, $sg__input_a);
		$si__input_a && _subscribe($input_a__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"));
		_resume_branch($scope1_id);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_3*content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("caught-a");
	}, $scope0_id) }) });
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_await($scope2_id, "#text/0", input.b, (v) => {
			const $scope6_id = _scope_id();
			_html(`<p>B:${_sep($sg__input_b)}${_escape((console.log("body-ran:b", v), v))}${_el_resume($scope6_id, "#text/0", $sg__input_b)}</p>`);
			$si__input_b && writeScope($scope6_id, {}, "__tests__/template.marko", "8:4");
		}, $sg__input_b);
		$si__input_b && _subscribe($input_b__closures, writeScope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:2"));
		_resume_branch($scope2_id);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_5*content", () => {
		_scope_reason();
		const $scope5_id = _scope_id();
		_html("caught-b");
	}, $scope0_id) }) });
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {
		"ClosureScopes:input_a": $si__input_a && $input_a__closures,
		"ClosureScopes:input_b": $si__input_b && $input_b__closures
	}, "__tests__/template.marko", 0);
}, 1);

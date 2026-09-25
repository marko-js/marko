// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", resolveAfter(input.value), (value) => {
		const $scope1_id = _scope_id();
		_html(_text_resume($scope1_id, "#text/0", value, $sg__input_value));
		_serialize_if($scope0_reason, 0) && _scope($scope1_id, {}, "__tests__/tags/child.marko", "3:2");
	}, $sg__input_value);
});

// tags/boundary.marko
var boundary_default = _template("__tests__/tags/boundary.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0), $si__input_value = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_value__closures = new Set();
	_try($scope0_id, "#text/0", _content_resume("__tests__/tags/boundary.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", resolveAfter(input.value), (value) => {
			const $scope3_id = _scope_id();
			_html(_text_resume($scope3_id, "#text/0", value, $sg__input_value));
			$si__input_value && _scope($scope3_id, {}, "__tests__/tags/boundary.marko", "4:4");
		}, $sg__input_value);
		$si__input_value && _subscribe($input_value__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/boundary.marko", "3:2"), "__tests__/tags/boundary.marko_1_input_value#3/subscribe", 0);
		$si__input_value && _resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/tags/boundary.marko_2*content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading inner");
	}, $scope0_id) }) });
	$si__input_value && _scope($scope0_id, { "ClosureScopes:input_value": $input_value__closures }, "__tests__/tags/boundary.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_set_serialize_reason(2);
		const $childScope = _peek_scope_id();
		child_default({ value: count });
		_subscribe($count__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "3:2"), "__tests__/template.marko_1_count#4/subscribe");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3*content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("loading changing");
	}, $scope0_id) }) });
	_try($scope0_id, "#text/2", _content_resume("__tests__/template.marko_4*content", () => {
		const $scope4_id = _scope_id();
		_scope_reason();
		child_default({ value: "static" });
	}, $scope0_id), { placeholder: attrTag({ content: _content("__tests__/template.marko_5*content", () => {
		_scope_reason();
		const $scope5_id = _scope_id();
		_html("loading static");
	}, $scope0_id) }) }, 0);
	_try($scope0_id, "#text/3", _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_set_serialize_reason(2);
		const $childScope2 = _peek_scope_id();
		boundary_default({ value: count });
		_subscribe($count__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope2),
			"ClosureSignalIndex:count": 1
		}, "__tests__/template.marko", "11:2"), "__tests__/template.marko_2_count#4/subscribe");
	}, $scope0_id), { placeholder: attrTag({ content: _content("__tests__/template.marko_6*content", () => {
		_scope_reason();
		const $scope6_id = _scope_id();
		_html("loading outer");
	}, $scope0_id) }) }, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);

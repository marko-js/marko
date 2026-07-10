// tags/provider.marko
var provider_default = _template("__tests__/tags/provider.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0), $si__input_value = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $value__closures = new Set();
	const { value } = input;
	const content = { content: _content_resume("__tests__/tags/provider.marko_1_content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<span>v:${_sep($sg__input_value)}${_escape(value)}${_el_resume($scope1_id, "#text/0", $sg__input_value)}</span>`);
		_subscribe($si__input_value && $value__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/provider.marko", "2:2"));
		_resume_branch($scope1_id);
	}, $scope0_id) };
	const $return = content;
	writeScope($scope0_id, {
		value,
		"ClosureScopes:value": $si__input_value && $value__closures
	}, "__tests__/tags/provider.marko", 0, { value: "1:10" });
	return $return;
});

// tags/provider2.marko
var provider2_default = _template("__tests__/tags/provider2.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0), $si__input_value = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $value__closures = new Set();
	const { value } = input;
	const content = { content: _content_resume("__tests__/tags/provider2.marko_1_content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<span>v:${_sep($sg__input_value)}${_escape(value)}${_el_resume($scope1_id, "#text/0", $sg__input_value)}</span>`);
		_subscribe($si__input_value && $value__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/provider2.marko", "2:2"));
		_resume_branch($scope1_id);
	}, $scope0_id) };
	const $return = content;
	writeScope($scope0_id, {
		value,
		"ClosureScopes:value": $si__input_value && $value__closures
	}, "__tests__/tags/provider2.marko", 0, { value: "1:10" });
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let flag = true;
	let a = 1;
	let b = 10;
	let one = provider_default({ value: a });
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	let two = provider2_default({ value: b });
	_var($scope0_id, "#scopeOffset/3", $childScope, "__tests__/template.marko_0_two/var");
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/4", flag ? one : two, {});
	_html(`</div><button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/5")}<button id=inc-b>b++</button>${_el_resume($scope0_id, "#button/6")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		flag,
		b,
		one,
		two,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		flag: "1:6",
		b: "3:6",
		one: "4:11",
		two: "5:12"
	});
	_resume_branch($scope0_id);
}, 1);

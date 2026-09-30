// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", input.value, (value) => {
		const $scope1_id = _scope_id();
		_html(_text_resume($scope1_id, "#text/0", value, $sg__input_value));
		_serialize_if($scope0_reason, 0) && _scope($scope1_id, {}, "__tests__/tags/child.marko", "1:2");
	}, $sg__input_value);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $value__closures = new Set();
	let value = "idle";
	_html(`<button id=first>first</button>${_el_resume($scope0_id, "#button/0")}<button id=third>third</button>${_el_resume($scope0_id, "#button/1")}`);
	_try($scope0_id, "#text/2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_set_serialize_reason(2);
		const $childScope = _peek_scope_id();
		child_default({ value });
		_subscribe($value__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "11:2"), "__tests__/template.marko_1_value#0:3/subscribe");
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("LOADING");
	}, void 0, "__tests__/template.marko_2*content");
	_script($scope0_id, "__tests__/template.marko_0_value#3");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		value,
		"ClosureScopes:value/4": $value__closures
	}, "__tests__/template.marko", 0, { value: "2:6" });
}, 1);

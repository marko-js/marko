// tags/child/index.marko
var child_default = _template("__tests__/tags/child/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_foo = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "#text/0", input.foo, $sg__input_foo)}</em>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_foo = _serialize_guard($scope0_reason, 2), $si__input_foo = _serialize_if($scope0_reason, 2), $si__input_tag__OR__input_foo = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_foo__closures = new Set();
	let tag = "div";
	_dynamic_tag($scope0_id, "#text/0", input.tag, {}, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_set_serialize_reason($sg__input_foo << 1);
		const $childScope = _peek_scope_id();
		child_default({ foo: input.foo });
		$si__input_tag__OR__input_foo && _subscribe($si__input_foo && $input_foo__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": $si__input_foo && _existing_scope($childScope)
		}, "__tests__/template.marko", "2:4"));
		$sg__input_foo || $si__input_tag__OR__input_foo && _resume_branch($scope1_id);
	}, $scope0_id), 0, _serialize_guard($scope0_reason, 1));
	_dynamic_tag($scope0_id, "#text/1", tag, {}, _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_set_serialize_reason($sg__input_foo << 1);
		const $childScope2 = _peek_scope_id();
		child_default({ foo: input.foo });
		_subscribe($si__input_foo && $input_foo__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": $si__input_foo && _existing_scope($childScope2),
			"ClosureSignalIndex:input_foo": $si__input_foo && 1
		}, "__tests__/template.marko", "3:4"));
		$sg__input_foo || _resume_branch($scope2_id);
	}, $scope0_id));
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_foo: input.foo,
		tag,
		"ClosureScopes:input_foo": $si__input_foo && $input_foo__closures
	}, "__tests__/template.marko", 0, {
		input_foo: ["input.foo"],
		tag: "1:6"
	});
}, 1);

// tags/ui-field.marko
var ui_field_default = _template("__tests__/tags/ui-field.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, [{ d: input.description }], 0, 1, _serialize_guard($scope0_reason, 0));
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {
		input_content: _serialize_if($scope0_reason, 2) && input.content,
		input_description: _serialize_if($scope0_reason, 1) && input.description
	}, "__tests__/tags/ui-field.marko", 0, {
		input_content: ["input.content"],
		input_description: ["input.description"]
	});
});

// tags/ui-select.marko
var ui_select_default = _template("__tests__/tags/ui-select.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_option = _serialize_guard($scope0_reason, 0), $si__input_option = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_option__closures = new Set();
	ui_field_default({
		description: "d",
		content: _content("__tests__/tags/ui-select.marko_1*content", (c) => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_for_of(input.option, (o) => {
				const $scope2_id = _scope_id();
				_html(`<span${_attrs(c, "#span/0", $scope2_id, "span")}>`);
				_dynamic_tag($scope2_id, "#text/1", o.content, {}, 0, 0, $sg__input_option);
				_html(`</span>${_el_resume($scope2_id, "#span/0")}`);
				_script($scope2_id, "__tests__/tags/ui-select.marko_2_c#2");
				_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/ui-select.marko", "2:4", { "EventAttributes:#span/0": ["...c", "3:14"] });
			}, 0, $scope1_id, "#text/0", _serialize_guard($scope0_reason, 0) || _serialize_guard($scope1_reason, 0), $sg__input_option, $sg__input_option, 0, 1);
			_subscribe($si__input_option && $input_option__closures, _scope($scope1_id, { _: $si__input_option && _scope_with_id($scope0_id) }, "__tests__/tags/ui-select.marko", "1:2"));
			_resume_branch($scope1_id);
		}, $scope0_id)
	});
	$si__input_option && _scope($scope0_id, { "ClosureScopes:input_option": $input_option__closures }, "__tests__/tags/ui-select.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	ui_select_default({ option: attrTag({
		value: "a",
		content: _content("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html("A");
		}, $scope0_id)
	}) });
}, 1);

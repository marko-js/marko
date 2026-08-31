// tags/ui-field.marko
var ui_field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, [{ d: input.description }], 0, 1, _serialize_guard($scope0_reason, 0));
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {
		d: _serialize_if($scope0_reason, 2) && input.content,
		e: _serialize_if($scope0_reason, 1) && input.description
	});
});

// tags/ui-select.marko
var ui_select_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_option = _serialize_guard($scope0_reason, 0), $si__input_option = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_option__closures = /* @__PURE__ */ new Set();
	ui_field_default({
		description: "d",
		content: _content("c1", (c) => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_for_of(input.option, (o) => {
				const $scope2_id = _scope_id();
				_html(`<span${_attrs(c, "a", $scope2_id, "span")}>`);
				_dynamic_tag($scope2_id, "b", o.content, {}, 0, 0, $sg__input_option);
				_html(`</span>${_el_resume($scope2_id, "a")}`);
				_script($scope2_id, "c0");
				_scope($scope2_id, { _: _scope_with_id($scope1_id) });
			}, 0, $scope1_id, "a", _serialize_guard($scope0_reason, 0) || _serialize_guard($scope1_reason, 0), $sg__input_option, $sg__input_option, 0, 1);
			_subscribe($si__input_option && $input_option__closures, _scope($scope1_id, { _: $si__input_option && _scope_with_id($scope0_id) }));
			_resume_branch($scope1_id);
		}, $scope0_id)
	});
	$si__input_option && _scope($scope0_id, { e: $input_option__closures });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	ui_select_default({ option: attrTag({
		value: "a",
		onSelect: function() {},
		content: _content("a0", () => {
			_scope_reason();
			_scope_id();
			_html("A");
		}, _scope_id())
	}) });
}, 1);

// tags/ui-field.marko
var ui_field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_description = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, [{ d: input.description }], 0, 1, $wg__input_content__OR__input_description);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.content,
		e: _write_if($scope0_reason, 1) && input.description
	});
});

// tags/ui-select.marko
var ui_select_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_option = _write_guard($scope0_reason, 0), $wi__input_option = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_option__closures = /* @__PURE__ */ new Set();
	ui_field_default({
		description: "d",
		content: _content("c2", (c) => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_for_of(input.option, (o) => {
				const $scope2_id = _scope_id();
				_html(`<span${_attrs(c, "a", $scope2_id, "span")}>`);
				_dynamic_tag($scope2_id, "b", o.content, {}, 0, 0, $wg__input_option);
				_html(`</span>${_el_resume($scope2_id, "a")}`);
				_script($scope2_id, "c0");
				_scope($scope2_id, { _: _write_if($scope1_reason, 0) && _scope_with_id($scope1_id) });
			}, 0, $scope1_id, "a", $wg__input_option || _write_guard($scope1_reason, 0), $wg__input_option, 0, 0, 1);
			$wi__input_option && _subscribe($input_option__closures, _scope($scope1_id, {
				c,
				_: _scope_with_id($scope0_id)
			}), "c1", $wg__input_option);
			$wg__input_option || $wi__input_option && _resume_branch($scope1_id);
		}, $scope0_id)
	});
	$wi__input_option && _scope($scope0_id, { e: $input_option__closures });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	ui_select_default({ option: attrTag({
		value: "a",
		content: _content("a0", () => {
			_scope_reason();
			_scope_id();
			_html("A");
		}, $scope0_id)
	}) });
}, 1);

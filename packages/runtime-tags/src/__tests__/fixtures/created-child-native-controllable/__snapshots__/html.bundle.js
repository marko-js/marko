// tags/field.marko
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "a", input.value, input.valueChange)}>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 1) && input.value,
		e: _write_if($scope0_reason, 0) && input.valueChange
	});
});

// tags/page-b.marko
var page_b_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let text = "a";
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	field_default({
		value: text,
		valueChange: _resume((_new_text) => {
			text = _new_text;
		}, "c0", $scope0_id)
	});
	_html(`<output>${_text_resume($scope0_id, "b", text)}</output>`);
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			page_b_default({});
			$wi__input_show && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", $wg__input_show, $wg__input_show);
	$wi__input_show && _scope($scope0_id, {});
}, 1);

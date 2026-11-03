// tags/field.marko
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "#input/0", input.value, input.valueChange)}>${_el_resume($scope0_id, "#input/0")}`);
	_script($scope0_id, "__tests__/tags/field.marko_0");
	_scope($scope0_id, {
		input_value: _write_if($scope0_reason, 1) && input.value,
		input_valueChange: _write_if($scope0_reason, 0) && input.valueChange
	}, "__tests__/tags/field.marko", 0, {
		input_value: ["input.value"],
		input_valueChange: ["input.valueChange"],
		"ControlledHandler:#input/0": ["valueChange", "1:26"]
	});
});

// tags/page-b.marko
var page_b_default = _template("__tests__/tags/page-b.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let text = "a";
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	field_default({
		value: text,
		valueChange: _resume((_new_text) => {
			text = _new_text;
		}, "__tests__/tags/page-b.marko_0/valueChange", $scope0_id)
	});
	_html(`<output>${_text_resume($scope0_id, "#text/1", text)}</output>`);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/page-b.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			page_b_default({});
			$wi__input_show && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_show, $wg__input_show);
	$wi__input_show && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);

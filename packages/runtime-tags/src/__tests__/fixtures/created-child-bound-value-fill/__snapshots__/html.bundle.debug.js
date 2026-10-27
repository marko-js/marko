// tags/text-area.marko
var text_area_default = _template("__tests__/tags/text-area.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<textarea>${_attr_textarea_value($scope0_id, "#textarea/0", input.value, input.valueChange)}</textarea>${_el_resume($scope0_id, "#textarea/0")}`);
	_script($scope0_id, "__tests__/tags/text-area.marko_0");
	_scope($scope0_id, {
		input_value: _write_if($scope0_reason, 1) && input.value,
		input_valueChange: _write_if($scope0_reason, 0) && input.valueChange
	}, "__tests__/tags/text-area.marko", 0, {
		input_value: ["input.value"],
		input_valueChange: ["input.valueChange"],
		"ControlledHandler:#textarea/0": ["valueChange"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let text = "";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id();
			text_area_default({
				value: text,
				valueChange: _resume((_new_text) => {
					text = _new_text;
				}, "__tests__/template.marko_1/valueChange", $scope1_id)
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), 0, 0, 1);
	_html(`<p>${_text_resume($scope0_id, "#text/1", text)}</p>`);
	_scope($scope0_id, { text: _write_if($scope0_reason, 0) && text }, "__tests__/template.marko", 0, { text: "1:6" });
}, 1);

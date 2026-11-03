// tags/text-area.marko
var text_area_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<textarea>${_attr_textarea_value($scope0_id, "a", input.value, input.valueChange)}</textarea>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 1) && input.value,
		e: _write_if($scope0_reason, 0) && input.valueChange
	});
});

// template.marko
var template_default = _template("a", (input) => {
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
				}, "a0", $scope1_id)
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 0, 0, 1);
	_html(`<p>${_text_resume($scope0_id, "b", text)}</p>`);
	_scope($scope0_id, { f: _write_if($scope0_reason, 0) && text });
}, 1);

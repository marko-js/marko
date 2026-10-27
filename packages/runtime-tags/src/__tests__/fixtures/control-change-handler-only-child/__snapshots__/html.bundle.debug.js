// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<p>${_text_resume($scope0_id, "#text/0", input.label, _write_guard($scope0_reason, 0))}</p><input${_attr_input_value($scope0_id, "#input/1", void 0, _resume(function(v) {
		count += v.length;
	}, "__tests__/tags/child.marko_0/valueChange", $scope0_id))}>${_el_resume($scope0_id, "#input/1")}<span>${_text_resume($scope0_id, "#text/2", count)}</span>`);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_scope($scope0_id, { count }, "__tests__/tags/child.marko", 0, {
		count: "1:6",
		"ControlledHandler:#input/1": ["valueChange", "3:8"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_label << 1);
	const $childScope = _peek_scope_id();
	child_default({ label: input.label });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);

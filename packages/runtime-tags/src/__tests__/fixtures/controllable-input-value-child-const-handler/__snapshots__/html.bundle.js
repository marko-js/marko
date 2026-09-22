// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "a", input.value, input.valueChange)}>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		d: _serialize_if($scope0_reason, 1) && input.value,
		e: _serialize_if($scope0_reason, 0) && input.valueChange
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let out = "-";
	child_default({
		value: "a",
		valueChange: _resume((next) => {
			out = next;
		}, "a0", $scope0_id)
	});
	_html(`<p id=out>${_text_resume($scope0_id, "b", out)}</p>`);
	_scope($scope0_id, {});
}, 1);

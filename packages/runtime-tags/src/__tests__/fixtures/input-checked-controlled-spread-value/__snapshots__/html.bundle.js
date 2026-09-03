// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let checked = false;
	_html(`<input${_attrs({
		type: "radio",
		checked,
		checkedChange: _resume((_new_checked) => {
			checked = _new_checked;
		}, "a0", $scope0_id),
		value: "x",
		...input.rest
	}, "a", $scope0_id, "input")}>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		d: input.rest,
		e: checked
	});
}, 1);

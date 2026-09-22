// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let out = "-";
	_html(`<input${_attr_input_value($scope0_id, "a", "a", _resume((next) => {
		out = next;
	}, "a0", $scope0_id))}>${_el_resume($scope0_id, "a")}<p id=out>${_text_resume($scope0_id, "b", out)}</p>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {});
}, 1);

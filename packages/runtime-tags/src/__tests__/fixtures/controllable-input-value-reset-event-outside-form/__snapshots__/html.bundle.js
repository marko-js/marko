// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = "init";
	_html(`<input${_attr_input_value($scope0_id, "a", v, _resume((_new_v) => {
		v = _new_v;
	}, "a0", $scope0_id))}>${_el_resume($scope0_id, "a")}<div class=custom></div><p>${_text_resume($scope0_id, "b", v)}</p>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {});
}, 1);

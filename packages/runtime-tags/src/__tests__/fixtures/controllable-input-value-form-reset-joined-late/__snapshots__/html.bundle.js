// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let visible = false;
	let v = "init";
	_html(`<button class=show></button>${_el_resume($scope0_id, "a")}<form>`);
	_show_start(visible);
	_html(`<input${_attr_input_value($scope0_id, "c", v, _resume((_new_v) => {
		v = _new_v;
	}, "a0", $scope0_id))}>${_el_resume($scope0_id, "c")}`);
	_show_end($scope0_id, "d", visible, 1, 1, 0, 1);
	_html(`<button type=reset class=reset></button></form><p>${_text_resume($scope0_id, "e", v)}</p>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {});
}, 1);

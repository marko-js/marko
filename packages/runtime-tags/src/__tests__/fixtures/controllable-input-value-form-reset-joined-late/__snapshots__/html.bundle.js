// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let visible = false;
	let v = "init";
	_html(`<button class=show></button>${_el_mark($scope0_id, "a")}<form>`);
	_show_start(visible, 0);
	_html(`<input${_attr_input_value($scope0_id, "b", v, _resume((_new_v) => v = _new_v, "a0", $scope0_id))}>${_el_mark($scope0_id, "b")}`);
	_show_end($scope0_id, "c", visible, 1, 0, 0, 1);
	_html(`<button type=reset class=reset></button></form><p>${_text_mark($scope0_id, "d", v)}</p>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {});
}, 1);

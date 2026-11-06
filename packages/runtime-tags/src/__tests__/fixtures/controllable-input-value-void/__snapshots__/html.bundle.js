// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = void 0;
	_html(`<input${_attr_input_value($scope0_id, "a", v, void 0)} type=hidden>${_el_mark($scope0_id, "a")}<input${_attr_input_value($scope0_id, "b", v, void 0)} type=hidden>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);

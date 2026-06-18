// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "";
	const placeholder = { value: "" };
	_attr_select_value($scope0_id, "a", value, _resume(function(v) {
		value = v;
	}, "a0", $scope0_id), () => {
		_html(`<select><option${_attrs(placeholder, "b", $scope0_id, "option")}>-- choose --</option>${_el_resume($scope0_id, "b")}<option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option></select>`);
	});
	_html(`${_el_resume($scope0_id, "a")}<output>${_escape(value === void 0 ? "undefined" : "value=" + value)}${_el_resume($scope0_id, "c")}</output>`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);

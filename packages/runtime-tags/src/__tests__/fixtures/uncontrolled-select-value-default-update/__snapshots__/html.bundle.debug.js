// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "a";
	_attr_select_value($scope0_id, "#select/0", "a", void 0, () => {
		_html(`<select><option></option><option${_attr_option_value("a")}></option></select>`);
	});
	_attr_select_value($scope0_id, "#select/1", "a", void 0, () => {
		_html(`<select><option></option><option${_attr_option_value("b")}></option></select>`);
	});
	_attr_select_value($scope0_id, "#select/2", value, void 0, () => {
		_html(`<select><option></option><option${_attr_option_value("b")}></option></select>`);
	});
	_attr_select_value($scope0_id, "#select/3", value, undefined, () => {
		_html(`${_el_resume($scope0_id, "#select/2")}<select><option></option><option${_attr_option_value("b")}></option></select>`);
	});
	_html(`${_el_resume($scope0_id, "#select/3")}<button>Update</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);

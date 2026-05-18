// template.marko
const initialValue = ["a"];
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = initialValue;
	_attr_select_value($scope0_id, "a", initialValue, void 0, () => {
		_html(`<select multiple><option></option><option${_attr_option_value("a")}></option></select>`);
	});
	_attr_select_value($scope0_id, "b", initialValue, void 0, () => {
		_html(`<select multiple><option></option><option${_attr_option_value("b")}></option></select>`);
	});
	_attr_select_value($scope0_id, "c", value, void 0, () => {
		_html(`<select multiple><option></option><option${_attr_option_value("b")}></option></select>`);
	});
	_attr_select_value($scope0_id, "d", value, void 0, () => {
		_html(`${_el_resume($scope0_id, "c")}<select multiple><option></option><option${_attr_option_value("b")}></option></select>`);
	});
	_html(`${_el_resume($scope0_id, "d")}<button>Update</button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);

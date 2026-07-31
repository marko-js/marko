// template.marko
const initialValue = ["a"];
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = initialValue;
	_attr_select_value($scope0_id, "#select/0", initialValue, void 0, () => {
		_html_opens("__tests__/template.marko:4:1", "__tests__/template.marko:5:3", "__tests__/template.marko:6:3"), _html(`<select multiple><option${_attr_option_value("")}></option><option${_attr_option_value("a")}></option></select>`);
	});
	_attr_select_value($scope0_id, "#select/1", initialValue, void 0, () => {
		_html_opens("__tests__/template.marko:9:1", "__tests__/template.marko:10:3", "__tests__/template.marko:11:3"), _html(`<select multiple><option${_attr_option_value("")}></option><option${_attr_option_value("b")}></option></select>`);
	});
	_attr_select_value($scope0_id, "#select/2", value, void 0, () => {
		_html_opens("__tests__/template.marko:14:1", "__tests__/template.marko:15:3", "__tests__/template.marko:16:3"), _html(`<select multiple><option${_attr_option_value("")}></option><option${_attr_option_value("b")}></option></select>`);
	});
	_html(_el_resume($scope0_id, "#select/2"));
	_attr_select_value($scope0_id, "#select/3", value, undefined, () => {
		_html_opens("__tests__/template.marko:19:1", "__tests__/template.marko:20:3", "__tests__/template.marko:21:3"), _html(`<select multiple><option${_attr_option_value("")}></option><option${_attr_option_value("b")}></option></select>`);
	});
	_html_opens("__tests__/template.marko:24:1"), _html(`${_el_resume($scope0_id, "#select/3")}<button>Update</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);

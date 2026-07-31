// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "b";
	_html_opens("__tests__/template.marko:2:1", "__tests__/template.marko:3:3", "__tests__/template.marko:4:3"), _html(`<select id=uncontrolled><option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option></select>`);
	_attr_select_value($scope0_id, "#select/0", value, _resume((_new_value) => {
		value = _new_value;
	}, "__tests__/template.marko_0/valueChange", $scope0_id), () => {
		_html_opens("__tests__/template.marko:6:1", "__tests__/template.marko:7:3", "__tests__/template.marko:8:3"), _html(`<select id=controlled><option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option></select>`);
	});
	_html_opens("__tests__/template.marko:10:1"), _html(`${_el_resume($scope0_id, "#select/0")}<div>${_escape(value)}${_el_resume($scope0_id, "#text/1")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);

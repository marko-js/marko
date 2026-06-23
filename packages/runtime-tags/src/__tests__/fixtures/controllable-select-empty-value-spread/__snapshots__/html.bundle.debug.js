// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "";
	const placeholder = { value: "" };
	_attr_select_value($scope0_id, "#select/0", value, _resume(function(v) {
		value = v;
	}, "__tests__/template.marko_0/valueChange", $scope0_id), () => {
		_html(`<select><option${_attrs(placeholder, "#option/1", $scope0_id, "option")}>-- choose --</option>${_el_resume($scope0_id, "#option/1")}<option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option></select>`);
	});
	_html(`${_el_resume($scope0_id, "#select/0")}<output>${value === undefined ? "undefined" : _escape("value=" + value)}${_el_resume($scope0_id, "#text/2")}</output>`);
	_script($scope0_id, "__tests__/template.marko_0_placeholder");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);

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
	_html(`${_el_resume($scope0_id, "#select/0")}<output>${_text_resume($scope0_id, "#text/2", value === undefined ? "undefined" : "value=" + value)}</output>`);
	_script($scope0_id, "__tests__/template.marko_0_placeholder#4");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, {
		"ControlledHandler:#select/0": ["valueChange", "3:21"],
		"EventAttributes:#option/1": ["...placeholder", "4:14"]
	});
}, 1);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = "a";
	let rest = { placeholder: "p" };
	_html(`<button>respread</button>${_el_resume($scope0_id, "#button/0")}<input${_attr_input_value($scope0_id, "#input/1", v, _resume((_new_v) => {
		v = _new_v;
	}, "__tests__/template.marko_0/valueChange", $scope0_id))}${_attrs_partial(rest, {
		value: 1,
		valueChange: 1
	}, "#input/1", $scope0_id, "input")}>${_el_resume($scope0_id, "#input/1")}<div>${_text_resume($scope0_id, "#text/2", v)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0_rest#4");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { rest }, "__tests__/template.marko", 0, {
		rest: "2:6",
		"ControlledHandler:#input/1": ["valueChange"]
	});
}, 1);

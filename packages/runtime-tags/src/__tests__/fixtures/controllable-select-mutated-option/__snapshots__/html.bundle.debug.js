// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let options = [
		1,
		2,
		3
	];
	let value = options[0];
	_html("<form>");
	_attr_select_value($scope0_id, "#select/0", value, _resume((_new_value) => {
		value = _new_value;
	}, "__tests__/template.marko_0/valueChange", $scope0_id), () => {
		_html("<select>");
		_for_of(options, (opt) => {
			const $scope1_id = _scope_id();
			_html(`<option${_attr_option_value(opt)}>${_text_resume($scope1_id, "#text/1", opt)}</option>${_el_resume($scope1_id, "#option/0")}`);
			_scope($scope1_id, {}, "__tests__/template.marko", "5:6");
		}, (v) => v, $scope0_id, "#select/0", 1, 1, 1, "</select>", 1);
	});
	_html(`<button type=reset>reset</button></form><div>${_text_resume($scope0_id, "#text/1", value)}</div><button class=remove>Remove option</button>${_el_resume($scope0_id, "#button/2")}<button class=add>Add option</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { options }, "__tests__/template.marko", 0, {
		options: "1:6",
		"ControlledHandler:#select/0": ["valueChange"]
	});
}, 1);

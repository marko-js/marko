// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let checked = false;
	let name = "x";
	const attrs = { name };
	_html(`<input value=yes${_attrs_partial({
		type: "checkbox",
		...attrs,
		checked
	}, { value: 1 }, "#input/0", $scope0_id, "input")}>${_el_resume($scope0_id, "#input/0")}<button></button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_checked#2_attrs#4");
	_scope($scope0_id, {
		checked,
		attrs
	}, "__tests__/template.marko", 0, {
		checked: "1:6",
		attrs: "3:8",
		"ControlledHandler:#input/0": ["...attrs", "4:27"],
		"EventAttributes:#input/0": ["...attrs", "4:27"]
	});
}, 1);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const attrs = {
		checkedValue: 1,
		checkedChange: _resume(function() {}, "__tests__/template.marko_0/attrs")
	};
	_html(`<input${_attrs({
		type: "checkbox",
		...attrs
	}, "#input/0", $scope0_id, "input")}>${_el_mark($scope0_id, "#input/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_attrs#1");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, {
		"ControlledHandler:#input/0": ["...attrs", "2:27"],
		"EventAttributes:#input/0": ["...attrs", "2:27"]
	});
}, 1);

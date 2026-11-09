// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "hello";
	_html("<input");
	_attrs_content({
		value,
		valueChange: _resume(function(v) {
			value = v;
		}, "__tests__/template.marko_0/valueChange", $scope0_id)
	}, "#input/0", $scope0_id, "input");
	_html(`</input>${_el_mark($scope0_id, "#input/0")}<span>${_text_mark($scope0_id, "#text/1", value)}</span>`);
	_script($scope0_id, "__tests__/template.marko_0_value#2");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, {
		"ControlledHandler:#input/0": ["...{ value, valueChange(v) { value = v } }", "2:16"],
		"EventAttributes:#input/0": ["...{ value, valueChange(v) { value = v } }", "2:16"]
	});
}, 1);

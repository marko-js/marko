// tags/my-input.marko
var my_input_default = _template("__tests__/tags/my-input.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attrs(input, "#input/0", $scope0_id, "input")}>${_el_resume($scope0_id, "#input/0")}`);
	_script($scope0_id, "__tests__/tags/my-input.marko_0_input");
	writeScope($scope0_id, { input }, "__tests__/tags/my-input.marko", 0, { input: 0 });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "hello";
	const $childScope = _peek_scope_id();
	my_input_default({
		type: "text",
		value,
		valueChange: _resume((_new_value) => {
			value = _new_value;
		}, "__tests__/template.marko_0/valueChange", $scope0_id)
	});
	_html(`<span>${_escape(value)}${_el_resume($scope0_id, "#text/1")}</span>`);
	writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);

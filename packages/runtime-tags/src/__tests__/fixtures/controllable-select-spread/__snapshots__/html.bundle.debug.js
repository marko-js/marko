// tags/my-select.marko
var my_select_default = _template("__tests__/tags/my-select.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $select_input = input;
	_html("<select");
	_attr_select_value($scope0_id, "#select/0", $select_input.value, $select_input.valueChange, () => {
		_attrs_content($select_input, "#select/0", $scope0_id, "select");
		_html("</select>");
	});
	_html(_el_resume($scope0_id, "#select/0"));
	_script($scope0_id, "__tests__/tags/my-select.marko_0_input");
	writeScope($scope0_id, {}, "__tests__/tags/my-select.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "b";
	const $childScope = _peek_scope_id();
	my_select_default({
		value,
		valueChange: _resume(function(v) {
			value = v;
		}, "__tests__/template.marko_0/valueChange", $scope0_id),
		content: _content("__tests__/template.marko_1_content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option><option${_attr_option_value("c")}>C</option>`);
		})
	});
	_html(`<span>${_escape(value)}${_el_resume($scope0_id, "#text/1")}</span>`);
	writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);

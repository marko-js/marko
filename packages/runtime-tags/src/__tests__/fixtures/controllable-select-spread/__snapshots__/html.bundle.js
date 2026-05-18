// tags/my-select.marko
var my_select_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $select_input = input;
	_html("<select");
	_attr_select_value($scope0_id, "a", $select_input.value, $select_input.valueChange, () => {
		_attrs_content($select_input, "a", $scope0_id, "select");
		_html("</select>");
	});
	_html(_el_resume($scope0_id, "a"));
	_script($scope0_id, "b0");
	writeScope($scope0_id, { c: input });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "b";
	const $childScope = _peek_scope_id();
	my_select_default({
		value,
		valueChange: _resume(function(v) {
			value = v;
		}, "a0", $scope0_id),
		content: _content_resume("a1", () => {
			_scope_reason();
			_scope_id();
			_html(`<option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option><option${_attr_option_value("c")}>C</option>`);
		}, $scope0_id)
	});
	_html(`<span>${_escape(value)}${_el_resume($scope0_id, "b")}</span>`);
	writeScope($scope0_id, { a: _existing_scope($childScope) });
	_resume_branch($scope0_id);
}, 1);

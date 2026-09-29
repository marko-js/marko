// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $select_input = {
		value: input.value,
		valueChange: input.valueChange,
		...input.attrs
	};
	_attrs_select_value($scope0_id, "a", $select_input, () => {
		_html(`<select${_attrs($select_input, "a", $scope0_id, "select")}><option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option><option${_attr_option_value("c")}>C</option></select>`);
	});
	_html(_el_resume($scope0_id, "a"));
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		d: _serialize_if($scope0_reason, 2) && input.value,
		e: _serialize_if($scope0_reason, 1) && input.valueChange,
		f: _serialize_if($scope0_reason, 0) && input.attrs
	});
}, 1);

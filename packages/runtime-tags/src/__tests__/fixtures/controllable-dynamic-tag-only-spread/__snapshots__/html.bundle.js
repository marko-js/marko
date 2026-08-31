// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "b";
	const tag = "select";
	_dynamic_tag($scope0_id, "a", tag, {
		value,
		valueChange: _resume(function(v) {
			value = v;
		}, "a0", $scope0_id)
	}, _content_resume("a1", () => {
		_scope_id();
		_scope_reason();
		_html(`<option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option><option${_attr_option_value("c")}>C</option>`);
	}, $scope0_id));
	_html(`<output>${_text_resume($scope0_id, "b", value)}</output>`);
	writeScope($scope0_id, { d: tag });
	_resume_branch($scope0_id);
}, 1);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "b";
	const tag = "select";
	_dynamic_tag($scope0_id, "#text/0", tag, {
		value,
		valueChange: _resume(function(v) {
			value = v;
		}, "__tests__/template.marko_0/valueChange", $scope0_id)
	}, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option><option${_attr_option_value("c")}>C</option>`);
	}, $scope0_id));
	_html(`<output>${_text_resume($scope0_id, "#text/1", value)}</output>`);
	_scope($scope0_id, { tag }, "__tests__/template.marko", 0, { tag: "2:8" });
	_resume_branch($scope0_id);
}, 1);

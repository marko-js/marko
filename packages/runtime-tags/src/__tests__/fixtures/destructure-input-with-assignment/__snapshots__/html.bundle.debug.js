// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { valueChange: $valueChange, value, ...rest } = input;
	_html("<div");
	_attrs_content(rest, "#div/0", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0_rest");
	_script($scope0_id, "__tests__/tags/child.marko_0_$valueChange");
	writeScope($scope0_id, { $valueChange }, "__tests__/tags/child.marko", 0, { $valueChange: "3:11" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $value__closures = new Set();
	let value = 1;
	child_default({
		valueChange: _resume((_new_value) => {
			value = _new_value;
		}, "__tests__/template.marko_0/valueChange", $scope0_id),
		content: _content_resume("__tests__/template.marko_1_content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`${_escape(value)}${_el_resume($scope1_id, "#text/0")}`);
			_subscribe($value__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:1"));
			_resume_branch($scope1_id);
		}, $scope0_id)
	});
	writeScope($scope0_id, {
		value,
		"ClosureScopes:value": $value__closures
	}, "__tests__/template.marko", 0, { value: "1:5" });
	_resume_branch($scope0_id);
}, 1);

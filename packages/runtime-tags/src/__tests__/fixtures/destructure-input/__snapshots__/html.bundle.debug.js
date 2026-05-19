// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { content, ...rest } = input;
	_html(`<div${_attrs(rest, "#div/0", $scope0_id, "div")}>`);
	_dynamic_tag($scope0_id, "#text/1", content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_html(`</div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0_rest");
	writeScope($scope0_id, { rest }, "__tests__/tags/child.marko", 0, { rest: "1:22" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const value = 1;
	child_default({ content: _content("__tests__/template.marko_1_content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(_escape(value));
		_resume_branch($scope1_id);
	}) });
}, 1);

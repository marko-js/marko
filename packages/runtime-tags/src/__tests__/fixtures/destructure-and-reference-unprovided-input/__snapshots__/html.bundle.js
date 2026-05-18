// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { content, ...rest } = input;
	_html(`<div${_attr_class([input.class, "foo"])}${_attrs_partial(rest, { class: 1 }, "a", $scope0_id, "div")}>`);
	_dynamic_tag($scope0_id, "b", content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_html(`</div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, { g: rest });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	const value = 1;
	child_default({ content: _content("a0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(_escape(value));
		_resume_branch($scope1_id);
	}) });
}, 1);

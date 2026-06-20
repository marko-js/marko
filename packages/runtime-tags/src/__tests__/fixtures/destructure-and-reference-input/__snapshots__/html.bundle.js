// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { content, ...rest } = input;
	_html(`<div${_attrs(rest, "a", $scope0_id, "div")}>`);
	_dynamic_tag($scope0_id, "b", content, {}, 0, 0, _serialize_guard($scope0_reason, 1));
	_html(`</div>${_el_resume($scope0_id, "a")}<div>${_escape(Object.keys(input))}${_el_resume($scope0_id, "c", _serialize_guard($scope0_reason, 0))}</div>`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	child_default({ content: _content("a0", () => {
		_scope_reason();
		_scope_id();
		_html("1");
	}) });
}, 1);

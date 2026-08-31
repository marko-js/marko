// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const attrs = { onClick: _resume(function() {
		n = 1;
	}, "a0", $scope0_id) };
	_html("<svg width=20 height=20>");
	_dynamic_tag($scope0_id, "a", input.tag, {
		...attrs,
		id: "g"
	}, _content_resume("a1", () => {
		_scope_id();
		_scope_reason();
		_html("<stop offset=0%></stop>");
	}, $scope0_id), 0, _serialize_guard($scope0_reason, 0));
	_html(`</svg><div>${_text_resume($scope0_id, "b", n)}</div>`);
	writeScope($scope0_id, { g: _serialize_if($scope0_reason, 0) && attrs });
	_resume_branch($scope0_id);
}, 1);

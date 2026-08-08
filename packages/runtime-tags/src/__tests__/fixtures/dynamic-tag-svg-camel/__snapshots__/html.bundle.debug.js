// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const attrs = { onClick: _resume(function() {
		n = 1;
	}, "__tests__/template.marko_0/attrs", $scope0_id) };
	_html("<svg width=20 height=20>");
	_dynamic_tag($scope0_id, "#text/0", input.tag, {
		...attrs,
		id: "g"
	}, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<stop offset=0%></stop>");
	}, $scope0_id), 0, _serialize_guard($scope0_reason, 0));
	_html(`</svg><div>${_escape(n)}${_el_resume($scope0_id, "#text/1")}</div>`);
	writeScope($scope0_id, { attrs: _serialize_if($scope0_reason, 0) && attrs }, "__tests__/template.marko", 0, { attrs: "2:8" });
	_resume_branch($scope0_id);
}, 1);

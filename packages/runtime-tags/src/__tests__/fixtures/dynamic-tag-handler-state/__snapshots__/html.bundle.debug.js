// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const attrs = { onClick: _resume(function() {
		n++;
	}, "__tests__/template.marko_0/attrs", $scope0_id) };
	const aliased = attrs;
	_dynamic_tag($scope0_id, "#text/0", input.tag, {
		...attrs,
		id: "spread"
	}, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("spread");
	}, $scope0_id));
	_dynamic_tag($scope0_id, "#text/1", input.tag, {
		onClick: _resume(function() {
			n += 10;
		}, "__tests__/template.marko_0/onClick", $scope0_id),
		id: "inline"
	}, _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html("inline");
	}, $scope0_id));
	_dynamic_tag($scope0_id, "#text/2", input.tag, {
		...aliased,
		id: "aliased"
	}, _content_resume("__tests__/template.marko_3*content", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html("aliased");
	}, $scope0_id));
	_html(`<div>${_escape(n)}${_el_resume($scope0_id, "#text/3")}</div>`);
	writeScope($scope0_id, {
		input_tag: input.tag,
		n,
		attrs: _serialize_if($scope0_reason, 0) && attrs
	}, "__tests__/template.marko", 0, {
		input_tag: ["input.tag"],
		n: "1:6",
		attrs: "2:8"
	});
	_resume_branch($scope0_id);
}, 1);

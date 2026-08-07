// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const attrs = { onClick: _resume(function() {
		n++;
	}, "a0", $scope0_id) };
	const aliased = attrs;
	_dynamic_tag($scope0_id, "a", input.tag, {
		...attrs,
		id: "spread"
	}, _content_resume("a2", () => {
		_scope_id();
		_scope_reason();
		_html("spread");
	}, $scope0_id));
	_dynamic_tag($scope0_id, "b", input.tag, {
		onClick: _resume(function() {
			n += 10;
		}, "a1", $scope0_id),
		id: "inline"
	}, _content_resume("a3", () => {
		_scope_id();
		_scope_reason();
		_html("inline");
	}, $scope0_id));
	_dynamic_tag($scope0_id, "c", input.tag, {
		...aliased,
		id: "aliased"
	}, _content_resume("a4", () => {
		_scope_id();
		_scope_reason();
		_html("aliased");
	}, $scope0_id));
	_html(`<div>${_escape(n)}${_el_resume($scope0_id, "d")}</div>`);
	writeScope($scope0_id, {
		g: input.tag,
		h: n,
		j: _serialize_if($scope0_reason, 0) && attrs
	});
	_resume_branch($scope0_id);
}, 1);

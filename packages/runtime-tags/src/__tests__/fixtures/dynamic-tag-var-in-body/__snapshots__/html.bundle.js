// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_html(`<div></div>${_el_resume($scope0_id, "b")}`);
	const $return = _resume(() => (html) => ((el) => el())(_el_read_error).innerHTML = html, "b0", $scope0_id);
	writeScope($scope0_id, {});
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $setHtml__closures = /* @__PURE__ */ new Set();
	const $Child_scope = _peek_scope_id();
	let setHtml = _dynamic_tag($scope0_id, "a", child_default, {}, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_script($scope1_id, "a1");
		_subscribe($setHtml__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id));
	_var($scope0_id, "b", $Child_scope, "a2");
	writeScope($scope0_id, {
		c: setHtml,
		Bc: $setHtml__closures
	});
}, 1);

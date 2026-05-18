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
	let setHtml = child_default({ content: _content("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_script($scope1_id, "a0");
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
		_resume_branch($scope1_id);
	}) });
	writeScope($scope0_id, { c: setHtml });
}, 1);

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let name = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, _serialize_guard($scope1_reason, 0));
		const $return = "A";
		_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {});
		return $return;
	}) }.content({ content: _content("a2", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_script($scope2_id, "a1");
		writeScope($scope2_id, { _: _scope_with_id($scope0_id) });
		_resume_branch($scope2_id);
	}) });
	writeScope($scope0_id, { c: name });
}, 1);

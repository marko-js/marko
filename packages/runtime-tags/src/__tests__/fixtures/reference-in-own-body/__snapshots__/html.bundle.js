// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let name = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0);
		return "A";
	}, $scope0_id) }.content({ content: _content("a2", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_script($scope2_id, "a1", 0);
		_scope($scope2_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) });
	_scope($scope0_id, { c: name });
}, 1);

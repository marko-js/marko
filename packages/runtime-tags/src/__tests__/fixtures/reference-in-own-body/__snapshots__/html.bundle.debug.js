// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Tag = { content: _content("__tests__/template.marko_1_content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, _serialize_guard($scope1_reason, 0));
		const $return = "A";
		_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {}, "__tests__/template.marko", "1:2");
		return $return;
	}) };
	let name = Tag.content({ content: _content("__tests__/template.marko_2_content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_script($scope2_id, "__tests__/template.marko_2_name");
		writeScope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:2");
		_resume_branch($scope2_id);
	}) });
	writeScope($scope0_id, { name }, "__tests__/template.marko", 0, { name: "6:6" });
}, 1);

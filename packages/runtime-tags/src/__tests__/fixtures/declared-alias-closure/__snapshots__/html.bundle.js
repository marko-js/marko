// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const value = void 0;
	({ content: _content("a0", (input) => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html("<div");
		_attrs_content(input, "a", $scope3_id, "div");
		_html(`</div>${_el_resume($scope3_id, "a")}`);
		_script($scope3_id, "a1");
		writeScope($scope3_id, { c: input });
	}) }).content({ content: _content_resume("a2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
		_resume_branch($scope1_id);
	}, $scope0_id) });
	writeScope($scope0_id, {
		b: value,
		c: value?.class,
		d: value?.text
	});
}, 1);

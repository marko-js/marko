// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter("v", 1), (v) => {
			_scope_id();
			_html(`<span>${_escape(v)}</span>`);
		}, 0);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a1", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("<div>loading</div>");
		_script($scope2_id, "a0");
		_resume_branch($scope2_id);
	}, $scope0_id) }) });
}, 1);

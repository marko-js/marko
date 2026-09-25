// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter("done", 1), () => {
			const $scope3_id = _scope_id();
			_html("done");
		}, 0);
	}, $scope0_id), { placeholder: attrTag({ content: _content("__tests__/template.marko_2*content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(" loading");
		_script($scope2_id, "__tests__/template.marko_2", 0);
		_resume_branch($scope2_id);
	}, $scope0_id) }) }, 0);
}, 1);

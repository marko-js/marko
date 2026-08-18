// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>hide</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", _content_resume("a2", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_await($scope2_id, "a", resolveAfter("done", 3), () => {
					_scope_id();
					_html("done");
				}, 0);
			}, $scope1_id), { placeholder: attrTag({ content: _content_resume("a1", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_html(" loading");
				_script($scope3_id, "a0");
				_resume_branch($scope3_id);
			}, $scope1_id) }) });
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "a3");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);

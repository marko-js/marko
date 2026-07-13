// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=outside>Pass</div>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", _content_resume("a2", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_await($scope2_id, "a", resolveAfter(0, 1), () => {
					_script(_scope_id(), "a0");
				}, 0);
			}, $scope1_id), { placeholder: attrTag({ content: _content_resume("a1", () => {
				_scope_reason();
				_scope_id();
				_html("loading...");
			}, $scope1_id) }) });
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_script($scope0_id, "a3");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);

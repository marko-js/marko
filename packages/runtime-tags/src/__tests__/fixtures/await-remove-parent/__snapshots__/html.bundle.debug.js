// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = 1;
	_html("<div id=outside>Pass</div>");
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", _content_resume("__tests__/template.marko_2_content", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_await($scope2_id, "#text/0", resolveAfter(0, 1), () => {
					const $scope4_id = _scope_id();
					_script($scope4_id, "__tests__/template.marko_4");
				}, 0);
			}, $scope1_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3_content", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_html("loading...");
			}, $scope1_id) }) });
			writeScope($scope1_id, {}, "__tests__/template.marko", "5:1");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);

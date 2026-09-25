// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html(`<button>hide</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_await($scope2_id, "#text/0", resolveAfter("done", 3), () => {
					const $scope4_id = _scope_id();
					_html("done");
				}, 0);
			}, $scope1_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3*content", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_html(" loading");
				_script($scope3_id, "__tests__/template.marko_3", 0);
				_resume_branch($scope3_id);
			}, $scope1_id) }) });
			_scope($scope1_id, {}, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);

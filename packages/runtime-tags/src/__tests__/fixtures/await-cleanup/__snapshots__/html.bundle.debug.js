// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = new Set();
	let show = 1;
	_html(`<button></button>${_el_resume($scope0_id, "#button/0")}<div id=one>Fail</div><div id=two>Fail</div>`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", _content_resume("__tests__/template.marko_2_content", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_await($scope2_id, "#text/0", resolveAfter(0, 1), () => {
					const $scope3_id = _scope_id();
					_script($scope3_id, "__tests__/template.marko_3_show/pending");
					_html(`${_escape(show)}${_el_resume($scope3_id, "#text/0")}`);
					_script($scope3_id, "__tests__/template.marko_3");
					writeScope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "9:5");
					_resume_branch($scope3_id);
				});
				_await($scope2_id, "#text/1", resolveAfter(0, 1), () => {
					const $scope5_id = _scope_id();
					_script($scope5_id, "__tests__/template.marko_5");
					_resume_branch($scope5_id);
				}, 0);
				writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:3");
			}, $scope1_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_4_content", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_html("loading...");
			}, $scope1_id) }) });
			writeScope($scope1_id, {}, "__tests__/template.marko", "6:1");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		show,
		"ClosureScopes:show": $show__closures
	}, "__tests__/template.marko", 0, { show: "2:5" });
	_resume_branch($scope0_id);
}, 1);

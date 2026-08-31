// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $clicks__closures = new Set();
	let clicks = 0;
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_await($scope2_id, "#text/0", resolveAfter("done", 1), () => {
			const $scope3_id = _scope_id();
			_script($scope3_id, "__tests__/template.marko_3_clicks#1/pending");
			_html(`<button>loaded ${_text_resume($scope3_id, "#text/1", clicks, 2)}</button>${_el_resume($scope3_id, "#button/0")}`);
			_script($scope3_id, "__tests__/template.marko_3");
			writeScope($scope3_id, {
				_: _scope_with_id($scope2_id),
				"ClosureSignalIndex:clicks": 1
			}, "__tests__/template.marko", "12:4");
			_resume_branch($scope3_id);
		});
		writeScope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_1*content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<button>loading ${_text_resume($scope1_id, "#text/1", clicks, 2)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_subscribe($clicks__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4"));
		_resume_branch($scope1_id);
	}, $scope0_id) }) });
	writeScope($scope0_id, {
		clicks,
		"ClosureScopes:clicks": $clicks__closures
	}, "__tests__/template.marko", 0, { clicks: "3:6" });
	_resume_branch($scope0_id);
}, 1);

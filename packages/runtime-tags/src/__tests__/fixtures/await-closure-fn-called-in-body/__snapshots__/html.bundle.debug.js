// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	const $view2__closures = new Set();
	let count = 0;
	const view = _resume(() => count, "__tests__/template.marko_0/view", $scope0_id);
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter(0, 1), () => {
			const $scope2_id = _scope_id();
			_script($scope2_id, "__tests__/template.marko_2_count#1/pending");
			_script($scope2_id, "__tests__/template.marko_2_view#2/pending");
			_html(`<p>${_text_resume($scope2_id, "#text/0", view())}</p><button>${_text_resume($scope2_id, "#text/2", count)}</button>${_el_resume($scope2_id, "#button/1")}`);
			_script($scope2_id, "__tests__/template.marko_2");
			_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:4");
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3*content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("loading");
	}, $scope0_id) }) });
	_scope($scope0_id, {
		count,
		view,
		"ClosureScopes:count": $count__closures,
		"ClosureScopes:view": $view2__closures
	}, "__tests__/template.marko", 0, {
		count: "3:6",
		view: "4:8"
	});
	_resume_branch($scope0_id);
}, 1);

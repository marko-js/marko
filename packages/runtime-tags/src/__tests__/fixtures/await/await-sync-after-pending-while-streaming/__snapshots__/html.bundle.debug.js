// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $query__closures = new Set();
	let query = "a";
	_html(`<button>${_text_resume($scope0_id, "#text/1", query)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", query ? resolveAfter(`found ${query}`, 1) : "no query", (result) => {
			const $scope3_id = _scope_id();
			_html(`<div>${_text_resume($scope3_id, "#text/0", result)}</div>`);
			_scope($scope3_id, {}, "__tests__/template.marko", "6:4");
		});
		_subscribe($query__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), "__tests__/template.marko_1_query#0:3/subscribe", 0);
		_resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading");
	}, void 0, "__tests__/template.marko_2*content");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		query,
		"ClosureScopes:query/4": $query__closures
	}, "__tests__/template.marko", 0, { query: "2:6" });
}, 1);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	_html("<div>");
	_await($scope0_id, "#text/0", Promise.resolve("a"), (value) => {
		const $scope1_id = _scope_id();
		_html(`Got: ${_escape(value)} <!>${_escape(count)}${_el_resume($scope1_id, "#text/1")}`);
		_subscribe($count__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4"));
		_resume_branch($scope1_id);
	});
	_await($scope0_id, "#text/1", resolveAfter("b", 2), (value) => {
		const $scope2_id = _scope_id();
		_html(`Got: ${_escape(value)} <!>${_escape(count)}${_el_resume($scope2_id, "#text/1")}`);
		_subscribe($count__closures, writeScope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:count": 1
		}, "__tests__/template.marko", "9:4"));
		_resume_branch($scope2_id);
	});
	_await($scope0_id, "#text/2", resolveAfter("c", 1), (value) => {
		const $scope3_id = _scope_id();
		_html(`Got: ${_escape(value)} <!>${_escape(count)}${_el_resume($scope3_id, "#text/1")}`);
		_subscribe($count__closures, writeScope($scope3_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:count": 2
		}, "__tests__/template.marko", "13:4"));
		_resume_branch($scope3_id);
	});
	_html(`<button>Inc</button>${_el_resume($scope0_id, "#button/3")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);

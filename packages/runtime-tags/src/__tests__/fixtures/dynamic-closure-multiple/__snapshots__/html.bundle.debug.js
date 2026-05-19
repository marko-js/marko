// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $a__closures = new Set();
	const $b__closures = new Set();
	let a = 0;
	let b = 0;
	_html(`<button></button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		if (true) {
			const $scope2_id = _scope_id();
			_html(`<div>${_escape(a)}${_el_resume($scope2_id, "#text/0")}</div><div>${_escape(b)}${_el_resume($scope2_id, "#text/1")}</div>`);
			_subscribe($b__closures, _subscribe($a__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "8:4")));
		}
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:2");
	}, $scope0_id), {});
	_script($scope0_id, "__tests__/template.marko_0_a_b");
	writeScope($scope0_id, {
		a,
		b,
		"ClosureScopes:a": $a__closures,
		"ClosureScopes:b": $b__closures
	}, "__tests__/template.marko", 0, {
		a: "1:6",
		b: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);

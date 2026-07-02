// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	let n = 0;
	_html(`<button id=a>A</button>${_el_resume($scope0_id, "#button/0")}`);
	_await($scope0_id, "#text/1", resolveAfter(n, 0), (v) => {
		const $scope1_id = _scope_id();
		_html(`<div id=out>done <!>${_escape(n)}${_el_resume($scope1_id, "#text/0")}</div>`);
		_subscribe($n__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"));
		_resume_branch($scope1_id);
	});
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		n,
		"ClosureScopes:n": $n__closures
	}, "__tests__/template.marko", 0, { n: "2:6" });
	_resume_branch($scope0_id);
}, 1);

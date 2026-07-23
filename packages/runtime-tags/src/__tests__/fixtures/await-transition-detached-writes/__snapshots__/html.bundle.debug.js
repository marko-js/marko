// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	let n = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/0")}<b>outside <!>${_escape(n)}${_el_resume($scope0_id, "#text/1")}</b><div>`);
	_await($scope0_id, "#text/2", resolveAfter(`R${n}`), (result) => {
		const $scope1_id = _scope_id();
		_html(`<span>#<!>${_escape(n)}${_el_resume($scope1_id, "#text/0")}</span><p>${_escape(result)}${_el_resume($scope1_id, "#text/1")}</p>`);
		_subscribe($n__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4"));
		_resume_branch($scope1_id);
	});
	_html("</div>");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		n,
		"ClosureScopes:n": $n__closures
	}, "__tests__/template.marko", 0, { n: "2:6" });
	_resume_branch($scope0_id);
}, 1);

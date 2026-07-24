// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button id=inc>inc</button>${_el_resume($scope0_id, "#button/0")}<ul>`);
	_for_of(Array.from({ length: n }, (_, i) => i), (i) => {
		const $scope1_id = _scope_id();
		_html(`<li>item <!>${_escape(i)}${_el_resume($scope1_id, "#text/0")} of <!>${_escape(n)}${_el_resume($scope1_id, "#text/1")}</li>`);
		writeScope($scope1_id, {}, "__tests__/template.marko", "8:4");
	}, 0, $scope0_id, "#ul/1", 1, 1, 1, "</ul>", 1);
	_await($scope0_id, "#text/2", resolveAfter(n), (v) => {
		const $scope2_id = _scope_id();
		_html(`<div id=awaited>awaited <!>${_escape(v)}${_el_resume($scope2_id, "#text/0")}</div>`);
		writeScope($scope2_id, {}, "__tests__/template.marko", "12:2");
	});
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "3:6" });
	_resume_branch($scope0_id);
}, 1);

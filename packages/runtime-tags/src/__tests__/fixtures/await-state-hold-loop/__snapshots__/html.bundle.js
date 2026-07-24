// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button id=inc>inc</button>${_el_resume($scope0_id, "a")}<ul>`);
	_for_of(Array.from({ length: n }, (_, i) => i), (i) => {
		const $scope1_id = _scope_id();
		_html(`<li>item <!>${_escape(i)}${_el_resume($scope1_id, "a")} of <!>${_escape(n)}${_el_resume($scope1_id, "b")}</li>`);
		writeScope($scope1_id, {});
	}, 0, $scope0_id, "b", 1, 1, 1, "</ul>", 1);
	_await($scope0_id, "c", resolveAfter(n), (v) => {
		const $scope2_id = _scope_id();
		_html(`<div id=awaited>awaited <!>${_escape(v)}${_el_resume($scope2_id, "a")}</div>`);
		writeScope($scope2_id, {});
	});
	_script($scope0_id, "a0");
	writeScope($scope0_id, { d: n });
	_resume_branch($scope0_id);
}, 1);

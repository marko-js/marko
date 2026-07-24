// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button id=inc>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (n % 2) {
			const $scope1_id = _scope_id();
			_html(`<div id=odd>odd <!>${_escape(n)}${_el_resume($scope1_id, "#text/0")}</div>`);
			writeScope($scope1_id, {}, "__tests__/template.marko", "7:2");
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html(`<div id=even>even <!>${_escape(n)}${_el_resume($scope2_id, "#text/0")}</div>`);
			writeScope($scope2_id, {}, "__tests__/template.marko", "10:2");
			return 1;
		}
	}, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_await($scope0_id, "#text/2", resolveAfter(n), (v) => {
		const $scope3_id = _scope_id();
		_html(`<div id=awaited>awaited <!>${_escape(v)}${_el_resume($scope3_id, "#text/0")}</div>`);
		writeScope($scope3_id, {}, "__tests__/template.marko", "13:2");
	});
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "3:6" });
	_resume_branch($scope0_id);
}, 1);

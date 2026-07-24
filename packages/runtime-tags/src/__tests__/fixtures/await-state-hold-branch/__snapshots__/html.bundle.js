// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button id=inc>inc</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (n % 2) {
			const $scope1_id = _scope_id();
			_html(`<div id=odd>odd <!>${_escape(n)}${_el_resume($scope1_id, "a")}</div>`);
			writeScope($scope1_id, {});
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html(`<div id=even>even <!>${_escape(n)}${_el_resume($scope2_id, "a")}</div>`);
			writeScope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "b", 1, 1, 1, 0, 1);
	_await($scope0_id, "c", resolveAfter(n), (v) => {
		const $scope3_id = _scope_id();
		_html(`<div id=awaited>awaited <!>${_escape(v)}${_el_resume($scope3_id, "a")}</div>`);
		writeScope($scope3_id, {});
	});
	_script($scope0_id, "a0");
	writeScope($scope0_id, { d: n });
	_resume_branch($scope0_id);
}, 1);

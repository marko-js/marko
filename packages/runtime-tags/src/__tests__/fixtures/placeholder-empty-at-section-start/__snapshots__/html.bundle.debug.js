// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = "";
	_if(() => {
		if (true) {
			const $scope1_id = _scope_id();
			_html(`${_escape(x) || "<!>"}${_el_resume($scope1_id, "#text/0")}`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 0, 0, 0, 1);
	_for_of([1], (i) => {
		const $scope2_id = _scope_id();
		_html(`${_escape(x) || "<!>"}${_el_resume($scope2_id, "#text/0")} tail`);
		writeScope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
	}, 0, $scope0_id, "#text/1", 1, 0, 0);
	_html(`<button>fill</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);

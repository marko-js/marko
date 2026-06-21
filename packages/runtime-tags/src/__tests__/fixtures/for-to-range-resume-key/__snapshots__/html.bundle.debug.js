// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let end = 4;
	_for_to(end, 2, 1, (n) => {
		const $scope1_id = _scope_id();
		_html(`<button>n=${_escape(n)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_end");
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2");
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	writeScope($scope0_id, { end }, "__tests__/template.marko", 0, { end: "3:6" });
	_resume_branch($scope0_id);
}, 1);

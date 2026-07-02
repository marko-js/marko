// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<div></div>${_el_resume($scope0_id, "#div/0")}<button>${_escape(count)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}`);
	_if(() => {
		if (!count) {
			const $scope1_id = _scope_id();
			_script($scope1_id, "__tests__/template.marko_1");
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:1");
			return 0;
		}
	}, $scope0_id, "#text/3");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:5" });
	_resume_branch($scope0_id);
}, 1);

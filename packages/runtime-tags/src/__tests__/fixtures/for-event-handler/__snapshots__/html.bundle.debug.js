// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let num = 0;
	_for_to(num, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<button>${_escape(i)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, {}, "__tests__/template.marko", "3:2");
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	writeScope($scope0_id, { num }, "__tests__/template.marko", 0, { num: "1:6" });
	_resume_branch($scope0_id);
}, 1);

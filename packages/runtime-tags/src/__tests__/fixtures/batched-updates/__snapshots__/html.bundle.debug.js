// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = 0;
	let b = 0;
	_html(`<button>${_escape(a + b)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_a_b");
	writeScope($scope0_id, {
		a,
		b
	}, "__tests__/template.marko", 0, {
		a: "1:6",
		b: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);

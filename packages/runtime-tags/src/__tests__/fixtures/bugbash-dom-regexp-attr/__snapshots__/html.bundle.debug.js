// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let i = 0;
	_html(`<input pattern=${i % 2 ? "^b+$" : "^a+$"}>${_el_resume($scope0_id, "#input/0")}<button>Update</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { i }, "__tests__/template.marko", 0, { i: "1:6" });
	_resume_branch($scope0_id);
}, 1);

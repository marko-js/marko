// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let message = "hi";
	_html(`<button>bump</button>${_el_resume($scope0_id, "#button/0")}<div>static body</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { message }, "__tests__/template.marko", 0, { message: "1:6" });
	_resume_branch($scope0_id);
}, 1);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = "";
	_html(`<button>go</button>${_el_resume($scope0_id, "#button/0")}<div><!--${_escape_comment(c)}-->${_el_resume($scope0_id, "#comment/1")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);

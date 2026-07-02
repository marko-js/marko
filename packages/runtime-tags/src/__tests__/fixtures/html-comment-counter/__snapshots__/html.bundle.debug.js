// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<div><button>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<!--${_escape_comment(count)} + ${_escape_comment(count)} = ${_escape_comment(count + count)}-->${_el_resume($scope0_id, "#comment/2")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "2:8" });
	_resume_branch($scope0_id);
}, 1);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let num = 1;
	const double = num && num * 2;
	_html(`<div>${double == null ? "none" : _escape(double)}${_el_resume($scope0_id, "#text/0")}</div><button>clear</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);

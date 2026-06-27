// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	const doubled = count * 2;
	const tripled = count * 3;
	_html(`<button>increment</button>${_el_resume($scope0_id, "#button/0")}<div>-- <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")} -- <!>${_escape(doubled)}${_el_resume($scope0_id, "#text/2")} -- <!>${_escape(tripled)}${_el_resume($scope0_id, "#text/3")} -- <!>${_escape(doubled + tripled)}${_el_resume($scope0_id, "#text/4")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0_count");
	writeScope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);

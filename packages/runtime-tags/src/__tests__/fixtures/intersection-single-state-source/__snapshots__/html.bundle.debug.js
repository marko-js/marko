// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	const doubled = count * 2;
	const tripled = count * 3;
	_html(`<button>increment</button>${_el_resume($scope0_id, "#button/0")}<div>-- ${_text_resume($scope0_id, "#text/1", count, 2)} -- ${_text_resume($scope0_id, "#text/2", doubled, 2)} -- ${_text_resume($scope0_id, "#text/3", tripled, 2)} -- ${_text_resume($scope0_id, "#text/4", doubled + tripled, 2)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);

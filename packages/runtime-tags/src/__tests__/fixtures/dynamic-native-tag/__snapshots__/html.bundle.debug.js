// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let href = input.href;
	_html(`<${href ? "a" : "span"} class=chip${_attr("title", input.label)}${_attr("href", href)}></${href ? "a" : "span"}>${_el_resume($scope0_id, "#span/0")}<button id=toggle></button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { href }, "__tests__/template.marko", 0, { href: "1:6" });
	_resume_branch($scope0_id);
}, 1);

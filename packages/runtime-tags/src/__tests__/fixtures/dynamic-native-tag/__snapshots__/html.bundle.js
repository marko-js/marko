// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let href = input.href;
	_html(`<${href ? "a" : "span"} class=chip${_attr("title", input.label)}${_attr("href", href)}></${href ? "a" : "span"}>${_el_resume($scope0_id, "a")}<button id=toggle></button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { g: href });
	_resume_branch($scope0_id);
}, 1);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let className = "A";
	_html(`<p${_attr_class(className)}>paragraph</p>${_el_resume($scope0_id, "#p/0")}<button></button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0_className");
	writeScope($scope0_id, { className }, "__tests__/template.marko", 0, { className: "1:6" });
	_resume_branch($scope0_id);
}, 1);

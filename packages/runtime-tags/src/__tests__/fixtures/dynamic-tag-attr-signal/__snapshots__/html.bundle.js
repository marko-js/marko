// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let className = "A";
	_html(`<p${_attr_class(className)}>paragraph</p>${_el_resume($scope0_id, "a")}<button></button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: className });
	_resume_branch($scope0_id);
}, 1);

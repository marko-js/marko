// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "";
	_html(`<div${_attr("title", value)}></div>${_el_resume($scope0_id, "a")}<button type=button>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: value });
	_resume_branch($scope0_id);
}, 1);

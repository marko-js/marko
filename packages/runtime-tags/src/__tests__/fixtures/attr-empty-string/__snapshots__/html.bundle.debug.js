// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "";
	_html(`<div${_attr("title", value)}></div>${_el_resume($scope0_id, "#div/0")}<button type=button>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { value }, "__tests__/template.marko", 0, { value: "1:6" });
	_resume_branch($scope0_id);
}, 1);

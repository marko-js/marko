// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let d = "y";
	_html(`<button>b</button>${_el_resume($scope0_id, "#button/0")}<textarea>${_escape(`a-${d}-b`)}</textarea>${_el_resume($scope0_id, "#textarea/1")}<div${_attr("id", `id-${d}`)}${_attr("data-x", `${d}`)}>t-<!>${_escape(`${d}`)}${_el_resume($scope0_id, "#text/3")}-z</div>${_el_resume($scope0_id, "#div/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_d");
	writeScope($scope0_id, { d }, "__tests__/template.marko", 0, { d: "1:6" });
	_resume_branch($scope0_id);
}, 1);

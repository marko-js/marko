// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let disabled = true;
	_html(`<input${_attr("disabled", disabled)}>${_el_resume($scope0_id, "#input/0")}<button>${disabled ? "enable" : "disable"}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0_disabled");
	writeScope($scope0_id, { disabled }, "__tests__/template.marko", 0, { disabled: "1:6" });
	_resume_branch($scope0_id);
}, 1);

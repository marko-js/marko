// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = 0;
	let b = 0;
	_html(`<div>${_escape(a)}${_el_resume($scope0_id, "#text/0")} <!>${_escape(b)}${_el_resume($scope0_id, "#text/1")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0_input_value");
	writeScope($scope0_id, { input_value: input.value }, "__tests__/template.marko", 0, { input_value: ["input.value"] });
	_resume_branch($scope0_id);
}, 1);

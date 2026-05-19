// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "hello";
	_html(`<textarea>${_attr_textarea_value($scope0_id, "#textarea/0", value, _resume((_new_value) => {
		value = _new_value;
	}, "__tests__/template.marko_0/valueChange", $scope0_id))}</textarea>${_el_resume($scope0_id, "#textarea/0")}<span>${_escape(value)}${_el_resume($scope0_id, "#text/1")}</span>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);

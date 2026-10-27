// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let busy = false;
	_html(`<form><button name=_action value=add${_attr("disabled", busy)}>Add</button>${_el_resume($scope0_id, "#button/1")}</form>${_el_resume($scope0_id, "#form/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);

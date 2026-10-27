// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let busy = false;
	let count = 0;
	_html(`<form><button name=_action value=add${_attr("disabled", busy)}>Add</button>${_el_resume($scope0_id, "#button/1")}</form>${_el_resume($scope0_id, "#form/0")}<button>${_text_resume($scope0_id, "#text/3", count)}</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "3:6" });
}, 1);

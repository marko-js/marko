// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let busy = false;
	let count = 0;
	_html(`<form><button name=_action value=add${_attr("disabled", busy)}>Add</button>${_el_resume($scope0_id, "b")}</form>${_el_resume($scope0_id, "a")}<button>${_text_resume($scope0_id, "d", count)}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { f: count });
}, 1);

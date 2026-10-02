// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let obj = { a: void 0 };
	_html(`<div>${_text_resume($scope0_id, "a", JSON.stringify(obj.a?.b))} ${_text_resume($scope0_id, "b", String(obj.a?.b?.c), 2)}</div><button></button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);

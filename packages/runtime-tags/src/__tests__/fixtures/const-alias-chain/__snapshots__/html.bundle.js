// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let obj = {
		a: { b: 1 },
		c: 2
	};
	_html(`<div>${_text_resume($scope0_id, "a", obj.a.b)} ${_text_resume($scope0_id, "b", obj.a.b, 2)} ${_text_resume($scope0_id, "c", obj.c, 2)}</div><button></button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);

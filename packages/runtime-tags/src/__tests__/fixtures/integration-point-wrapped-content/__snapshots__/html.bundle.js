// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let editing = false;
	_html("<svg><title><if=editing>editing</if><else>viewing</else></title><foreignObject class=host width=100 height=100><div>");
	_if(() => {}, $scope0_id, "a", 1, 1, 1, "</div>", 1);
	_html(`</foreignObject></svg><button class=edit>edit</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: editing });
}, 1);

// template.marko
_shells({ a: "a !a2 a1 a0; b b ;<div></div><div></div><div></div>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$global();
	_html(`<div></div>${_el_resume($scope0_id, "a")}<div></div>${_el_resume($scope0_id, "b")}<div></div>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a2");
	_script($scope0_id, "a1");
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);

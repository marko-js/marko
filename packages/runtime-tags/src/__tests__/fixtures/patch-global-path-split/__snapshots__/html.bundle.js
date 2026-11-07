// template.marko
_shells({ a: "a !a2 a3; b b ;<div></div><div></div><div></div>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$global();
	_html(`<div></div>${_el_mark($scope0_id, "a")}<div></div>${_el_mark($scope0_id, "b")}<div></div>${_el_mark($scope0_id, "c")}`);
	_fill_global_subscribe("a0", $scope0_id, 1);
	_fill_global_subscribe("a1", $scope0_id, 1);
	_script($scope0_id, "a2");
	_script($scope0_id, "a3");
	_scope($scope0_id, {});
}, 1);

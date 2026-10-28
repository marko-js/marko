// template.marko
_shells({ a: "a !a0; ;<div></div>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$global();
	_html(`<div></div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);

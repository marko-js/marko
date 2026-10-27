// template.marko
_shells({ a: "a; ;<div></div>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	$global();
	_html(`<div></div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "ha0" : "ea0", "d");
	_scope($scope0_id, { d: input.page }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.page, !_server_guard($scope0_reason, 0));
}, 1);

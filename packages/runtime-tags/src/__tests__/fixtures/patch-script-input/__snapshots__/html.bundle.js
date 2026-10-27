// template.marko
_shells({ a: "a;E ;<main><h1> </h1></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h1></main>`);
	_script($scope0_id, "a0");
	_filled_guard($scope0_reason, 1) && _patch_effect($scope0_id, _client_guard($scope0_reason, 1) ? "ha0" : "ea0", "e");
	_scope($scope0_id, { e: input.announce }) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.announce, !_server_guard($scope0_reason, 1));
}, 1);

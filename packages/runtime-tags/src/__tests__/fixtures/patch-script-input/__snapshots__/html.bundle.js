// template.marko
_shells({ a: "a;E ;<main><h1> </h1></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_announce = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_mark($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h1></main>`);
	_script($scope0_id, "a0", 1, $fg__input_announce);
	_scope($scope0_id, { e: input.announce }) || $fg__input_announce && _patch_write($scope0_id, "xe", input.announce, !_server_guard($scope0_reason, 1));
}, 1);

// template.marko
_shells({ a: "a; ;<div></div>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_page = _filled_guard($scope0_reason, 1), $fg__input_n = _filled_guard($scope0_reason, 2), $cg__input_page = _client_guard($scope0_reason, 1), $cg__input_n = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	$global();
	_html(`<div></div>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "a1", 1, ($fg__input_page || $fg__input_n) && ($cg__input_page || $cg__input_n ? 2 : 1), [$fg__input_page && "d", $fg__input_n && "e"], "a2", $scope0_reason, 0) || _script($scope0_id, "a0", 1, ($fg__input_page || $fg__input_n) && ($cg__input_page || $cg__input_n ? 2 : 1), [$fg__input_page && "d", $fg__input_n && "e"]);
	_scope($scope0_id, {
		d: input.page,
		e: input.n
	}) || ($fg__input_page && _patch_write($scope0_id, "xd", input.page, !_server_guard($scope0_reason, 1)), $fg__input_n && _patch_write($scope0_id, "xe", input.n, !_server_guard($scope0_reason, 2)));
}, 1);

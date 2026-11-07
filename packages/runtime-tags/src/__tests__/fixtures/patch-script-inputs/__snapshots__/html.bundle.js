// template.marko
_shells({ a: "a;E ;<main><h1> </h1></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_a = _filled_guard($scope0_reason, 2), $fg__input_b = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_mark($scope0_id, "a", input.title, 1, $scope0_reason, 1)}</h1></main>`);
	_script($scope0_id, "a0", 1, ($fg__input_a || $fg__input_b) && (_client_guard($scope0_reason, 2) || _client_guard($scope0_reason, 3) ? 2 : 1), [$fg__input_a && "e", $fg__input_b && "f"], "a1", $scope0_reason, 0);
	_scope($scope0_id, {
		e: input.a,
		f: input.b
	}) || ($fg__input_a && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 2)), $fg__input_b && _patch_write($scope0_id, "xf", input.b, !_server_guard($scope0_reason, 3)));
}, 1);

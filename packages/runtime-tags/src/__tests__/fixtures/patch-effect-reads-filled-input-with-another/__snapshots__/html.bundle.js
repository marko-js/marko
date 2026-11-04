// template.marko
_shells({ a: "a !a1; D l ;<button> </button><div></div>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 1), $fg__input_other = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "b", n + input.label)}</button>${_el_mark($scope0_id, "a")}<div></div>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	_patch_render($scope0_id, "a2", [$fg__input_label && "f", $fg__input_other && "g"], $scope0_reason, 0) || _script($scope0_id, "a0", 1, ($fg__input_label || $fg__input_other) && (_client_guard($scope0_reason, 1) || _client_guard($scope0_reason, 2) ? 2 : 1), [$fg__input_label && "f", $fg__input_other && "g"]);
	_patch_render($scope0_id, "a3", $fg__input_label && "f");
	_scope($scope0_id, {
		f: input.label,
		g: input.other,
		i: n
	}) || ($fg__input_label && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 1)), $fg__input_other && _patch_write($scope0_id, "xg", input.other, !_server_guard($scope0_reason, 2)));
}, 1);

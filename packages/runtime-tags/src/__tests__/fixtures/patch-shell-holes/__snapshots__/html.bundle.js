// template.marko
_shells({
	a: "a;E l%;<main><h1> </h1><!></main>",
	a3: "a3; D ;<a> </a>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show = _client_guard($scope0_reason, 2), $fg__input_href = _filled_guard($scope0_reason, 3), $fg__input_hidden = _filled_guard($scope0_reason, 4), $fg__input_label = _filled_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_mark($scope0_id, "a", input.title, 1, $scope0_reason, 1)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<a${_attr("href", input.href, $scope1_id, "aa$href", $scope0_reason, 3)}${_attr("hidden", input.hidden, $scope1_id, "aa$hidden", $scope0_reason, 4)}>${_text_mark($scope1_id, "b", input.label, 1, $scope0_reason, 5)}</a>${_el_mark($scope1_id, "a", _updates_from($scope0_reason, 3) || _updates_from($scope0_reason, 4))}`);
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "a0");
			_client_guard($scope0_reason, 4) && _patch_render($scope1_id, "a1");
			_client_guard($scope0_reason, 5) && _patch_render($scope1_id, "a2");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["a3"], $scope0_reason, 2);
	_html("</main>");
	$fg__input_href && $cg__input_show && _patch_render($scope0_id, "a0", "g");
	$fg__input_hidden && $cg__input_show && _patch_render($scope0_id, "a1", "h");
	$fg__input_label && $cg__input_show && _patch_render($scope0_id, "a2", "i");
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.href,
		h: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.hidden,
		i: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 5)) && input.label
	}) || ($fg__input_href && $cg__input_show && _patch_write($scope0_id, "xg", input.href, !_server_guard($scope0_reason, 3)), $fg__input_hidden && $cg__input_show && _patch_write($scope0_id, "xh", input.hidden, !_server_guard($scope0_reason, 4)), $fg__input_label && $cg__input_show && _patch_write($scope0_id, "xi", input.label, !_server_guard($scope0_reason, 5)));
}, 1);

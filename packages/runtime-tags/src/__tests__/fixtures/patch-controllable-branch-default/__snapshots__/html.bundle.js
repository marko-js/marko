// template.marko
_shells({
	a: "a;E l%;<main><h1> </h1><!></main>",
	a1: "a1; ;<input>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_value = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_mark($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<input${_attr_input_value($scope1_id, "a", input.value, 0, 1, $scope0_reason, 2)}>${_el_mark($scope1_id, "a", _updates_from($scope0_reason, 2))}`);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a0");
			_scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a1"], $scope0_reason, 1);
	_html("</main>");
	$fg__input_value && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "a0", "g");
	_scope($scope0_id, { g: ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.value }) || $fg__input_value && $ui__input_show && _patch_write($scope0_id, "xg", input.value, !_server_guard($scope0_reason, 2));
}, 1);

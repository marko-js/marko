// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a2: "a2 !a0; bD ;<!--hello--><p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_name = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<!--hello-->${_el_mark($scope1_id, "a")}<p>${_text_mark($scope1_id, "b", input.name, 1, $scope0_reason, 1)}</p>`);
			_script($scope1_id, "a0");
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a1");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 0);
	$fg__input_name && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a1", "e");
	_scope($scope0_id, { e: _write_if($scope0_reason, 0) && ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.name }) || $fg__input_name && $ui__input_show && _patch_write($scope0_id, "xe", input.name, !_server_guard($scope0_reason, 1));
}, 1);

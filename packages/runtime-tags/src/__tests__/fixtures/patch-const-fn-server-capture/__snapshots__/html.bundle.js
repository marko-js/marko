// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a2: "a2;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 5), $sg__input_decor = _server_guard($scope0_reason, 4), $fg__input_decor = _filled_guard($scope0_reason, 4), $fg__input_text = _filled_guard($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	$fg__input_decor && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.decor, !$sg__input_decor);
	const fmt = _bind_resume(function(text) {
		return text + input.decor.mark();
	}, "a0", $scope0_id);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_html_mark($scope1_id, "a", fmt(input.text), 1, $scope0_reason, 1)}</p>`);
			_patch_render($scope1_id, "a1", [
				_filled_guard($scope0_reason, 6) && ">f",
				_filled_guard($scope0_reason, 4) && ">g",
				_filled_guard($scope0_reason, 4) && ">d"
			], $scope0_reason, 1);
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 5);
	$fg__input_text && $cg__input_show && _patch_render($scope0_id, "a3", "f");
	$fg__input_decor && $cg__input_show && _patch_render($scope0_id, "a4", ["g", "d"]);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.decor,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.text,
		g: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && fmt
	}) || ($fg__input_text && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.text, !_server_guard($scope0_reason, 6)), $fg__input_decor && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xg", fmt, !$sg__input_decor));
}, 1);

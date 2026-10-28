// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a2: "a2;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 5), $cg__input_show = _client_guard($scope0_reason, 5), $sg__input_decor = _server_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 4) && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xd", input.decor, !$sg__input_decor);
	const fmt = _bind_resume(function(text) {
		return text + input.decor.mark();
	}, "a0", $scope0_id);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_html_resume($scope1_id, "a", fmt(input.text), 1, $scope0_reason, 1)}</p>`);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a1");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 5);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.decor,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.text,
		g: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && fmt
	}) || (_filled_guard($scope0_reason, 6) && ($cg__input_show ? _patch_fill($scope0_id, "va4", input.text) : _client_guard($scope0_reason, 4) && _patch_fill($scope0_id, "va3", input.text, !_server_guard($scope0_reason, 6))), _filled_guard($scope0_reason, 4) && ($cg__input_show ? _patch_fill($scope0_id, "va6", fmt) : _client_guard($scope0_reason, 6) && _patch_fill($scope0_id, "va5", fmt, !$sg__input_decor)));
}, 1);

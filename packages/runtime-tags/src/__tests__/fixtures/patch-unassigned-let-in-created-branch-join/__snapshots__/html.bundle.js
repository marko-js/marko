// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a2: "a2 a6;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_v = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let y = input.v;
			_html(`<p>${_text_resume($scope1_id, "a", y + input.w)}</p>`);
			$cg__input_v && _patch_init($scope1_id, "a0");
			!$cg__input_v && _patch_fill($scope1_id, "va1", y, 1);
			_scope($scope1_id, {
				b: _write_if($scope0_reason, 2) && y,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.v,
		f: input.w
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", input.v, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va4", input.w, !_server_guard($scope0_reason, 2)));
}, 1);

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a5: "a5 a9;D lD ;<p> </p><span> </span>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_v = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = input.v;
			const f = _resume((v) => v, "a0");
			let y = f(x);
			_html(`<p>${_text_resume($scope1_id, "a", y + input.w)}</p><span>${_text_resume($scope1_id, "b", f(input.w), 1, $scope0_reason, 2)}</span>`);
			_patch_write($scope1_id, "wd", f, 1);
			$cg__input_v && _patch_init($scope1_id, "a1");
			$cg__input_v && _patch_init($scope1_id, "a2");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a3");
			!$cg__input_v && _patch_fill($scope1_id, "va4", y, 1);
			_scope($scope1_id, {
				d: f,
				f: _write_if($scope0_reason, 2) && y,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a5"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.v,
		f: input.w
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va6", input.v, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va7", input.w, !_server_guard($scope0_reason, 2)));
}, 1);

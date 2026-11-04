// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a4: "a4 !a0;D l ;<span> </span><button class=b>b</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_a = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let a = input.a;
			let b = 1;
			_html(`<span>${_text_mark($scope1_id, "a", a + b)}</span><button class=b>b</button>${_el_mark($scope1_id, "b")}`);
			_script($scope1_id, "a0");
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a1");
			_filled_guard($scope0_reason, 1) && _patch_fill($scope1_id, "va2", a, 1);
			_patch_fill($scope1_id, "va3", b, 1);
			_scope($scope1_id, {
				c: a,
				d: b,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a4"], $scope0_reason, 0);
	$fg__input_a && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a1", "e");
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.a }) || $fg__input_a && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 1));
}, 1);

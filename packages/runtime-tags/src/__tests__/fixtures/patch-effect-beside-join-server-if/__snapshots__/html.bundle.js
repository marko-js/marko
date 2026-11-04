// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a5: "a5 !a1; bD l ;<button class=n>n</button><p class=j> </p><div class=e></div>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_a = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let n = 0;
			_html(`<button class=n>n</button>${_el_mark($scope1_id, "a")}<p class=j>${_text_mark($scope1_id, "b", input.a + n)}</p><div class=e></div>${_el_mark($scope1_id, "c")}`);
			_script($scope1_id, "a0", 1, _filled_guard($scope0_reason, 1), ">e");
			_script($scope1_id, "a1");
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a2");
			_patch_render($scope1_id, "a3", _filled_guard($scope0_reason, 1) && ">e");
			_patch_fill($scope1_id, "va4", n, 1);
			_scope($scope1_id, {
				d: n,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a5"], $scope0_reason, 0);
	$fg__input_a && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a2", "e");
	_scope($scope0_id, { e: input.a }) || $fg__input_a && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 1));
}, 1);

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a4: "a4 a7!a1; bD l ;<button class=n>n</button><p class=j> </p><div class=e></div>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let n = 0;
			_html(`<button class=n>n</button>${_el_resume($scope1_id, "a")}<p class=j>${_text_resume($scope1_id, "b", input.a + n)}</p><div class=e></div>${_el_resume($scope1_id, "c")}`);
			_script($scope1_id, "a0", 1, _filled_guard($scope0_reason, 1), ">e");
			_script($scope1_id, "a1");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a2");
			_patch_fill($scope1_id, "va3", n, 1);
			_scope($scope1_id, {
				d: n,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a4"], $scope0_reason, 0);
	_scope($scope0_id, { e: input.a }) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va5", input.a, !_server_guard($scope0_reason, 1));
}, 1);

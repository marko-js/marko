// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a3: "a3 a6!a0;D l ;<span> </span><button class=b>b</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let a = input.a;
			let b = 1;
			_html(`<span>${_text_resume($scope1_id, "a", a + b)}</span><button class=b>b</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a0");
			_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "wc", a, 1);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a1");
			_patch_fill($scope1_id, "va2", b, 1);
			_scope($scope1_id, {
				c: a,
				d: b,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a3"], $scope0_reason, 0);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.a }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va4", input.a, !_server_guard($scope0_reason, 1));
}, 1);

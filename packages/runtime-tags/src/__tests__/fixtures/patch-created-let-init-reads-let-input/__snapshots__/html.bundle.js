// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a4: "a4 !a0; b D ;<span></span><button> </button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_a = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = 1;
			let y = x + input.a;
			_html(`<span></span>${_el_mark($scope1_id, "a")}<button>${_text_mark($scope1_id, "c", x)}</button>${_el_mark($scope1_id, "b")}`);
			_script($scope1_id, "a0");
			_script($scope1_id, "a1");
			_patch_render($scope1_id, "a2", _filled_guard($scope0_reason, 1) && ">e");
			_patch_fill($scope1_id, "va3", x, 1);
			_scope($scope1_id, {
				d: x,
				f: y,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a4"], $scope0_reason, 0);
	$fg__input_a && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a5", "e");
	_scope($scope0_id, { e: input.a }) || $fg__input_a && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 1));
}, 1);

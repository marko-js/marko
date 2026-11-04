// template.marko
_shells({
	a: "a !a4; b%;<button class=open>inc</button><!><!>",
	a3: "a3 a6;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _server_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const y = input.label + "!";
			_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "xb", y, !$sg__input_label);
			_html(`<p>${_text_mark($scope1_id, "a", y + n)}</p>`);
			_script($scope1_id, "a0", 1, _filled_guard($scope0_reason, 1), "b");
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a1");
			_patch_render($scope1_id, "a2", _filled_guard($scope0_reason, 1) && "b");
			_scope($scope1_id, {
				b: y,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a3"], $scope0_reason, 0);
	_script($scope0_id, "a4");
	$fg__input_label && $cg__input_show && _patch_render($scope0_id, "a1", "f");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 0) && input.label,
		g: n
	}) || $fg__input_label && $cg__input_show && _patch_write($scope0_id, "xf", input.label, !$sg__input_label);
}, 1);

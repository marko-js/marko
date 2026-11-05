// template.marko
_shells({
	a4: "a4 a3;D l%;<p> </p><!><!>",
	a: "a !a8; b%;<button class=open>inc</button><!><!>",
	a5: "a5 a3;D l%;<p> </p><!><!>",
	a6: "a6;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $sg__input_label = _server_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", Promise.resolve(input.label), (x) => {
				const $scope2_id = _scope_id();
				_filled_guard($scope0_reason, 1) && _patch_write($scope2_id, "xd", x, !$sg__input_label);
				_html(`<p>${_text_mark($scope2_id, "a", x, 1, $scope0_reason, 1)}</p>`);
				_if(() => {}, $scope2_id, "b", 1, 1, 0, 0, 1);
				_script($scope2_id, "a2", 1, _filled_guard($scope0_reason, 1), "d");
				_filled_guard($scope0_reason, 1) && _patch_render($scope2_id, "a0", "d");
				_subscribe($n__closures, _scope($scope2_id, { d: x }), "a3");
			}, 1, "a4", _unfilled_if($scope0_reason, 1));
			$cg__input_label && _patch_render($scope1_id, "a7");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a6"], $scope0_reason, 0);
	_script($scope0_id, "a8");
	$fg__input_label && $cg__input_show && _patch_render($scope0_id, "a7", "f");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 0) && input.label,
		g: n,
		i: $n__closures
	}) || $fg__input_label && $cg__input_show && _patch_write($scope0_id, "xf", input.label, !$sg__input_label);
}, 1);

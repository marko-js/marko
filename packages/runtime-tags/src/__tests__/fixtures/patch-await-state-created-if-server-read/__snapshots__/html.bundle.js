// template.marko
_shells({
	a1: "a1;D%c%;<p><!>:<!></p>",
	a: "a !a4; b%;<button class=open>inc</button><!><!>",
	a2: "a2;D%c%;<p><!>:<!></p>",
	a3: "a3 a8;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $fg__input_label = _filled_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", Promise.resolve(n), (x) => {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_mark($scope2_id, "a", input.label, 1, $scope0_reason, 2)}:${_text_mark($scope2_id, "b", x, 2)}</p>`);
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a0", $cg__input_label);
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, {}), $cg__input_label && "a0");
			}, 1, "a1", 1);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a3"], $scope0_reason, 1);
	_script($scope0_id, "a4");
	$fg__input_label && $cg__input_show && _patch_subscribers($scope0_id, "a5", "f");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		g: n,
		h: _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && $input_label__closures
	}) || $fg__input_label && $cg__input_show && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 2));
}, 1);

// template.marko
_shells({
	a4: "a4 a11;D l%;<p> </p><!><!>",
	a: "a !a8; b%;<button class=open>inc</button><!><!>",
	a5: "a5 a11;D l%;<p> </p><!><!>",
	a6: "a6;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", Promise.resolve(input.label), (x) => {
				const $scope2_id = _scope_id();
				_filled_guard($scope0_reason, 1) && _patch_fill($scope2_id, "va2", x);
				_html(`<p>${_text_resume($scope2_id, "a", x, 1, $scope0_reason, 1)}</p>`);
				_if(() => {}, $scope2_id, "b", 1, 1, 0, 0, 1);
				_script($scope2_id, "a1");
				_subscribe($n__closures, _scope($scope2_id, { d: x }), "a3");
			}, 1, "a4");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a7");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a6"], $scope0_reason, 0);
	_script($scope0_id, "a8");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 0) && input.label,
		g: n,
		i: $n__closures
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va9", input.label, !$sg__input_label);
}, 1);

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a3: "a3 a7!a1;b%b D ;<!><!><button> </button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_a = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = 1;
			_if(() => {
				{
					const $scope2_id = _scope_id();
					_html(`<span>${_text_resume($scope2_id, "a", input.a, $wg__input_a)}</span>`);
					_subscribe($wi__input_a && $input_a__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_a);
					return 0;
				}
			}, $scope1_id, "a", 1, 1, 0, 0, 1);
			_html(`<button>${_text_resume($scope1_id, "c", x + input.b)}</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a1");
			_patch_fill($scope1_id, "va2", x, 1);
			_scope($scope1_id, {
				d: _write_if($scope0_reason, 2) && x,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: input.a,
		f: input.b,
		g: $wi__input_a && $input_a__closures
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va4", input.a, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va5", input.b, !_server_guard($scope0_reason, 2)));
}, 1);

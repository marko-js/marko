// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a3: "a3 a9!a4;b%b D ;<!><!><button> </button>",
	a2: "a2;D ;<span> </span>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = 1;
			_if(() => {
				{
					const $scope2_id = _scope_id();
					_html(`<span>${_text_resume($scope2_id, "a", input.a, 1, $scope0_reason, 1)}</span>`);
					_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_a ? "a0" : "a1");
					_subscribe(_unfilled_if($scope0_reason, 1) && $input_a__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_a && "a1");
					return 0;
				}
			}, $scope1_id, "a", 1, 1, 1, 0, 0, ["a2"]);
			_html(`<button>${_text_resume($scope1_id, "c", x + input.b)}</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a4");
			_patch_fill($scope1_id, "va5", x, 1);
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
		g: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_a__closures
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va6", input.a, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va7", input.b, !_server_guard($scope0_reason, 2)));
}, 1);

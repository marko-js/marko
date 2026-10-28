// template.marko
_shells({
	a: "a !a8;D%b ;<main><!><button>+</button></main>",
	a3: "a3;b%;<!><!><!>",
	a4: "a4;b%;<!><!><!>",
	a2: "a2 a0 a13 a14;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 3), $wg__input_inner = _write_guard($scope0_reason, 2), $wi__input_suffix = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	const $input_items__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_for_of(input.items, (item) => {
						const $scope3_id = _scope_id();
						_html(`<p>${_text_resume($scope3_id, "a", item + ":" + input.suffix + "@0")}</p>`);
						_subscribe($count__closures, _subscribe($wi__input_suffix && $input_suffix__closures, _scope($scope3_id, {
							M: item,
							_: _scope_with_id($scope2_id)
						}), _client_guard($scope0_reason, 4) && "a0"), "a1");
					}, (item) => item, $scope2_id, "a", 1, 1, 1, 0, 0, "a2", $scope0_reason, 3);
					_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, $cg__input_items ? "a5" : "a6");
					_subscribe(_unfilled_if($scope0_reason, 3) && $input_items__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_items && "a6");
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_inner, 1, 0, 0, ["a4"], $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a7");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a3"], $scope0_reason, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a8");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.inner,
		g: _write_if($scope0_reason, 0) && input.items,
		h: input.suffix,
		i: count,
		l: $wi__input_suffix && $input_suffix__closures,
		m: $count__closures,
		k: _write_if($scope0_reason, 3) && $input_items__closures
	}) || (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va9", input.inner, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va10", input.items, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && _patch_fill($scope0_id, "va11", input.suffix, !_server_guard($scope0_reason, 4)));
}, 1);

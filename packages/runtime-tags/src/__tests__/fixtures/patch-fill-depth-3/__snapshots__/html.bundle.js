// template.marko
_shells({
	a: "a !a8;D%b ;<main><!><button>+</button></main>",
	a4: "a4;b%;<!><!><!>",
	a5: "a5;b%;<!><!><!>",
	a3: "a3 a2;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 3), $wg__input_inner = _write_guard($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 1), $cg__input_inner = _client_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1), $fg__input_inner = _filled_guard($scope0_reason, 2);
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
						_html(`<p>${_text_mark($scope3_id, "a", item + ":" + input.suffix + "@0")}</p>`);
						_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope3_id, "a0");
						_patch_render($scope3_id, "a1", _filled_guard($scope0_reason, 4) && ">>>h");
						_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_suffix__closures, _scope($scope3_id, {
							M: item,
							_: _scope_with_id($scope2_id)
						}), _client_guard($scope0_reason, 4) && "a0"), "a2");
					}, (item) => item, $scope2_id, "a", 1, 1, 1, 0, 0, "a3", $scope0_reason, 3);
					_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "a6", $cg__input_items);
					_subscribe(_unfilled_if($scope0_reason, 3) && $input_items__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_items && "a6");
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_inner, 1, 0, 0, ["a5"], $scope0_reason, 2);
			$cg__input_inner && _patch_render($scope1_id, "a7");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a4"], $scope0_reason, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a8");
	$fg__input_inner && $cg__input_show && _patch_render($scope0_id, "a7", "f");
	_scope($scope0_id, {
		f: ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.inner,
		g: _write_if($scope0_reason, 0) && input.items,
		h: input.suffix,
		i: count,
		l: _write_if($scope0_reason, 4) && $input_suffix__closures,
		m: $count__closures,
		k: _write_if($scope0_reason, 3) && $input_items__closures
	}) || ($fg__input_inner && $ui__input_show && _patch_write($scope0_id, "xf", input.inner, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xg", input.items, !_server_guard($scope0_reason, 3)) && ($cg__input_show || $cg__input_inner) && _patch_subscribers($scope0_id, "a9", "g"), _filled_guard($scope0_reason, 4) && _patch_write($scope0_id, "xh", input.suffix, !_server_guard($scope0_reason, 4)) && ($cg__input_show || $cg__input_inner || $cg__input_items) && _patch_subscribers($scope0_id, "a10", "h"));
}, 1);

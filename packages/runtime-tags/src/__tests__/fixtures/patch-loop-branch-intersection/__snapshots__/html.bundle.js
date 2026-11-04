// template.marko
_shells({
	a: "a !a6;D%b ;<main><!><button>+</button></main>",
	a4: "a4;b%;<!><!><!>",
	a3: "a3 a2;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_flag = _write_guard($scope0_reason, 1), $fg__input_flag = _filled_guard($scope0_reason, 1), $fg__input_suffix = _filled_guard($scope0_reason, 2), $cg__input_items = _client_guard($scope0_reason, 0), $cg__input_flag = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.flag) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_mark($scope2_id, "a", item + ":" + input.suffix + "@0")}</p>`);
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a0");
				_patch_render($scope2_id, "a1", _filled_guard($scope0_reason, 2) && ">>g");
				_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_suffix__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 2) && "a0"), "a2");
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_flag, 1, 0, 0, ["a3"], $scope0_reason, 1);
		$cg__input_flag && _patch_render($scope1_id, "a5");
		_scope($scope1_id, {
			M: item,
			_: _scope_with_id($scope0_id)
		});
	}, (item) => item, $scope0_id, "a", 1, 1, 1, 0, 0, "a4", $scope0_reason, 0);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a6");
	$fg__input_flag && $cg__input_items && _patch_render($scope0_id, "a5", "f");
	$fg__input_suffix && ($cg__input_items || $cg__input_flag) && _patch_subscribers($scope0_id, "a7", "g");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.flag,
		g: input.suffix,
		h: count,
		j: _write_if($scope0_reason, 2) && $input_suffix__closures,
		k: $count__closures
	}) || ($fg__input_flag && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.flag, !_server_guard($scope0_reason, 1)), $fg__input_suffix && _patch_write($scope0_id, "xg", input.suffix, !_server_guard($scope0_reason, 2)));
}, 1);

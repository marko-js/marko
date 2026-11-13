// template.marko
_shells({
	a: "a !a6;D%b ;<main><!><button>+</button></main>",
	a4: "a4;b%;<!><!><!>",
	a3: "a3 a2;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 0), $cg__input_items = _client_guard($scope0_reason, 1), $fg__input_items = _filled_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_for_of(input.items, (item) => {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_mark($scope2_id, "a", item + ":" + input.suffix + "@0")}</p>`);
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a0");
				_patch_render($scope2_id, "a1", _filled_guard($scope0_reason, 2) && ">>g");
				_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_suffix__closures, _scope($scope2_id, {
					M: item,
					_: _scope_with_id($scope1_id)
				}), _client_guard($scope0_reason, 2) && "a0"), "a2");
			}, (item) => item, $scope1_id, "a", 1, 1, 1, 0, 0, "a3", $scope0_reason, 1);
			$cg__input_items && _patch_render($scope1_id, "a5");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a4"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a6");
	$fg__input_items && $cg__input_show && _patch_render($scope0_id, "a5", "f");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 0) && ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.items,
		g: input.suffix,
		h: count,
		j: _write_if($scope0_reason, 2) && $input_suffix__closures,
		k: $count__closures
	}) || ($fg__input_items && $ui__input_show && _patch_write($scope0_id, "xf", input.items, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xg", input.suffix, !_server_guard($scope0_reason, 2)) && ($cg__input_show || $cg__input_items) && _patch_subscribers($scope0_id, "a7", "g"));
}, 1);

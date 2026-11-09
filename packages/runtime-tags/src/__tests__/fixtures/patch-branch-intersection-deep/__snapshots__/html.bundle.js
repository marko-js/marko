// template.marko
_shells({
	a: "a !a6;D%b ;<main><!><button>+</button></main>",
	a4: "a4;b%;<!><!><!>",
	a3: "a3 a2;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_inner = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_inner = _filled_guard($scope0_reason, 1), $fg__input_title = _filled_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 0), $cg__input_inner = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html(`<p>${_text_mark($scope2_id, "a", input.title + " #0")}</p>`);
					_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a0");
					_patch_render($scope2_id, "a1", _filled_guard($scope0_reason, 2) && ">>g");
					_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_title__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 2) && "a0"), "a2");
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_inner, 1, 0, 0, ["a3"], $scope0_reason, 1);
			$cg__input_inner && _patch_render($scope1_id, "a5");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a4"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a6");
	$fg__input_inner && $cg__input_show && _patch_render($scope0_id, "a5", "f");
	$fg__input_title && ($cg__input_show || $cg__input_inner) && _patch_subscribers($scope0_id, "a7", "g");
	_scope($scope0_id, {
		f: ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.inner,
		g: input.title,
		h: count,
		j: _write_if($scope0_reason, 2) && $input_title__closures,
		k: $count__closures
	}) || ($fg__input_inner && $ui__input_show && _patch_write($scope0_id, "xf", input.inner, !_server_guard($scope0_reason, 1)), $fg__input_title && _patch_write($scope0_id, "xg", input.title, !_server_guard($scope0_reason, 2)));
}, 1);

// template.marko
_shells({
	a: "a !a5;b%b ;<!><!><button>+</button>",
	a4: "a4 a7;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $cg__input_items = _client_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_for_of(input.items, (i) => {
		const $scope1_id = _scope_id(), $fg__input_items = _filled_guard($scope0_reason, 0);
		const $for_content__i__closures = /* @__PURE__ */ new Set();
		$fg__input_items && _patch_write($scope1_id, "xc", i, !_server_guard($scope0_reason, 0));
		_dynamic_tag($scope1_id, "a", i % 2 ? "p" : "div", { "data-n": count }, 0, _content("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(_text_mark($scope2_id, "a", i, $wg__input_items * 2));
			$cg__input_items && _patch_render($scope2_id, "a1");
			_subscribe($wi__input_items && $for_content__i__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_items && "a1", $wg__input_items);
		}, $scope1_id));
		$fg__input_items && _patch_subscribers($scope1_id, "a2", "c");
		_patch_render($scope1_id, "a3", $fg__input_items && "c");
		_scope($scope1_id, {
			c: i,
			_: _scope_with_id($scope0_id),
			h: $wi__input_items && $for_content__i__closures
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "a4", $scope0_reason, 0);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a5");
	_scope($scope0_id, { f: count });
}, 1);

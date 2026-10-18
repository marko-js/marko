// template.marko
_shells({
	a: "a !a4;b%b ;<!><!><button>+</button>",
	a0: "a0 a7;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_for_of(input.items, (i) => {
		const $scope1_id = _scope_id();
		const $for_content__i__closures = /* @__PURE__ */ new Set();
		_content_withhold(i), _filled_guard($scope0_reason, 0) && _patch_value($scope1_id, "va3", i);
		_dynamic_tag($scope1_id, "a", i % 2 ? "p" : "div", { "data-n": count }, _content("a1", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(_text_resume($scope2_id, "a", i, $wg__input_items));
			_subscribe($wi__input_items && $for_content__i__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a2", $wg__input_items);
			$wg__input_items || _resume_branch($scope2_id);
		}, $scope1_id));
		_scope($scope1_id, {
			c: i,
			_: _scope_with_id($scope0_id),
			h: $wi__input_items && $for_content__i__closures
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a0", $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a4");
	_patch_value($scope0_id, "va5", count, 1);
	$scope0_page && _scope($scope0_id, { f: count });
}, 1);

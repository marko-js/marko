// template.marko
_shells({
	a: "a !a4;b%b ;<!><!><button>+</button>",
	a3: "a3 a6;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_for_of(input.items, (i) => {
		const $scope1_id = _scope_id();
		const $for_content__i__closures = /* @__PURE__ */ new Set();
		_content_withhold(i), _filled_guard($scope0_reason, 0) && _patch_fill($scope1_id, "va2", i);
		_dynamic_tag($scope1_id, "a", i % 2 ? "p" : "div", { "data-n": count }, _content("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			const $scope2_page = _page_render();
			_html(_text_resume($scope2_id, "a", i, $wg__input_items));
			$scope2_page && _subscribe($wi__input_items && $for_content__i__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1", $wg__input_items);
			$wg__input_items || _resume_branch($scope2_id);
		}, $scope1_id));
		$scope0_page && _scope($scope1_id, {
			c: i,
			_: _scope_with_id($scope0_id),
			h: $wi__input_items && $for_content__i__closures
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a3", $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a4");
	$scope0_page && _scope($scope0_id, { f: count });
}, 1);

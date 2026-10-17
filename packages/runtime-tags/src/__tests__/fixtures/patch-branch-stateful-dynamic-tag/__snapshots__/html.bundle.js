// template.marko
_shells({
	a: "a !a3;b%b ;<!><!><button>+</button>",
	a0: "a0 a7;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", "i", {}, _content("a1", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(_text_resume($scope2_id, "a", input.label, $wg__input_label));
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a2", $wg__input_label);
				$wg__input_label || _resume_branch($scope2_id);
			}, $scope1_id));
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	_patch_value($scope0_id, "va5", count, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.label,
		g: count,
		h: $wi__input_label && $input_label__closures
	}) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va4", input.label, !_server_guard($scope0_reason, 1));
}, 1);

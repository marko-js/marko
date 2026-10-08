// template.marko
_shells({
	a: "a !a5;D%b ;<main><!><button>+</button></main>",
	a0: "a0;b%;<!><!><!>",
	a1: "a1 a10 a11;D ;<p> </p>",
	a2: "a2,<p>shown</p>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_inner = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope3_id = _scope_id();
			_html("<p>shown</p>");
			$scope0_page && _scope($scope3_id, {});
			return 0;
		} else {
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html(`<p>${_text_resume($scope2_id, "a", input.title + "@0")}</p>`);
					_subscribe($count__closures, _subscribe(_source_if($scope0_reason, 3) && $input_title__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 3) && "a3"), "a4");
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_inner, void 0, void 0, void 0, ["a1"], $scope0_reason, 2);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 1;
		}
	}, $scope0_id, "a", 1, _source_guard($scope0_reason, 1), void 0, void 0, void 0, ["a2", "a0"], $scope0_reason, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a5");
	_patch_value($scope0_id, "a8", count, 1);
	$scope0_page ? _scope($scope0_id, {
		f: _unfilled_if($scope0_reason, 1) && input.inner,
		g: input.title,
		h: count,
		j: $input_title__closures,
		k: $count__closures
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "a6", input.inner), _filled_guard($scope0_reason, 3) && _patch_value($scope0_id, "a7", input.title));
}, 1);

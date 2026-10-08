// template.marko
_shells({
	a: "a !a3;E l%b ;<main><h1> </h1><!><button>+</button></main>",
	a0: "a0;b%;<p>promo</p><!><!>",
	a1: "a1 a7;Db%;<span>Seen <!></span>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_inner = _source_guard($scope0_reason, 3), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 1)}</h1>`);
	_if(() => {
		if (input.outer) {
			const $scope1_id = _scope_id();
			_html("<p>promo</p>");
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html(`<span>Seen ${_text_resume($scope2_id, "a", count, 2)}</span>`);
					_subscribe($count__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a2");
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_inner, void 0, void 0, void 0, ["a1"], $scope0_reason, 3);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _source_guard($scope0_reason, 2), void 0, void 0, void 0, ["a0"], $scope0_reason, 2);
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a3");
	_patch_value($scope0_id, "a5", count, 1);
	$scope0_page ? _scope($scope0_id, {
		h: _unfilled_if($scope0_reason, 2) && input.inner,
		i: count,
		k: $count__closures
	}) : _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "a4", input.inner);
}, 1);

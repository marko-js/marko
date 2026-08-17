// template.marko
_shells({
	a0: "a0;D ;<aside> </aside>",
	a1: "a1;D ;<li> </li>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 0), $sg__input_promo = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main><ul>");
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_patch_text($scope2_id, "a", item.label, $scope0_owned, 0)}${_el_resume($scope2_id, "a")}</li>`);
		writeScope($scope2_id, {});
	}, "id", $scope0_id, "a", 1, $sg__input_items, $sg__input_items, void 0, void 0, "a1");
	_html(`</ul>${_el_resume($scope0_id, "a", $sg__input_items)}`);
	_if(() => {
		if (input.promo) {
			const $scope1_id = _scope_id();
			_html(`<aside>${_patch_text($scope1_id, "a", input.promo, $scope0_owned, 1)}${_el_resume($scope1_id, "a")}</aside>`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, $sg__input_promo, $sg__input_promo, void 0, void 0, ["a0"]);
	_html(`<p>${_patch_text($scope0_id, "c", input.note, $scope0_owned, 2)}${_el_resume($scope0_id, "c")}</p><button>Count <!>${_escape(count)}${_el_resume($scope0_id, "e")}</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a2");
	$scope0_reason && writeScope($scope0_id, {
		i: input.promo,
		k: count
	});
	_resume_branch($scope0_id);
}, 1, 0);

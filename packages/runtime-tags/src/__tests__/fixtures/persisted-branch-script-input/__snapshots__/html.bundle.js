// template.marko
_shells({ a0: "a0 !a1,<p>promo</p>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 1)}${_el_resume($scope0_id, "a")}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<p>promo</p>");
			_script($scope1_id, "a1");
			_patch_effect($scope1_id, "a1", "g 1");
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"]);
	_html("</main>");
	$scope0_reason ? writeScope($scope0_id, { g: input.value }) : _owned_guard($scope0_owned, 3) && _patch_write($scope0_id, "g", input.value);
}, 1, 0);

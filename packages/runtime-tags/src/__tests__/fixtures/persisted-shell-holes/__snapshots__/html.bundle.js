// template.marko
_shells({
	a: "a;E l%;<main><h1> </h1><!></main>",
	a0: "a0; D ;<a> </a>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_owned, 2)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<a${_patch_attr($scope1_id, "a", "href", input.href, $scope0_owned, 4)}${_patch_attr($scope1_id, "a", "hidden", input.hidden, $scope0_owned, 5)}>${_patch_text($scope1_id, "b", input.label, void 0, $scope0_owned, 6)}</a>${_el_resume($scope1_id, "a")}`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_owned, 3);
	_html("</main>");
	$scope0_reason && _scope($scope0_id, {
		g: input.href,
		h: input.hidden,
		i: input.label
	});
}, 1, 0);

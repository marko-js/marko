// template.marko
_renderer_shells({ a0: ",`a0; D ;<a> </a>`" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason(), $sg__input_show = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title)}${_el_resume($scope0_id, "a")}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<a${_patch_attr($scope1_id, "a", "href", input.href)}${_patch_attr($scope1_id, "a", "hidden", input.hidden)}>${_patch_text($scope1_id, "b", input.label)}${_el_resume($scope1_id, "b")}</a>${_el_resume($scope1_id, "a")}`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", _serialize_guard($scope0_reason, 1), $sg__input_show, $sg__input_show, void 0, void 0, ["a0"]);
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {
		g: input.href,
		h: input.hidden,
		i: input.label
	});
}, 1);

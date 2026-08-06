// template.marko
_renderer_shells({ a0: ",`a0;Db%;<p>Value <!></p>`" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>Value <!>${_patch_text($scope1_id, "a", 1)}${_el_resume($scope1_id, "a")}</p>`);
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", $sg__input_show, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"]);
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {});
}, 1);

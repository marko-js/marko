// template.marko
_shells({
	a0: "a0,<p>shown</p>",
	a1: "a1;D ;<li> </li>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1), $sg__input_items = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<div class=wrap><h1>Hello <!>${_patch_text($scope0_id, "a", input.name, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<p>shown</p>");
			$scope0_reason && writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"]);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_patch_text($scope2_id, "a", item, $scope0_owned, 2)}${_el_resume($scope2_id, "a")}</li>`);
		writeScope($scope2_id, {});
	}, 0, $scope0_id, "c", 1, $sg__input_items, $sg__input_items, void 0, void 0, "a1");
	_html("</div>");
	$scope0_reason && writeScope($scope0_id, {});
}, 1, 0);

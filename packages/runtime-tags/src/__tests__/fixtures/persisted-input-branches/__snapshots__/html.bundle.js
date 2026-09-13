// template.marko
_shells({
	a: "a;Eb%l%b%;<div class=wrap><h1>Hello <!></h1><!><!></div>",
	a0: "a0,<p>shown</p>",
	a1: "a1;D ;<li> </li>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 1), $sg__input_items = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<div class=wrap><h1>Hello ${_patch_text($scope0_id, "a", input.name, 2, $scope0_reason, 0)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<p>shown</p>");
			$scope0_page && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_reason, 1);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_patch_text($scope2_id, "a", item, void 0, $scope0_reason, 2)}</li>`);
		_scope($scope2_id, {});
	}, 0, $scope0_id, "c", 1, $sg__input_items, $sg__input_items, void 0, void 0, "a1", $scope0_reason, 2);
	_html("</div>");
	$scope0_page && _scope($scope0_id, {});
}, 1, 0);

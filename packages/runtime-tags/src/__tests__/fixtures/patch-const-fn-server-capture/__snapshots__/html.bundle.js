// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a1: "a1;D ;<p> </p>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 5), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const fmt = _resume(function(text) {
		return text + input.decor.mark();
	}, "a0", $scope0_id);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_patch_html($scope1_id, "a", fmt(input.text), void 0, $scope0_reason, 1)}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a1"], $scope0_reason, 5);
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.decor,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.text,
		g: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && fmt
	}) : _filled_guard($scope0_reason, 4) && (_unfilled_if($scope0_reason, 1) || _unfilled_if()) && _patch_write($scope0_id, "d", input.decor);
}, 1, 0);

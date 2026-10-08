// template.marko
_shells({
	a: "a !a2; D l ;<button> </button><main></main>",
	a0: "a0 !a1,<p>shown</p>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<button>${_text_resume($scope0_id, "b", clicks)}</button>${_el_resume($scope0_id, "a")}<main>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const label = input.title + "!";
			_filled_guard($scope0_reason, 2) && _patch_write($scope1_id, "a", label);
			_html("<p>shown</p>");
			_script($scope1_id, "a1", 0);
			_patch_effect($scope1_id, "a1", "a");
			_scope($scope1_id, {
				a: label,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "c", 1, $wg__input_show, void 0, void 0, void 0, ["a0"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "c", $wg__input_show)}`);
	_script($scope0_id, "a2");
	_patch_value($scope0_id, "a4", clicks, 1);
	$scope0_page ? _scope($scope0_id, {
		g: _source_if($scope0_reason, 1) && input.title,
		h: clicks
	}) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "a3", input.title);
}, 1);

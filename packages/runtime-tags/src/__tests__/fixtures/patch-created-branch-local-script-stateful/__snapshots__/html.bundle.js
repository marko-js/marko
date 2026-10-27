// template.marko
_shells({
	a: "a !a3; D l ;<button> </button><main></main>",
	a2: "a2,<p>shown</p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 1), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<button>${_text_resume($scope0_id, "b", clicks)}</button>${_el_resume($scope0_id, "a")}<main>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const label = input.title + "!";
			_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "xa", label, !$sg__input_title);
			_html("<p>shown</p>");
			_script($scope1_id, "a0", 0);
			_filled_guard($scope0_reason, 1) && _patch_effect($scope1_id, $cg__input_title ? "ha0" : "ea0", "a");
			$cg__input_title && _patch_init($scope1_id, "a1");
			$scope0_page && _scope($scope1_id, {
				a: label,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "c", 1, $wg__input_show, void 0, void 0, void 0, ["a2"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "c", $wg__input_show)}`);
	_script($scope0_id, "a3");
	$scope0_page ? _scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.title,
		h: clicks
	}) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va4", input.title, !$sg__input_title);
}, 1);

// template.marko
_shells({
	a: "a !; ;<main></main>",
	a0: "a0;D l%;<p> </p><!><!>",
	a1: "a1 !a2,<span>inner</span>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _source_guard($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const label = input.title + "!";
			_filled_guard($scope0_reason, 3) && _patch_write($scope1_id, "c", label);
			_html(`<p>${_patch_text($scope1_id, "a", label, void 0, $scope0_reason, 3)}</p>`);
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html("<span>inner</span>");
					_script($scope2_id, "a2", 0);
					_patch_effect($scope2_id, "a2", "1 c");
					_scope($scope2_id, { _: _scope_with_id($scope1_id) });
					return 0;
				}
			}, $scope1_id, "b", 1, _source_guard($scope0_reason, 4), void 0, void 0, void 0, ["a1"], $scope0_reason, 4);
			_scope($scope1_id, {
				c: label,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a0"], $scope0_reason, 2);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, {
		e: input.title,
		f: _unfilled_if($scope0_reason, 2) && input.inner
	}) : (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "a3", input.title), _filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "a4", input.inner));
}, 1);

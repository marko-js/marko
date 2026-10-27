// template.marko
_shells({
	a: "a !; ;<main></main>",
	a3: "a3;D l%;<p> </p><!><!>",
	a2: "a2,<span>inner</span>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 2), $cg__input_inner = _client_guard($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 1), $sg__input_title = _server_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const label = input.title + "!";
			_filled_guard($scope0_reason, 2) && _patch_write($scope1_id, "xc", label, !$sg__input_title);
			_html(`<p>${_patch_text($scope1_id, "a", label, void 0, $scope0_reason, 2)}</p>`);
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html("<span>inner</span>");
					_script($scope2_id, "a0", 0, _filled_guard($scope0_reason, 2), ">c");
					$cg__input_title && _patch_init($scope2_id, "a1");
					_scope($scope2_id, { _: _scope_with_id($scope1_id) });
					return 0;
				}
			}, $scope1_id, "b", 1, _write_guard($scope0_reason, 3), void 0, void 0, void 0, ["a2"], $scope0_reason, 3);
			_filled_guard($scope0_reason, 2) && ($cg__input_show || $cg__input_inner) && _patch_effect($scope1_id, "ia1", "c");
			$cg__input_title && _patch_init($scope1_id, "a4");
			$cg__input_inner && _patch_init($scope1_id, "a5");
			_scope($scope1_id, {
				c: label,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a3"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.title,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.inner
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "va6", input.title, !$sg__input_title), _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "va7", input.inner, !_server_guard($scope0_reason, 3)));
}, 1);

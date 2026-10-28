// template.marko
_shells({
	a: "a !; ;<main></main>",
	a2: "a2 !a0;D l ;<p> </p><button>c</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const label = input.title + "!";
			_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "wc", label, !$sg__input_title);
			_html(`<p>${_text_resume($scope1_id, "a", label, void 0, $scope0_reason, 1)}</p><button>c</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a0");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a1");
			_scope($scope1_id, {
				c: label,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a2"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.title }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", input.title, !$sg__input_title);
}, 1);

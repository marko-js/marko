// template.marko
_shells({
	a: "a; ;<main></main>",
	a2: "a2 !a0;D l ;<p> </p><button>c</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const label = input.title + "!";
			_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "xc", label, !$sg__input_title);
			_html(`<p>${_text_mark($scope1_id, "a", label, 1, $scope0_reason, 1)}</p><button>c</button>${_el_mark($scope1_id, "b")}`);
			_script($scope1_id, "a0");
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a1");
			_scope($scope1_id, {
				c: label,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 0);
	_html(`</main>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	$fg__input_title && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a1", "e");
	_scope($scope0_id, { e: ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.title }) || $fg__input_title && $ui__input_show && _patch_write($scope0_id, "xe", input.title, !$sg__input_title);
}, 1);

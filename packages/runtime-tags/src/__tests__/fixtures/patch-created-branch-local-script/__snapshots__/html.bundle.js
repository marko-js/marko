// template.marko
_shells({
	a: "a; ;<main></main>",
	a2: "a2,<p>shown</p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 1), $fg__input_title2 = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id(), $fg__input_title = _filled_guard($scope0_reason, 1);
			const label = input.title + "!";
			$fg__input_title && _patch_write($scope1_id, "xa", label, !$sg__input_title);
			_html("<p>shown</p>");
			_script($scope1_id, "a0", 0, $fg__input_title);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a1");
			_scope($scope1_id, {
				a: label,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 0);
	_html(`</main>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	$fg__input_title2 && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a1", "e");
	_scope($scope0_id, { e: _write_if($scope0_reason, 0) && ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.title }) || $fg__input_title2 && $ui__input_show && _patch_write($scope0_id, "xe", input.title, !$sg__input_title);
}, 1);

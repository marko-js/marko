// template.marko
_shells({
	a1: "a1;D ;<p> </p>",
	a: "a;b%;<!><!><!>",
	a2: "a2;D ;<p> </p>",
	a3: "a3;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_p = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.p, (x) => {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_mark($scope2_id, "a", x + ":" + $global$1.f, 1, (2 | _updates_from($scope0_reason, 2)) << 1, 0)}</p>`);
				_global_subscribe("a0", $scope2_id);
				_scope($scope2_id, { c: _unfilled_if($scope0_reason, 2) && x });
			}, 1, "a1", _unfilled_if($scope0_reason, 2) && 2);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a4");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 1);
	$fg__input_p && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "a4", "e");
	_scope($scope0_id, { e: _write_if($scope0_reason, 1) && ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.p }) || $fg__input_p && $ui__input_show && _patch_write($scope0_id, "xe", input.p, !_server_guard($scope0_reason, 2));
}, 1);

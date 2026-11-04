// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a: "a; ;<main></main>",
	a1: "a1;D ;<em> </em>",
	a2: "a2;b%;<!><!><!>",
	a3: "a3,<em>closed</em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_promise = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.promise, (value) => {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_mark($scope3_id, "a", value, 1, $scope0_reason, 2)}</em>`);
				_scope($scope3_id, {});
			}, 1, "a0", _unfilled_if($scope0_reason, 2) && 2);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a4");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<em>closed</em>");
			_write_if($scope0_reason, 1) && _scope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2", "a3"], $scope0_reason, 1);
	_html(`</main>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	$fg__input_promise && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "a4", "e");
	_scope($scope0_id, { e: ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.promise }) || $fg__input_promise && $ui__input_show && _patch_write($scope0_id, "xe", input.promise, !_server_guard($scope0_reason, 2));
}, 1);

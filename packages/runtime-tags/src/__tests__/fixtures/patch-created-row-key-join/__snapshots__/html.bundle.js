// template.marko
_shells({
	a: "a; ;<ul></ul>",
	a2: "a2 !; ;<li></li>",
	a1: "a1 a7 a8!a0; D ;<button> </button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_items = _unfilled_if($scope0_reason, 0), $fg__input_show = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		let n = 0;
		let m = 1;
		_html("<li>");
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_html(`<button>${_text_mark($scope2_id, "b", item.id + n + m)}</button>${_el_mark($scope2_id, "a")}`);
				_script($scope2_id, "a0");
				_scope($scope2_id, { _: _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 1);
		_html(`</li>${_el_mark($scope1_id, "a", $wg__input_show)}`);
		_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a3");
		_patch_fill($scope1_id, "va4", n, 1);
		_patch_fill($scope1_id, "va5", m, 1);
		_scope($scope1_id, {
			M: item?.id,
			c: n,
			d: m,
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
		});
	}, "id", $scope0_id, "a", 1, 1, 1, 0, 0, "a2", $scope0_reason, 0);
	_html(`</ul>${_el_mark($scope0_id, "a")}`);
	$fg__input_show && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a3", "e");
	_scope($scope0_id, { e: ($ui__input_items || _unfilled_if($scope0_reason, 1)) && input.show }) || $fg__input_show && $ui__input_items && _patch_write($scope0_id, "xe", input.show, !_server_guard($scope0_reason, 1));
}, 1);

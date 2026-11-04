// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a3: "a3 !;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $cg__input_label = _client_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_open = _filled_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let open = input.open;
			_if(() => {
				if (open) {
					const $scope2_id = _scope_id();
					_html(`<span>${_text_mark($scope2_id, "a", input.label, $wg__input_label)}</span>`);
					$cg__input_label && _patch_render($scope2_id, "a0");
					_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {}), $cg__input_label && "a0", $wg__input_label);
					return 0;
				}
			}, $scope1_id, "a", 1, 1, 0, 0, 1);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a1");
			_filled_guard($scope0_reason, 1) && _patch_fill($scope1_id, "va2", open, 1);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 0);
	$fg__input_open && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a1", "e");
	_scope($scope0_id, {
		e: ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.open,
		f: input.label,
		h: $wi__input_label && $input_label__closures
	}) || ($fg__input_open && $ui__input_show && _patch_write($scope0_id, "xe", input.open, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "a4", "f"));
}, 1);

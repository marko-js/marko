// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a3: "a3;b%;<!><!><!>",
	a2: "a2;D ;<span> </span>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 0), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let open = input.open;
			_if(() => {
				if (open) {
					const $scope2_id = _scope_id();
					_html(`<span>${_text_resume($scope2_id, "a", input.label, 1, $scope0_reason, 2)}</span>`);
					_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_label ? "a0" : "a1");
					_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_label && "a1");
					return 0;
				}
			}, $scope1_id, "a", 1, 1, 1, 0, 0, ["a2"], (_mask_group($scope0_reason, 1) & 1) << 1, 0);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a4");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.open,
		f: input.label,
		h: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_label__closures
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_show && _patch_fill($scope0_id, "va5", input.open, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "va6", input.label, !_server_guard($scope0_reason, 2)));
}, 1);

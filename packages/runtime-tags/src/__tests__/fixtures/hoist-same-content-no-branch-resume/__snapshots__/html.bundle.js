// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_inner = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					const read = _resume(() => input.label, "a0", $scope2_id);
					_html(`<span></span>${_el_resume($scope2_id, "a")}`);
					_script($scope2_id, "a1");
					_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
						b: read,
						_: _scope_with_id($scope1_id)
					}), "a2");
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_inner, $wg__input_inner, "</div>", 1);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show, 0, 0, 1);
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.inner,
		f: input.label,
		h: $wi__input_label && $input_label__closures
	});
}, 1);

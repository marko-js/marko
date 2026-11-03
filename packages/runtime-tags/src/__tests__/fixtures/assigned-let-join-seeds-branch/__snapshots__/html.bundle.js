// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_a = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = 1;
			{
				const $scope2_id = _scope_id();
				_html(`<span>${_text_resume($scope2_id, "a", input.a, $wg__input_a)}</span>`);
				_write_if($scope0_reason, 0) && _subscribe($wi__input_a && $input_a__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_a);
			}
			_html(`<button>${_text_resume($scope1_id, "c", x + input.b)}</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a1");
			_scope($scope1_id, {
				d: _write_if($scope0_reason, 4) && x,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 1), $wg__input_show);
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 2) && input.a,
		f: input.b,
		g: $wi__input_a && $input_a__closures
	});
}, 1);

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0), $wg__input_flag = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let on = true;
	const Show = { content: _content("a1", ({ a, b }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__a__OR__b = _write_guard($scope1_reason, 0), $wi__a__OR__b = _write_if($scope1_reason, 0);
		_if(() => {
			if (a || b) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "a", input.label, $wg__input_label)}</p>`);
				($wi__input_label || $wi__a__OR__b) && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_label);
				return 0;
			}
		}, $scope1_id, "a", $wg__a__OR__b, $wg__a__OR__b, 0, 0, 1);
		($wi__input_label || $wi__a__OR__b) && _scope($scope1_id, {
			d: _write_if($scope1_reason, 2) && a,
			e: _write_if($scope1_reason, 1) && b,
			_: _scope_with_id($scope0_id)
		});
	}, $scope0_id) };
	_set_scope_reason(10 | $wg__input_flag << 5);
	const $childScope = _peek_scope_id();
	Show.content({
		a: on,
		b: input.flag
	});
	_set_scope_reason(34 | $wg__input_flag << 3);
	const $childScope2 = _peek_scope_id();
	Show.content({
		a: input.flag,
		b: on
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		f: input.label,
		h: on,
		i: $wi__input_label && $input_label__closures,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);

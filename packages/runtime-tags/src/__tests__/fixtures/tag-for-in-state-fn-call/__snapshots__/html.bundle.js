// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_sel = _write_guard($scope0_reason, 3), $wg__input_obj__OR__input_sel = _write_guard($scope0_reason, 0), $wi__input_prefix = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $s__closures = /* @__PURE__ */ new Set();
	const $fmt2__closures = /* @__PURE__ */ new Set();
	let s = 0;
	const fmt = _resume((v) => input.prefix + v, "b0", $scope0_id);
	_for_in(input.obj, (k, v) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (k === input.sel) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_resume($scope2_id, "a", fmt(v + s))}</span>`);
				_subscribe($wi__input_prefix && $fmt2__closures, _subscribe($s__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b1"), "b2");
				return 0;
			}
		}, $scope1_id, "a", $wg__input_obj__OR__input_sel, $wg__input_sel, 0, 0, 1);
		_scope($scope1_id, {
			M: _write_if($scope0_reason, 3) && k,
			e: v,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", $wg__input_obj__OR__input_sel, _write_guard($scope0_reason, 2));
	_html(`<button class=s>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b3");
	_scope($scope0_id, {
		e: input.prefix,
		g: _write_if($scope0_reason, 2) && input.sel,
		h: s,
		i: fmt,
		k: $s__closures,
		l: $wi__input_prefix && $fmt2__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let pre = "a";
	_set_scope_reason(8 | (_write_guard($scope0_reason, 0) << 1 | _write_guard($scope0_reason, 1) << 5 | _write_guard($scope0_reason, 2) << 7));
	const $childScope = _peek_scope_id();
	card_default({
		obj: input.obj,
		sel: input.sel,
		prefix: input.dyn ? pre : input.prefix
	});
	_html(`<button class=p>p</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: input.dyn,
		h: input.prefix,
		i: pre,
		a: _existing_scope($childScope)
	});
}, 1);

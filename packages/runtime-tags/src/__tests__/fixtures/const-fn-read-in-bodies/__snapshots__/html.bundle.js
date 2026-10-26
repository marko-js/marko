// tags/counter.marko
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { c: n });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a__OR__input_items = _write_guard($scope0_reason, 0), $wg__input_a = _write_guard($scope0_reason, 5), $wg__input_x = _write_guard($scope0_reason, 7), $wi__input_x = _write_if($scope0_reason, 7), $wi__input_a__OR__input_items__OR__input_x = _write_if($scope0_reason, 3), $wg__input_a__OR__input_items__OR__input_x = _write_guard($scope0_reason, 3), $wg__input_value = _write_guard($scope0_reason, 8), $wi__input_a = _write_if($scope0_reason, 5), $wi__input_a__OR__input_value = _write_if($scope0_reason, 1), $wg__input_items = _write_guard($scope0_reason, 6), $wi__input_items__OR__input_value = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $f2__closures = /* @__PURE__ */ new Set();
	const $input_x__closures = /* @__PURE__ */ new Set();
	const f = _resume(function() {
		return input.a;
	}, "a0", $scope0_id);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const v = input.a + item;
		const g = _resume(function() {
			return v;
		}, "a1", $scope1_id);
		_html(`<span>${_text_resume($scope1_id, "a", f(), $wg__input_a)}</span>`);
		_if(() => {
			if (input.x) {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_resume($scope4_id, "a", g(), $wg__input_a__OR__input_items)}</em>`);
				$wi__input_a__OR__input_items__OR__input_x && _scope($scope4_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "b", $wg__input_a__OR__input_items__OR__input_x, $wg__input_x, 0, 0, 1);
		$wi__input_a__OR__input_items__OR__input_x && _scope($scope1_id, {
			d: $wi__input_a && item,
			f: $wi__input_x && v,
			g: $wi__input_x && g,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", $wg__input_a__OR__input_items__OR__input_x, $wg__input_items);
	_await($scope0_id, "b", input.value, (v) => {
		const $scope3_id = _scope_id();
		_html(`<b>${_text_resume($scope3_id, "a", v, $wg__input_value)}${_text_resume($scope3_id, "b", f(), $wg__input_a * 2)}</b>`);
		$wi__input_a__OR__input_value && _subscribe($wi__input_a && $f2__closures, _scope($scope3_id, { _: _scope_with_id($scope0_id) }), "a3", $wg__input_a || $wg__input_value);
		$wg__input_a || $wg__input_value || $wi__input_a__OR__input_value && _resume_branch($scope3_id);
	}, _write_guard($scope0_reason, 1));
	const Show = { content: _content("a4", ({ v }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__v = _write_guard($scope2_reason, 0), $wi__v = _write_if($scope2_reason, 0);
		const h = _resume(function() {
			return v;
		}, "a2", $scope2_id);
		_if(() => {
			if (input.x) {
				const $scope5_id = _scope_id();
				_html(`<i>${_text_resume($scope5_id, "a", h(), $wg__v)}</i>`);
				($wi__input_x || $wi__v) && _scope($scope5_id, { _: $wi__v && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", $wg__input_x || $wg__v, $wg__input_x, 0, 0, 1);
		$wi__input_x && _subscribe($input_x__closures, _scope($scope2_id, {
			d: v,
			e: h,
			_: _scope_with_id($scope0_id)
		}), "a5", $wg__input_x);
		$wg__input_x || $wi__input_x && _resume_branch($scope2_id);
	}, $scope0_id) };
	_set_scope_reason($wg__input_a << 1);
	const $childScope = _peek_scope_id();
	Show.content({ v: input.a });
	counter_default({});
	_write_if($scope0_reason, 4) && _scope($scope0_id, {
		g: $wi__input_items__OR__input_value && input.a,
		i: _write_if($scope0_reason, 6) && input.x,
		k: $wi__input_items__OR__input_value && f,
		n: $wi__input_a && $f2__closures,
		m: $wi__input_x && $input_x__closures,
		c: $wi__input_a && _existing_scope($childScope)
	});
}, 1);

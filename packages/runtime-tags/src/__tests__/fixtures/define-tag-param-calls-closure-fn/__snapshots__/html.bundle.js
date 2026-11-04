// tags/counter.marko
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { c: n });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 2), $wi__input_a = _write_if($scope0_reason, 2), $wg__input_x = _write_guard($scope0_reason, 3), $wg__input_y = _write_guard($scope0_reason, 4), $wi__input_x__OR__input_y = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $f2__closures = /* @__PURE__ */ new Set();
	const f = _resume(function() {
		return input.a;
	}, "a0", $scope0_id);
	const D = { content: _content("a2", ({ on }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__on = _write_guard($scope1_reason, 0), $wi__on = _write_if($scope1_reason, 0);
		_if(() => {
			if (on) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_resume($scope2_id, "a", f(), $wg__input_a)}</span>`);
				($wi__input_a || $wi__on) && _subscribe($wi__input_a && $f2__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1", $wg__input_a);
				return 0;
			}
		}, $scope1_id, "a", $wg__on, $wg__on, 0, 0, 1);
		($wi__input_a || $wi__on) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) };
	_set_scope_reason($wg__input_x << 1);
	const $childScope = _peek_scope_id();
	D.content({ on: input.x });
	_set_scope_reason($wg__input_y << 1);
	const $childScope2 = _peek_scope_id();
	D.content({ on: input.y });
	counter_default({});
	_write_if($scope0_reason, 1) && _scope($scope0_id, {
		f: $wi__input_x__OR__input_y && input.a,
		i: $wi__input_x__OR__input_y && f,
		j: $wi__input_a && $f2__closures,
		a: _write_if($scope0_reason, 3) && _existing_scope($childScope),
		b: _write_if($scope0_reason, 4) && _existing_scope($childScope2)
	});
}, 1);

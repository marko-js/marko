// tags/shape.marko
var shape_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1), $wi__input_a = _write_if($scope0_reason, 1), $wi__input_x__OR__input_y = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $f2__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const f = _resume(function() {
		return input.a;
	}, "b0", $scope0_id);
	const D = { content: _content("b2", ({ on }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__on = _write_guard($scope1_reason, 0), $wi__on = _write_if($scope1_reason, 0);
		_if(() => {
			if (on) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_resume($scope2_id, "a", f(), $wg__input_a)}</span>`);
				($wi__input_a || $wi__on) && _subscribe($wi__input_a && $f2__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b1", $wg__input_a);
				return 0;
			}
		}, $scope1_id, "a", $wg__on, $wg__on, 0, 0, 1);
		($wi__input_a || $wi__on) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) };
	_set_scope_reason(_write_guard($scope0_reason, 2) << 1);
	const $childScope = _peek_scope_id();
	D.content({ on: input.x });
	_set_scope_reason(_write_guard($scope0_reason, 3) << 1);
	const $childScope2 = _peek_scope_id();
	D.content({ on: input.y });
	_html(`<button>${_text_resume($scope0_id, "d", n)}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b3");
	_scope($scope0_id, {
		g: $wi__input_x__OR__input_y && input.a,
		j: n,
		k: $wi__input_x__OR__input_y && f,
		l: $wi__input_a && $f2__closures,
		a: _write_if($scope0_reason, 2) && _existing_scope($childScope),
		b: _write_if($scope0_reason, 3) && _existing_scope($childScope2)
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1 | _write_guard($scope0_reason, 2) << 3 | _write_guard($scope0_reason, 3) << 5 | _write_guard($scope0_reason, 4) << 7);
	const $childScope = _peek_scope_id();
	shape_default({
		a: input.a,
		x: input.x,
		y: input.y
	});
	_write_if($scope0_reason, 1) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);

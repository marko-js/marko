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
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1), $wi__input_a = _write_if($scope0_reason, 1), $wg__input_x = _write_guard($scope0_reason, 2), $wi__input_x = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $f2__closures = /* @__PURE__ */ new Set();
	const f = _resume(function() {
		return input.a;
	}, "a0", $scope0_id);
	const D = { content: _content("a2", ({ on, depth }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__on = _write_guard($scope1_reason, 1), $wg__on__OR__depth = _write_guard($scope1_reason, 0), $wi__on__OR__depth = _write_if($scope1_reason, 0), $wg__depth = _write_guard($scope1_reason, 2);
		_if(() => {
			if (depth) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_resume($scope2_id, "a", on && f(), $wg__input_a || $wg__on)}</span>`);
				_set_scope_reason($wg__on__OR__depth << 1 | $wg__on << 3 | $wg__depth << 5);
				const $childScope = _peek_scope_id();
				D.content({
					on,
					depth: depth - 1
				});
				($wi__input_a || $wi__on__OR__depth) && _subscribe($wi__input_a && $f2__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					b: $wi__on__OR__depth && _existing_scope($childScope)
				}), "a1", $wg__input_a || $wg__on || $wg__on__OR__depth);
				return 0;
			}
		}, $scope1_id, "a", $wg__on__OR__depth, $wg__depth);
		($wi__input_a || $wi__on__OR__depth) && _scope($scope1_id, {
			d: ($wi__input_a || _write_if($scope1_reason, 2)) && on,
			_: _scope_with_id($scope0_id)
		});
	}, $scope0_id) };
	_set_scope_reason($wg__input_x << 1 | $wg__input_x << 3);
	const $childScope2 = _peek_scope_id();
	D.content({
		on: input.x,
		depth: 2
	});
	counter_default({});
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		e: $wi__input_x && input.a,
		g: $wi__input_x && f,
		h: $wi__input_a && $f2__closures,
		a: $wi__input_x && _existing_scope($childScope2)
	});
}, 1);

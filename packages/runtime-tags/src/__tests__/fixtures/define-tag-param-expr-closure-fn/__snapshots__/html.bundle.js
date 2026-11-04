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
	const D = { content: _content("a1", ({ on }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__on = _write_guard($scope1_reason, 0), $wi__on = _write_if($scope1_reason, 0);
		_html(`<span>${_text_resume($scope1_id, "a", on && f(), $wg__input_a || $wg__on)}</span>`);
		($wi__input_a || $wi__on) && _subscribe($wi__input_a && $f2__closures, _scope($scope1_id, {
			d: $wi__input_a && on,
			_: _scope_with_id($scope0_id)
		}), "a2", $wg__input_a || $wg__on);
		$wg__input_a || $wg__on || ($wi__input_a || $wi__on) && _resume_branch($scope1_id);
	}, $scope0_id) };
	_set_scope_reason($wg__input_x << 1);
	const $childScope = _peek_scope_id();
	D.content({ on: input.x });
	counter_default({});
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		e: $wi__input_x && input.a,
		g: $wi__input_x && f,
		h: $wi__input_a && $f2__closures,
		a: $wi__input_x && _existing_scope($childScope)
	});
}, 1);

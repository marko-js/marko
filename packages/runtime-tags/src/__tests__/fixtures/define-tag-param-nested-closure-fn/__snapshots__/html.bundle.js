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
	const $input_a__closures = /* @__PURE__ */ new Set();
	const f = _resume(function() {
		return input.a;
	}, "a0", $scope0_id);
	const E = { content: _content("a2", ({ show }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__show = _write_guard($scope2_reason, 0), $wi__show = _write_if($scope2_reason, 0);
		_if(() => {
			if (show) {
				const $scope3_id = _scope_id();
				_html(`<span>${_text_resume($scope3_id, "a", f(), $wg__input_a)}</span>`);
				($wi__input_a || $wi__show) && _subscribe($wi__input_a && $f2__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), "a1", $wg__input_a);
				return 0;
			}
		}, $scope2_id, "a", $wg__show, $wg__show, 0, 0, 1);
		($wi__input_a || $wi__show) && _scope($scope2_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) };
	const D = { content: _content("a3", ({ on }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__on = _write_guard($scope1_reason, 0), $wi__on = _write_if($scope1_reason, 0);
		_set_scope_reason($wg__on << 1);
		const $childScope = _peek_scope_id();
		E.content({ show: on });
		_html(`<p>${_text_resume($scope1_id, "b", input.a, $wg__input_a)}</p>`);
		const $scope1_guard = $wg__input_a || $wg__on;
		($wi__input_a || $wi__on) && _subscribe($wi__input_a && $input_a__closures, _scope($scope1_id, {
			_: $wi__input_a && _scope_with_id($scope0_id),
			a: $wi__on && _existing_scope($childScope)
		}), "a4", $scope1_guard);
		$scope1_guard || ($wi__input_a || $wi__on) && _resume_branch($scope1_id);
	}, $scope0_id) };
	_set_scope_reason($wg__input_x << 1);
	const $childScope2 = _peek_scope_id();
	D.content({ on: input.x });
	counter_default({});
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		e: $wi__input_x && input.a,
		g: $wi__input_x && f,
		i: $wi__input_a && $f2__closures,
		h: $wi__input_a && $input_a__closures,
		a: $wi__input_x && _existing_scope($childScope2)
	});
}, 1);

// tags/note.marko
var note_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<p>${_text_resume($scope0_id, "a", input.label, $wg__input_label)}</p>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/toggle.marko
var toggle_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 0), $wi__input_on = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			_html("<i>on</i>");
			$wi__input_on && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", $wg__input_on, $wg__input_on, 0, 0, 1);
	$wi__input_on && _scope($scope0_id, {});
});

// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0), $wg__input_slow = _write_guard($scope0_reason, 1), $wi__input_slow = _write_if($scope0_reason, 1), $wg__input_other = _write_guard($scope0_reason, 2), $wi__input_other = _write_if($scope0_reason, 2), $wg__input_failing = _write_guard($scope0_reason, 3), $wi__input_failing = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_slow__closures = /* @__PURE__ */ new Set();
	const $input_other__closures = /* @__PURE__ */ new Set();
	const $input_failing__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "a", input.slow, (v) => {
			const $scope5_id = _scope_id();
			_html(`<em>${_text_resume($scope5_id, "a", v, $wg__input_slow)}</em>`);
			$wi__input_slow && _scope($scope5_id, {});
		}, $wg__input_slow);
		$wi__input_slow && _subscribe($input_slow__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), "b1", 0);
		$wi__input_slow && _resume_branch($scope2_id);
	}, () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason($wg__input_label << 1);
		const $childScope = _peek_scope_id();
		note_default({ label: input.label });
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: $wi__input_label && _existing_scope($childScope)
		}), "b0", $wg__input_label);
		$wg__input_label || _resume_branch($scope1_id);
	}, void 0, "b2");
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_await($scope4_id, "a", input.failing, (v) => {
			const $scope7_id = _scope_id();
			_html(`<em>${_text_resume($scope7_id, "a", v, $wg__input_failing)}</em>`);
			$wi__input_failing && _scope($scope7_id, {});
		}, $wg__input_failing);
		$wi__input_failing && _subscribe($input_failing__closures, _scope($scope4_id, { _: _scope_with_id($scope0_id) }), "b5", 0);
		$wi__input_failing && _resume_branch($scope4_id);
	}, void 0, () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_set_scope_reason($wg__input_label << 1);
		const $childScope2 = _peek_scope_id();
		note_default({ label: input.label });
		_await($scope3_id, "b", input.other, (w) => {
			const $scope6_id = _scope_id();
			_html(`<b>${_text_resume($scope6_id, "a", w, $wg__input_other)}</b>`);
			$wi__input_other && _scope($scope6_id, {});
		}, $wg__input_other);
		_subscribe($wi__input_other && $input_other__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			a: $wi__input_label && _existing_scope($childScope2),
			Ci: $wi__input_label && 1
		}), "b3", $wg__input_label), "b4", $wg__input_label);
		$wg__input_label || _resume_branch($scope3_id);
	}, void 0, "b6");
	_scope($scope0_id, {
		e: input.label,
		g: input.other,
		i: $wi__input_label && $input_label__closures,
		j: $wi__input_slow && $input_slow__closures,
		k: $wi__input_other && $input_other__closures,
		l: $wi__input_failing && $input_failing__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_slow = _write_guard($scope0_reason, 2), $wi__input_slow = _write_if($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $n__closures = /* @__PURE__ */ new Set();
	const $input_slow__closures = /* @__PURE__ */ new Set();
	const brand = `${$global().brand}!`;
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "a", input.slow, (v) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_text_resume($scope3_id, "a", v, $wg__input_slow)}</em>`);
			$wi__input_slow && _scope($scope3_id, {});
		}, $wg__input_slow);
		$wi__input_slow && _subscribe($input_slow__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), "a2", 0);
		$wi__input_slow && _resume_branch($scope2_id);
	}, () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		note_default({ label: brand });
		_set_scope_reason(2);
		const $childScope = _peek_scope_id();
		note_default({ label: `${n} ${input.label}` });
		_set_scope_reason(2);
		const $childScope2 = _peek_scope_id();
		toggle_default({ on: n });
		_subscribe($n__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			b: _existing_scope($childScope),
			c: _existing_scope($childScope2)
		}), "a0"), "a1");
	}, void 0, "a3");
	_set_scope_reason($wg__input_slow << 3 | _write_guard($scope0_reason, 4) << 5 | _write_guard($scope0_reason, 3) << 7);
	const $childScope3 = _peek_scope_id();
	card_default({
		label: "fixed",
		slow: input.slow,
		failing: input.failing,
		other: input.other
	});
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		g: input.label,
		k: brand,
		l: n,
		m: $wi__input_label && $input_label__closures,
		p: $n__closures,
		n: $wi__input_slow && $input_slow__closures,
		d: _write_if($scope0_reason, 0) && _existing_scope($childScope3)
	});
}, 1);

// tags/note.marko
var note_default = _template("__tests__/tags/note.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<p>${_text_resume($scope0_id, "#text/0", input.label, $wg__input_label)}</p>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/note.marko", 0);
});

// tags/toggle.marko
var toggle_default = _template("__tests__/tags/toggle.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 0), $wi__input_on = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			_html("<i>on</i>");
			$wi__input_on && _scope($scope1_id, {}, "__tests__/tags/toggle.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_on, $wg__input_on, 0, 0, 1);
	$wi__input_on && _scope($scope0_id, {}, "__tests__/tags/toggle.marko", 0);
});

// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0), $wg__input_slow = _write_guard($scope0_reason, 1), $wi__input_slow = _write_if($scope0_reason, 1), $wg__input_other = _write_guard($scope0_reason, 2), $wi__input_other = _write_if($scope0_reason, 2), $wg__input_failing = _write_guard($scope0_reason, 3), $wi__input_failing = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_slow__closures = new Set();
	const $input_other__closures = new Set();
	const $input_failing__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "#text/0", input.slow, (v) => {
			const $scope5_id = _scope_id();
			_html(`<em>${_text_resume($scope5_id, "#text/0", v, $wg__input_slow)}</em>`);
			$wi__input_slow && _scope($scope5_id, {}, "__tests__/tags/card.marko", "2:4");
		}, $wg__input_slow);
		$wi__input_slow && _subscribe($input_slow__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/card.marko", "1:2"), "__tests__/tags/card.marko_2_input_slow#0:5/subscribe", 0);
		$wi__input_slow && _resume_branch($scope2_id);
	}, () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason($wg__input_label << 1);
		const $childScope = _peek_scope_id();
		note_default({ label: input.label });
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": $wi__input_label && _existing_scope($childScope)
		}, "__tests__/tags/card.marko", "5:4"), "__tests__/tags/card.marko_1_input_label#0:4/subscribe", $wg__input_label);
		$wg__input_label || _resume_branch($scope1_id);
	}, void 0, "__tests__/tags/card.marko_1*content");
	_try($scope0_id, "#text/1", () => {
		const $scope4_reason = _scope_reason();
		const $scope4_id = _scope_id();
		_await($scope4_id, "#text/0", input.failing, (v) => {
			const $scope7_id = _scope_id();
			_html(`<em>${_text_resume($scope7_id, "#text/0", v, $wg__input_failing)}</em>`);
			$wi__input_failing && _scope($scope7_id, {}, "__tests__/tags/card.marko", "10:4");
		}, $wg__input_failing);
		$wi__input_failing && _subscribe($input_failing__closures, _scope($scope4_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/card.marko", "9:2"), "__tests__/tags/card.marko_4_input_failing#0:7/subscribe", 0);
		$wi__input_failing && _resume_branch($scope4_id);
	}, void 0, () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_set_scope_reason($wg__input_label << 1);
		const $childScope2 = _peek_scope_id();
		note_default({ label: input.label });
		_await($scope3_id, "#text/1", input.other, (w) => {
			const $scope6_id = _scope_id();
			_html(`<b>${_text_resume($scope6_id, "#text/0", w, $wg__input_other)}</b>`);
			$wi__input_other && _scope($scope6_id, {}, "__tests__/tags/card.marko", "15:6");
		}, $wg__input_other);
		_subscribe($wi__input_other && $input_other__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": $wi__input_label && _existing_scope($childScope2),
			"ClosureSignalIndex:input_label/8": $wi__input_label && 1
		}, "__tests__/tags/card.marko", "13:4"), "__tests__/tags/card.marko_3_input_label#0:4/subscribe", $wg__input_label), "__tests__/tags/card.marko_3_input_other#0:6/subscribe", $wg__input_label);
		$wg__input_label || _resume_branch($scope3_id);
	}, void 0, "__tests__/tags/card.marko_3*content");
	_scope($scope0_id, {
		input_label: input.label,
		input_other: input.other,
		"ClosureScopes:input_label/8": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_slow/9": $wi__input_slow && $input_slow__closures,
		"ClosureScopes:input_other/10": $wi__input_other && $input_other__closures,
		"ClosureScopes:input_failing/11": $wi__input_failing && $input_failing__closures
	}, "__tests__/tags/card.marko", 0, {
		input_label: ["input.label"],
		input_other: ["input.other"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_slow = _write_guard($scope0_reason, 2), $wi__input_slow = _write_if($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $n__closures = new Set();
	const $input_slow__closures = new Set();
	const $global$1 = $global();
	const brand = `${$global$1.brand}!`;
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "#text/0", input.slow, (v) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_text_resume($scope3_id, "#text/0", v, $wg__input_slow)}</em>`);
			$wi__input_slow && _scope($scope3_id, {}, "__tests__/template.marko", "5:4");
		}, $wg__input_slow);
		$wi__input_slow && _subscribe($input_slow__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), "__tests__/template.marko_2_input_slow#0:7/subscribe", 0);
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
			"#childScope/1": _existing_scope($childScope),
			"#childScope/2": _existing_scope($childScope2)
		}, "__tests__/template.marko", "8:4"), "__tests__/template.marko_1_input_label#0:6/subscribe"), "__tests__/template.marko_1_n#0:11/subscribe");
	}, void 0, "__tests__/template.marko_1*content");
	_set_scope_reason($wg__input_slow << 3 | _write_guard($scope0_reason, 4) << 5 | _write_guard($scope0_reason, 3) << 7);
	const $childScope3 = _peek_scope_id();
	card_default({
		label: "fixed",
		slow: input.slow,
		failing: input.failing,
		other: input.other
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		brand,
		n,
		"ClosureScopes:input_label/12": $wi__input_label && $input_label__closures,
		"ClosureScopes:n/15": $n__closures,
		"ClosureScopes:input_slow/13": $wi__input_slow && $input_slow__closures,
		"#childScope/3": _write_if($scope0_reason, 0) && _existing_scope($childScope3)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		brand: "1:8",
		n: "2:6"
	});
}, 1);

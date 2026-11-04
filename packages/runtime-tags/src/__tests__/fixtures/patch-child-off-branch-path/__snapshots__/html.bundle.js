// tags/note.marko
_shells({ c: "c;D ;<p> </p>" });
var note_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</p>`);
	_scope($scope0_id, {});
});

// tags/toggle.marko
_shells({
	d: "d;b%;<!><!><!>",
	d0: "d0,<i>on</i>"
});
var toggle_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			_html("<i>on</i>");
			_write_if($scope0_reason, 0) && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_on, 1, 0, 0, ["d0"], $scope0_reason, 0);
	_scope($scope0_id, {});
});

// tags/card.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $setup$1 = [[], []];
_shells({
	b1: "b1;D ;<em> </em>",
	b2: "b2;D ;<b> </b>",
	b3: "b3;D ;<em> </em>",
	b4: "b4;D ;<em> </em>",
	b5: "b5;b%;<!><!><!>",
	b6: "b6;D ;<em> </em>",
	b7: "b7;b%;<!><!><!>",
	b: "b;b%b%;<!><!><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0), $wi__input_slow = _write_if($scope0_reason, 1), $wg__input_other = _write_guard($scope0_reason, 2), $wi__input_other = _write_if($scope0_reason, 2), $cg__input_other = _client_guard($scope0_reason, 2), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_failing = _write_if($scope0_reason, 3), $fg__input_label = _filled_guard($scope0_reason, 0), $fg__input_other = _filled_guard($scope0_reason, 2);
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
			_html(`<em>${_text_mark($scope5_id, "a", v, 1, $scope0_reason, 1)}</em>`);
			_scope($scope5_id, {});
		}, 1, "b3", _unfilled_if($scope0_reason, 1) && 2, 1);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "b8", 1);
		$wi__input_slow && _subscribe(_unfilled_if($scope0_reason, 1) && $input_slow__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "b8", 0);
		$wi__input_slow && _resume_branch($scope2_id);
	}, () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		note_default({ label: input.label });
		_patch_child_end();
		$cg__input_label && _patch_render($scope1_id, "b0");
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: $wi__input_label && _existing_scope($childScope)
		}), $cg__input_label && "b0", 0);
		$wg__input_label && _resume_branch($scope1_id);
	}, void 0, "b9", void 0, "b7", 1);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_await($scope4_id, "a", input.failing, (v) => {
			const $scope7_id = _scope_id();
			_html(`<em>${_text_mark($scope7_id, "a", v, 1, $scope0_reason, 3)}</em>`);
			_scope($scope7_id, {});
		}, 1, "b1", _unfilled_if($scope0_reason, 3) && 2, 1);
		_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope4_id, "b12", 1);
		$wi__input_failing && _subscribe(_unfilled_if($scope0_reason, 3) && $input_failing__closures, _scope($scope4_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 3) && "b12", 0);
		$wi__input_failing && _resume_branch($scope4_id);
	}, void 0, () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
		const $childScope2 = _peek_scope_id($scope3_id, "a", 1);
		note_default({ label: input.label });
		_patch_child_end();
		_await($scope3_id, "b", input.other, (w) => {
			const $scope6_id = _scope_id();
			_html(`<b>${_text_mark($scope6_id, "a", w, $wg__input_other)}</b>`);
			$wi__input_other && _scope($scope6_id, {});
		}, $wg__input_other, "b2", _unfilled_if($scope0_reason, 2) && 2);
		$cg__input_label && _patch_render($scope3_id, "b10");
		$cg__input_other && _patch_render($scope3_id, "b11");
		_subscribe($wi__input_other && $input_other__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			a: $wi__input_label && _existing_scope($childScope2),
			Ci: $wi__input_label && 1
		}), $cg__input_label && "b10", 0), $cg__input_other && "b11", 0);
		($wg__input_label || $wg__input_other) && _resume_branch($scope3_id);
	}, 0, "b13", "b5", 1);
	$fg__input_label && _patch_subscribers($scope0_id, "b14", "e");
	$fg__input_other && _patch_subscribers($scope0_id, "b15", "g");
	_scope($scope0_id, {
		e: input.label,
		g: input.other,
		i: $wi__input_label && $input_label__closures,
		j: $wi__input_slow && _unfilled_if($scope0_reason, 1) && $input_slow__closures,
		k: $wi__input_other && $input_other__closures,
		l: $wi__input_failing && _unfilled_if($scope0_reason, 3) && $input_failing__closures
	}) || ($fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 0)), $fg__input_other && _patch_write($scope0_id, "xg", input.other, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], ["a9"]], ["d>", $setup$1]);
_shells({
	a3: "a3;D ;<em> </em>",
	a4: "a4;D ;<em> </em>",
	a5: "a5;b%;<!><!><!>",
	a: `a${_shell_marker($setup)};${((_w0) => ` D l%b/${_w0}&b`)($walks)};${((_w0) => `<button> </button><!>${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_slow = _write_if($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $n__closures = /* @__PURE__ */ new Set();
	const $input_slow__closures = /* @__PURE__ */ new Set();
	const brand = `${$global().brand}!`;
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "b", n)}</button>${_el_mark($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "a", input.slow, (v) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_text_mark($scope3_id, "a", v, 1, $scope0_reason, 1)}</em>`);
			_scope($scope3_id, {});
		}, 1, "a3", _unfilled_if($scope0_reason, 1) && 2, 1);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a6", 1);
		$wi__input_slow && _subscribe(_unfilled_if($scope0_reason, 1) && $input_slow__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "a6", 0);
		$wi__input_slow && _resume_branch($scope2_id);
	}, () => {
		_scope_reason();
		const $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		note_default({ label: brand });
		_patch_child_end();
		_set_scope_reason(6);
		const $childScope2 = _peek_scope_id($scope1_id, "b", 1);
		note_default({ label: `${n} ${input.label}` });
		_patch_child_end();
		_set_scope_reason(2);
		const $childScope3 = _peek_scope_id($scope1_id, "c", 2);
		toggle_default({ on: n });
		_patch_child_end();
		_patch_render($scope1_id, "a0", _filled_guard($scope0_reason, 0) && ">g");
		_subscribe($n__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: $scope1_page && _existing_scope($childScope),
			b: _existing_scope($childScope2),
			c: _existing_scope($childScope3)
		}), _client_guard($scope0_reason, 0) && "a1", 0), "a2", 0);
		_resume_branch($scope1_id);
	}, void 0, "a7", void 0, "a5", 1);
	_set_scope_reason(_updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 3) << 5 | _updates_from($scope0_reason, 2) << 7);
	const $childScope4 = _peek_scope_id($scope0_id, "d", 3);
	card_default({
		label: "fixed",
		slow: input.slow,
		failing: input.failing,
		other: input.other
	});
	_patch_child_end();
	_fill_global_subscribe("a8", $scope0_id);
	_script($scope0_id, "a9");
	$fg__input_label && _patch_subscribers($scope0_id, "a10", "g");
	_patch_subscribers($scope0_id, "a11", "k");
	_scope($scope0_id, {
		g: input.label,
		k: brand,
		l: n,
		m: $wi__input_label && $input_label__closures,
		p: $n__closures,
		n: $wi__input_slow && _unfilled_if($scope0_reason, 1) && $input_slow__closures,
		d: _existing_scope($childScope4)
	}) || ($fg__input_label && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 0)), _patch_write($scope0_id, "xk", brand));
}, 1);

// tags/note.marko
const $template$3 = "<p> </p>";
const $walks$3 = "D l";
const $setup$3 = [[], []];
_shells({ "__tests__/tags/note.marko": "__tests__/tags/note.marko;D ;<p> </p>" });
var note_default = _template("__tests__/tags/note.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_text_resume($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</p>`);
	_scope($scope0_id, {}, "__tests__/tags/note.marko", 0);
});

// tags/toggle.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = [[], []];
_shells({
	"__tests__/tags/toggle.marko": "__tests__/tags/toggle.marko;b%;<!><!><!>",
	"__tests__/tags/toggle.marko_1*shell": "__tests__/tags/toggle.marko_1*shell,<i>on</i>"
});
var toggle_default = _template("__tests__/tags/toggle.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			_html("<i>on</i>");
			_write_if($scope0_reason, 0) && _scope($scope1_id, {}, "__tests__/tags/toggle.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_on, void 0, void 0, void 0, ["__tests__/tags/toggle.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/tags/toggle.marko", 0);
});

// tags/card.marko
const $template$1 = "<!><!><!><!>";
const $walks$1 = "b%b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/card.marko_7*content": "__tests__/tags/card.marko_7*content;D ;<em> </em>",
	"__tests__/tags/card.marko_6*content": "__tests__/tags/card.marko_6*content;D ;<b> </b>",
	"__tests__/tags/card.marko_5*content": "__tests__/tags/card.marko_5*content;D ;<em> </em>",
	"__tests__/tags/card.marko_4_#text#0/await": "__tests__/tags/card.marko_4_#text#0/await;D ;<em> </em>",
	"__tests__/tags/card.marko_4*content": "__tests__/tags/card.marko_4*content;b%;<!><!><!>",
	"__tests__/tags/card.marko_2_#text#0/await": "__tests__/tags/card.marko_2_#text#0/await;D ;<em> </em>",
	"__tests__/tags/card.marko_2*content": "__tests__/tags/card.marko_2*content;b%;<!><!><!>",
	"__tests__/tags/card.marko": "__tests__/tags/card.marko !;b%b%;<!><!><!><!>"
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $cg__input_slow = _client_guard($scope0_reason, 1), $wi__input_slow = _write_if($scope0_reason, 1), $wg__input_other = _write_guard($scope0_reason, 2), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_other = _write_if($scope0_reason, 2), $cg__input_failing = _client_guard($scope0_reason, 3), $wi__input_failing = _write_if($scope0_reason, 3);
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
			_html(`<em>${_text_resume($scope5_id, "#text/0", v, void 0, $scope0_reason, 1)}</em>`);
			_scope($scope5_id, {}, "__tests__/tags/card.marko", "2:4");
		}, 1, "__tests__/tags/card.marko_5*content", 1);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_slow ? "__tests__/tags/card.marko_2_input_slow#0:5/init" : "__tests__/tags/card.marko_2_input_slow#0:5/subscribe");
		$wi__input_slow && _subscribe(_unfilled_if($scope0_reason, 1) && $input_slow__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/card.marko", "1:2"), $cg__input_slow && "__tests__/tags/card.marko_2_input_slow#0:5/subscribe", 0);
		$wi__input_slow && _resume_branch($scope2_id);
	}, () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		note_default({ label: input.label });
		_patch_child_end();
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": $wi__input_label && _existing_scope($childScope)
		}, "__tests__/tags/card.marko", "5:4"), "__tests__/tags/card.marko_1_input_label#0:4/subscribe", $wg__input_label);
		$wg__input_label || _resume_branch($scope1_id);
	}, void 0, "__tests__/tags/card.marko_1*content", void 0, "__tests__/tags/card.marko_2*content", 1);
	_try($scope0_id, "#text/1", () => {
		const $scope4_reason = _scope_reason();
		const $scope4_id = _scope_id();
		_await($scope4_id, "#text/0", input.failing, (v) => {
			const $scope7_id = _scope_id();
			_html(`<em>${_text_resume($scope7_id, "#text/0", v, void 0, $scope0_reason, 3)}</em>`);
			_scope($scope7_id, {}, "__tests__/tags/card.marko", "10:4");
		}, 1, "__tests__/tags/card.marko_7*content", 1);
		_unfilled_if($scope0_reason, 3) && _patch_init($scope4_id, $cg__input_failing ? "__tests__/tags/card.marko_4_input_failing#0:7/init" : "__tests__/tags/card.marko_4_input_failing#0:7/subscribe");
		$wi__input_failing && _subscribe(_unfilled_if($scope0_reason, 3) && $input_failing__closures, _scope($scope4_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/card.marko", "9:2"), $cg__input_failing && "__tests__/tags/card.marko_4_input_failing#0:7/subscribe", 0);
		$wi__input_failing && _resume_branch($scope4_id);
	}, void 0, () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope2 = _peek_scope_id($scope3_id, "#childScope/0", 1);
		note_default({ label: input.label });
		_patch_child_end();
		_await($scope3_id, "#text/1", input.other, (w) => {
			const $scope6_id = _scope_id();
			_html(`<b>${_text_resume($scope6_id, "#text/0", w, $wg__input_other)}</b>`);
			$wi__input_other && _scope($scope6_id, {}, "__tests__/tags/card.marko", "15:6");
		}, $wg__input_other, "__tests__/tags/card.marko_6*content");
		_subscribe($wi__input_other && $input_other__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": $wi__input_label && _existing_scope($childScope2),
			"ClosureSignalIndex:input_label/8": $wi__input_label && 1
		}, "__tests__/tags/card.marko", "13:4"), "__tests__/tags/card.marko_3_input_label#0:4/subscribe", $wg__input_label), "__tests__/tags/card.marko_3_input_other#0:6/subscribe", $wg__input_label);
		$wg__input_label || _resume_branch($scope3_id);
	}, void 0, "__tests__/tags/card.marko_3*content", "__tests__/tags/card.marko_4*content", 1);
	_scope($scope0_id, {
		input_label: input.label,
		input_other: input.other,
		"ClosureScopes:input_label/8": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_slow/9": $wi__input_slow && _unfilled_if($scope0_reason, 1) && $input_slow__closures,
		"ClosureScopes:input_other/10": $wi__input_other && $input_other__closures,
		"ClosureScopes:input_failing/11": $wi__input_failing && _unfilled_if($scope0_reason, 3) && $input_failing__closures
	}, "__tests__/tags/card.marko", 0, {
		input_label: ["input.label"],
		input_other: ["input.other"]
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", input.label, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill1", input.other, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button> </button><!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l%b/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/3>", $setup$1]);
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<em> </em>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` D l%b/${_w0}&b`)($walks$1)};${((_w0) => `<button> </button><!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_slow = _client_guard($scope0_reason, 1), $wi__input_slow = _write_if($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 0);
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
			_html(`<em>${_text_resume($scope3_id, "#text/0", v, void 0, $scope0_reason, 1)}</em>`);
			_scope($scope3_id, {}, "__tests__/template.marko", "5:4");
		}, 1, "__tests__/template.marko_3*content", 1);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_slow ? "__tests__/template.marko_2_input_slow#0:7/init" : "__tests__/template.marko_2_input_slow#0:7/subscribe");
		$wi__input_slow && _subscribe(_unfilled_if($scope0_reason, 1) && $input_slow__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), $cg__input_slow && "__tests__/template.marko_2_input_slow#0:7/subscribe", 0);
		$wi__input_slow && _resume_branch($scope2_id);
	}, () => {
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		note_default({ label: brand });
		_patch_child_end();
		_set_scope_reason(6);
		const $childScope2 = _peek_scope_id($scope1_id, "#childScope/1", 1);
		note_default({ label: `${n} ${input.label}` });
		_patch_child_end();
		_set_scope_reason(2);
		const $childScope3 = _peek_scope_id($scope1_id, "#childScope/2", 2);
		toggle_default({ on: n });
		_patch_child_end();
		_subscribe($n__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": $scope1_page && _existing_scope($childScope),
			"#childScope/1": _existing_scope($childScope2),
			"#childScope/2": _existing_scope($childScope3)
		}, "__tests__/template.marko", "8:4"), _client_guard($scope0_reason, 0) && "__tests__/template.marko_1_input_label#0:6/subscribe"), "__tests__/template.marko_1_n#0:11/subscribe");
	}, void 0, "__tests__/template.marko_1*content", void 0, "__tests__/template.marko_2*content", 1);
	_set_scope_reason(_mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 3) << 5 | _mask_group($scope0_reason, 2) << 7);
	const $childScope4 = _peek_scope_id($scope0_id, "#childScope/3", 3);
	card_default({
		label: "fixed",
		slow: input.slow,
		failing: input.failing,
		other: input.other
	});
	_patch_child_end();
	_fill_global_subscribe("__tests__/template.marko_0_$global_brand#8", $scope0_id);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		brand,
		n,
		"ClosureScopes:input_label/12": $wi__input_label && $input_label__closures,
		"ClosureScopes:n/15": $n__closures,
		"ClosureScopes:input_slow/13": $wi__input_slow && _unfilled_if($scope0_reason, 1) && $input_slow__closures,
		"#childScope/3": _existing_scope($childScope4)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		brand: "1:8",
		n: "2:6"
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0)), _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", brand));
}, 1);

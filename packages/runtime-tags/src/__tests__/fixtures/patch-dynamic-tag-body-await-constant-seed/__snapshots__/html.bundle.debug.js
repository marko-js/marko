// tags/keeper.marko
const $template$2 = "<button class=toggle>toggle</button><!><!>";
const $walks$2 = " b%c";
const $setup$2 = [[], ["__tests__/tags/keeper.marko_0"]];
_shells({ "__tests__/tags/keeper.marko": "__tests__/tags/keeper.marko !__tests__/tags/keeper.marko_0; b%;<button class=toggle>toggle</button><!><!>" });
var keeper_default = _template("__tests__/tags/keeper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, 0, $wg__input_content);
			_scope($scope1_id, {}, "__tests__/tags/keeper.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/keeper.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/keeper.marko_fill1", open, 1);
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/keeper.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/keeper.marko_fill0", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// tags/card.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/card.marko_2*content": "__tests__/tags/card.marko_2*content",
	"__tests__/tags/card.marko_1*content": "__tests__/tags/card.marko_1*content !;b%;<!><!><!>",
	"__tests__/tags/card.marko_0_#text#0/await": "__tests__/tags/card.marko_0_#text#0/await !;b%;<!><!><!>",
	"__tests__/tags/card.marko": "__tests__/tags/card.marko !;b%;<!><!><!>"
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on = _write_guard($scope0_reason, 3), $cg__input_on = _client_guard($scope0_reason, 3), $wi__input_v__OR__input_on__OR__input_note = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const $input_on__closures = new Set();
	_await($scope0_id, "#text/0", input.v, (v) => {
		const $scope1_id = _scope_id();
		const $await_content__v__closures = new Set();
		_dynamic_tag($scope1_id, "#text/0", input.on ? keeper_default : "div", {}, 2, _content_resume("__tests__/tags/card.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(`<em>${_text_resume($scope2_id, "#text/0", input.note, 1, $scope0_reason, 4)} ${_text_resume($scope2_id, "#text/1", v, 2, $scope0_reason, 2)}</em>`);
			_unfilled_if($scope0_reason, 4) && _patch_init($scope2_id, _client_guard($scope0_reason, 4) ? "__tests__/tags/card.marko_2_input_note#0:5/init" : "__tests__/tags/card.marko_2_input_note#0:5/subscribe");
			_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, _client_guard($scope0_reason, 2) ? "__tests__/tags/card.marko_2_v#1:2/init" : "__tests__/tags/card.marko_2_v#1:2/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 2) && $await_content__v__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_note__closures, _scope($scope2_id, { _: $wi__input_v__OR__input_on__OR__input_note && _scope_with_id($scope1_id) }, "__tests__/tags/card.marko", "3:6")));
		}, $scope1_id, ($scope) => $scope0_page ? [{ input_note: input.note }, {
			v,
			_: $scope($scope0_id)
		}] : []), 0, $wg__input_on, $scope0_reason, 3);
		_filled_guard($scope0_reason, 2) && _content_withheld("__tests__/tags/card.marko_2*content", $scope1_id) && _patch_fill($scope1_id, "PatchFill:__tests__/tags/card.marko_fill1", v);
		_filled_guard($scope0_reason, 4) && _content_withheld("__tests__/tags/card.marko_2*content", $scope1_id) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", input.note);
		_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, $cg__input_on ? "__tests__/tags/card.marko_1_input_on#0:4/init" : "__tests__/tags/card.marko_1_input_on#0:4/subscribe");
		$wi__input_v__OR__input_on__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 3) && $input_on__closures, _scope($scope1_id, {
			v: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 2)) && v,
			"ClosureScopes:v/8": _write_if($scope0_reason, 2) && $await_content__v__closures
		}, "__tests__/tags/card.marko", "2:2", { v: "2:8" }), $cg__input_on && "__tests__/tags/card.marko_1_input_on#0:4/subscribe", $wg__input_on);
		$wg__input_on || $wi__input_v__OR__input_on__OR__input_note && _resume_branch($scope1_id);
	}, 1, "__tests__/tags/card.marko_1*content", 1, 1);
	_scope($scope0_id, {
		input_note: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && input.note,
		"ClosureScopes:input_note/7": _write_if($scope0_reason, 4) && $input_note__closures,
		"ClosureScopes:input_on/6": _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_on__closures
	}, "__tests__/tags/card.marko", 0, { input_note: ["input.note"] }) || _filled_guard($scope0_reason, 4) && $cg__input_on && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", input.note, !_server_guard($scope0_reason, 4));
});

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !; ;<main></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 3) << 5 | _mask_group($scope0_reason, 2) << 7);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			card_default({
				note: "n",
				on: input.on,
				v: input.v
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_on#0:4/init");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "__tests__/template.marko_1_input_v#0:5/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $wg__input_show)}`);
	_scope($scope0_id, {
		input_on: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.on,
		input_v: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.v
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_v: ["input.v"]
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.on, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.on), _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.v, !_server_guard($scope0_reason, 3)));
}, 1);

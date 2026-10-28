// tags/card.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%;<button class=toggle>toggle</button><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, 0, $wg__input_content);
			_scope($scope1_id, {}, "__tests__/tags/card.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill1", open, 1);
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content >>>#childScope/0>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !; ;<main></main>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_note = _client_guard($scope0_reason, 3), $wg__input_on = _write_guard($scope0_reason, 6), $cg__input_on = _client_guard($scope0_reason, 6), $wi__input_show__OR__input_on = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const $input_on__closures = new Set();
	const Body = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.note, void 0, $scope0_reason, 3)}</em>`);
		_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, $cg__input_note ? "__tests__/template.marko_1_input_note#0:3/init" : "__tests__/template.marko_1_input_note#0:3/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"), $cg__input_note && "__tests__/template.marko_1_input_note#0:3/subscribe");
	}, $scope0_id) };
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_await($scope2_id, "#text/0", input.v, (v) => {
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "#text/0", input.on ? card_default : "div", {}, 10, _content_resume("__tests__/template.marko_4*content", () => {
					const $scope4_id = _scope_id();
					const $scope4_reason = _scope_reason();
					const $childScope = _patch_child($scope4_id, "#childScope/0", 0, void 0, $scope0_id);
					Body.content({});
					_patch_child_end();
					_scope($scope4_id, {
						_: $wi__input_show__OR__input_on && _scope_with_id($scope3_id),
						"#childScope/0": _existing_scope($childScope)
					}, "__tests__/template.marko", "6:10");
				}, $scope3_id), 0, $wg__input_on, $scope0_reason, 6);
				_filled_guard($scope0_reason, 3) && _content_withheld("__tests__/template.marko_4*content", $scope3_id) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.note);
				_unfilled_if($scope0_reason, 6) && _patch_init($scope3_id, $cg__input_on ? "__tests__/template.marko_3_input_on#0:6/init" : "__tests__/template.marko_3_input_on#0:6/subscribe");
				$wi__input_show__OR__input_on && _subscribe(_unfilled_if($scope0_reason, 6) && $input_on__closures, _scope($scope3_id, {}, "__tests__/template.marko", "5:6"), $cg__input_on && "__tests__/template.marko_3_input_on#0:6/subscribe", $wg__input_on);
				$wg__input_on || $wi__input_show__OR__input_on && _resume_branch($scope3_id);
			}, 1, "__tests__/template.marko_3*content", void 0, 1);
			_client_guard($scope0_reason, 5) && _patch_init($scope2_id, "__tests__/template.marko_2_input_v#0:5/init");
			_write_if($scope0_reason, 2) && _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 4);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $wg__input_show)}`);
	_scope($scope0_id, {
		input_note: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.note,
		input_v: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 5)) && input.v,
		input_on: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 6)) && input.on,
		"ClosureScopes:input_note/7": _write_if($scope0_reason, 3) && $input_note__closures,
		"ClosureScopes:input_on/9": _write_if($scope0_reason, 6) && _unfilled_if($scope0_reason, 6) && $input_on__closures
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		input_v: ["input.v"],
		input_on: ["input.on"]
	}) || (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.note, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 5) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.v, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 6) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", input.on, !_server_guard($scope0_reason, 6)), $cg__input_show && _content_withhold(input.on));
}, 1);

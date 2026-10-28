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
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content !;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !; ;<main></main>",
	"__tests__/template.marko_1_#text#1/await": "__tests__/template.marko_1_#text#1/await !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !; b%;<div></div><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on = _write_guard($scope0_reason, 7), $cg__input_on = _client_guard($scope0_reason, 7), $wi__input_show__OR__input_note__OR__input_v__OR__input_on = _write_if($scope0_reason, 3), $sg__input_note = _server_guard($scope0_reason, 5), $cg__input_v = _client_guard($scope0_reason, 6), $wg__input_show = _write_guard($scope0_reason, 4), $sg__input_v = _server_guard($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_on__closures = new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__x__closures = new Set();
			const x = input.note + "!";
			_html(`<div></div>${_el_resume($scope1_id, "#div/0")}`);
			_await($scope1_id, "#text/1", input.v, (v) => {
				const $scope2_id = _scope_id();
				const $await_content__v__closures = new Set();
				_dynamic_tag($scope2_id, "#text/0", input.on ? card_default : "div", {}, 2, _content_resume("__tests__/template.marko_3*content", () => {
					const $scope3_id = _scope_id();
					const $scope3_reason = _scope_reason();
					_html(`<em>${_text_resume($scope3_id, "#text/0", x, void 0, $scope0_reason, 5)} ${_text_resume($scope3_id, "#text/1", v, 2, $scope0_reason, 6)}</em>`);
					_unfilled_if($scope0_reason, 5) && _patch_init($scope3_id, _client_guard($scope0_reason, 5) ? "__tests__/template.marko_3_x#1:2/init" : "__tests__/template.marko_3_x#1:2/subscribe");
					_unfilled_if($scope0_reason, 6) && _patch_init($scope3_id, $cg__input_v ? "__tests__/template.marko_3_v#2:2/init" : "__tests__/template.marko_3_v#2:2/subscribe");
					_subscribe(_unfilled_if($scope0_reason, 6) && $await_content__v__closures, _subscribe(_unfilled_if($scope0_reason, 5) && $if_content__x__closures, _scope($scope3_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope2_id) }, "__tests__/template.marko", "8:10")));
				}, $scope2_id, ($scope) => $scope0_page ? [{ v }] : []), 0, $wg__input_on, $scope0_reason, 7);
				_filled_guard($scope0_reason, 6) && _content_withheld("__tests__/template.marko_3*content", $scope2_id) && _patch_fill($scope2_id, "PatchFill:__tests__/template.marko_fill4", v);
				_filled_guard($scope0_reason, 5) && _content_withheld("__tests__/template.marko_3*content", $scope2_id) && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill3", x);
				_unfilled_if($scope0_reason, 7) && _patch_init($scope2_id, $cg__input_on ? "__tests__/template.marko_2_input_on#0:6/init" : "__tests__/template.marko_2_input_on#0:6/subscribe");
				$wi__input_show__OR__input_note__OR__input_v__OR__input_on && _subscribe(_unfilled_if($scope0_reason, 7) && $input_on__closures, _scope($scope2_id, {
					v: (_unfilled_if($scope0_reason, 7) || _unfilled_if($scope0_reason, 6)) && v,
					"ClosureScopes:v/11": _write_if($scope0_reason, 6) && $await_content__v__closures
				}, "__tests__/template.marko", "7:6", { v: "7:12" }), $cg__input_on && "__tests__/template.marko_2_input_on#0:6/subscribe", $wg__input_on);
				$wg__input_on || $wi__input_show__OR__input_note__OR__input_v__OR__input_on && _resume_branch($scope2_id);
			}, 1, "__tests__/template.marko_2*content", void 0, 1);
			_script($scope1_id, "__tests__/template.marko_1_x#2", 1, _filled_guard($scope0_reason, 5), "x");
			_filled_guard($scope0_reason, 5) ? _patch_write($scope1_id, "PatchMarkedWrite:x", x, !$sg__input_note) : _patch_init($scope1_id, "__tests__/template.marko_1_input_note#0:4/init");
			$cg__input_v && _patch_init($scope1_id, "__tests__/template.marko_1_input_v#0:5/init");
			_scope($scope1_id, {
				x,
				_: $wi__input_show__OR__input_note__OR__input_v__OR__input_on && _scope_with_id($scope0_id),
				"ClosureScopes:x/10": _write_if($scope0_reason, 5) && $if_content__x__closures
			}, "__tests__/template.marko", "3:4", { x: "4:12" });
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 4);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $wg__input_show)}`);
	_scope($scope0_id, {
		input_note: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 5)) && input.note,
		input_v: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 6)) && input.v,
		input_on: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 7)) && input.on,
		"ClosureScopes:input_on/9": _write_if($scope0_reason, 7) && _unfilled_if($scope0_reason, 7) && $input_on__closures
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		input_v: ["input.v"],
		input_on: ["input.on"]
	}) || (_filled_guard($scope0_reason, 5) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.note, !$sg__input_note), _filled_guard($scope0_reason, 6) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.v, !$sg__input_v), _filled_guard($scope0_reason, 7) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", input.on, !_server_guard($scope0_reason, 7)), $cg__input_show && _content_withhold(input.on));
}, 1);

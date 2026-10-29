// tags/toggle.marko
const $template$3 = "<button id=toggle>toggle</button><!><!>";
const $walks$3 = " b%c";
const $setup$3 = [[], ["__tests__/tags/toggle.marko_0"]];
_shells({ "__tests__/tags/toggle.marko": "__tests__/tags/toggle.marko !__tests__/tags/toggle.marko_0; b%;<button id=toggle>toggle</button><!><!>" });
var toggle_default = _template("__tests__/tags/toggle.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", open && input.content, {});
	_script($scope0_id, "__tests__/tags/toggle.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/toggle.marko_fill1", open, 1);
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/toggle.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/toggle.marko_fill0", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// tags/card.marko
const $template$2 = "<section><button>clear</button><!></section>";
const $walks$2 = "D b%l";
const $setup$2 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_first_value($scope0_id, "c", c, $scope0_reason, 0);
	_html(`<section><button>clear</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {}, 2, 0, 0, 1, $scope0_reason, 0, "c");
	_html("</section>");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0) || _content_withhold(input.content);
});

// tags/outer.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<button>x</button>${_w0}`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$2);
const $setup$1 = _shell_setup([[], ["__tests__/tags/outer.marko_0"]], ["#childScope/1>", $setup$2]);
_shells({ "__tests__/tags/outer.marko": /*@__PURE__*/ (() => `__tests__/tags/outer.marko${_shell_marker($setup$1)};${((_w0) => ` b/${_w0}&`)($walks$2)};${((_w0) => `<button>x</button>${_w0}`)($template$2)}`)() });
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let o = input.content;
	_html(`<button>x</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	card_default({ content: o });
	_patch_child_end();
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill0", o, 1);
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/tags/outer.marko", 0) || _content_withhold(input.content);
});

// template.marko
const $template = "<!><!><main><!></main>";
const $walks = "b%bD%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;Db%;<em>static <!></em>",
	"~__tests__/template.marko_2*content": "~__tests__/template.marko_2*content;Db%;<em>static <!></em>",
	"__tests__/template.marko": "__tests__/template.marko !;b%bD%;<!><!><main><!></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 3), $wg__input_on = _write_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_note__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			outer_default({ content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>static ${_text_resume($scope2_id, "#text/0", input.label, 2, $scope0_reason, 4)}</em>`);
				_client_guard($scope0_reason, 4) && _patch_init($scope2_id, "__tests__/template.marko_2_input_label#0:5/init");
				_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_label && _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:17"));
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_label && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 3);
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/1", input.on ? toggle_default : "div", {}, 10, _content_resume("__tests__/template.marko_3*content", () => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_html(`<em>${_text_resume($scope3_id, "#text/0", input.note, 1, $scope0_reason, 6)}</em>`);
		_unfilled_if($scope0_reason, 6) && _patch_init($scope3_id, _client_guard($scope0_reason, 6) ? "__tests__/template.marko_3_input_note#0:7/init" : "__tests__/template.marko_3_input_note#0:7/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 6) && $input_note__closures, _scope($scope3_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:6"));
	}, $scope0_id, ($scope) => $scope0_page ? [{ input_note: input.note }] : []), 0, $wg__input_on, $scope0_reason, 5);
	_html("</main>");
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && input.label,
		input_note: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 6)) && input.note,
		"ClosureScopes:input_label/8": _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_label__closures,
		"ClosureScopes:input_note/9": _write_if($scope0_reason, 6) && $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_note: ["input.note"]
	}) || (_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 3) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 6) && _content_withheld("__tests__/template.marko_3*content", $scope0_id) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.note, !_server_guard($scope0_reason, 6)));
}, 1);

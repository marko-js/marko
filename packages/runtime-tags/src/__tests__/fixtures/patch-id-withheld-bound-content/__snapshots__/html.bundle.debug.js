// tags/card.marko
const $template$1 = "<button>clear</button><!><!><!>";
const $walks$1 = " b%b%c";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%b%;<button>clear</button><!><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_content = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {}, 2, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_dynamic_tag($scope0_id, "#text/2", c, {}, 10, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0) || _content_withhold(input.content);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"~__tests__/template.marko_1*content": "~__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks$1)};${((_w0) => `${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 2), $wi__input_label__OR__input_on = _write_if($scope0_reason, 0), $cg__input_on = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_on__closures = new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 1);
	card_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const Inner = { content: _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			const uid = _id("uid");
			_html(`<input${_attr("id", uid, $scope2_id, "PatchAttr:#input/0 id", 0, 0)}>${_el_resume($scope2_id, "#input/0", 0)}<label${_attr("for", uid, $scope2_id, "PatchAttr:#label/1 for", 0, 0)}>${_text_resume($scope2_id, "#text/2", input.label, 1, $scope0_reason, 1)}</label>${_el_resume($scope2_id, "#label/1", 0)}`);
			_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, _client_guard($scope0_reason, 1) ? "__tests__/template.marko_2_input_label#0:3/init" : "__tests__/template.marko_2_input_label#0:3/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, { _: $wi__input_label__OR__input_on && _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4"));
		}, $scope1_id) };
		_dynamic_tag($scope1_id, "#text/0", input.on ? Inner : null, {}, 2, 0, 0, $wg__input_on, $scope0_reason, 2);
		$wi__input_label__OR__input_on && _subscribe(_unfilled_if($scope0_reason, 2) && $input_on__closures, _scope($scope1_id, {
			Inner: _unfilled_if($scope0_reason, 2) && Inner,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:2", { Inner: "2:11" }), $cg__input_on && "__tests__/template.marko_1_input_on#0:4/subscribe", $wg__input_on);
		$wg__input_on || $wi__input_label__OR__input_on && _resume_branch($scope1_id);
	}, $scope0_id, 2) });
	_patch_child_end();
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.label,
		"ClosureScopes:input_label/5": _write_if($scope0_reason, 1) && $input_label__closures,
		"ClosureScopes:input_on/6": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_on__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 1) && (_content_withheld("__tests__/template.marko_2*content", $scope0_id) || $cg__input_on) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
}, 1);

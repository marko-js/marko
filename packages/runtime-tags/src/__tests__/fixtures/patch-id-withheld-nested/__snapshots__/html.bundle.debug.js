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
	"~__tests__/template.marko_1*content": "~__tests__/template.marko_1*content;b%b%;<!><!><!><!>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks$1)};${((_w0) => `${_w0}<!>`)($template$1)}`)(),
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell; b D ;<input><label> </label>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell; b D ;<input><label> </label>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_show__closures = new Set();
	const $input_items__closures = new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	card_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				const uid = _id("uid");
				_html(`<input${_attr("id", uid, $scope2_id, "PatchAttr:#input/0 id", 0, 0)}>${_el_resume($scope2_id, "#input/0", 0)}<label${_attr("for", uid, $scope2_id, "PatchAttr:#label/1 for", 0, 0)}>${_text_resume($scope2_id, "#text/2", input.label, 1, $scope0_reason, 3)}</label>${_el_resume($scope2_id, "#label/1", 0)}`);
				$cg__input_label && _patch_init($scope2_id, "__tests__/template.marko_2_input_label#0:4/init");
				_subscribe(_unfilled_if($scope0_reason, 3) && $input_label__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4"), $cg__input_label && "__tests__/template.marko_2_input_label#0:4/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 2);
		_for_of(input.items, (item) => {
			const $scope3_id = _scope_id();
			const rid = _id("rid");
			_html(`<input${_attr("id", rid, $scope3_id, "PatchAttr:#input/0 id", 0, 0)}>${_el_resume($scope3_id, "#input/0", 0)}<label${_attr("for", rid, $scope3_id, "PatchAttr:#label/1 for", 0, 0)}>${_text_resume($scope3_id, "#text/2", item.id, 1, $scope0_reason, 4)}</label>${_el_resume($scope3_id, "#label/1", 0)}`);
			_scope($scope3_id, {}, "__tests__/template.marko", "7:4");
		}, "id", $scope1_id, "#text/1", 1, 1, 1, 0, 0, "__tests__/template.marko_3*shell", $scope0_reason, 4);
		_subscribe(_unfilled_if($scope0_reason, 4) && $input_items__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), $cg__input_show && "__tests__/template.marko_1_input_show#0:3/subscribe"), _client_guard($scope0_reason, 4) && "__tests__/template.marko_1_input_items#0:5/subscribe");
	}, $scope0_id, 2) });
	_patch_child_end();
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.label,
		"ClosureScopes:input_label/7": _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_label__closures,
		"ClosureScopes:input_show/6": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_show__closures,
		"ClosureScopes:input_items/8": _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_items__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 3));
}, 1);

// tags/holder.marko
const $template$3 = "";
const $walks$3 = "";
const $setup$3 = [[], []];
_shells({ "__tests__/tags/holder.marko": "^__tests__/tags/holder.marko," });
var holder_default = _template("__tests__/tags/holder.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $return = input.tab;
	return $return;
});

// tags/src.marko
const $template$2 = "";
const $walks$2 = /*@__PURE__*/ ((_w0) => `0${_w0}&`)("");
const $setup$2 = _shell_setup([[], []], ["#childScope/0>", $setup$3]);
_shells({
	"__tests__/tags/src.marko_1*content": "__tests__/tags/src.marko_1*content !__tests__/tags/src.marko_1; D ;<button> </button>",
	"~__tests__/tags/src.marko_1*content": "~__tests__/tags/src.marko_1*content !__tests__/tags/src.marko_1; D ;<button> </button>",
	"__tests__/tags/src.marko": /*@__PURE__*/ ((_w0) => `^__tests__/tags/src.marko${_shell_marker($setup$2)};${((_w0) => `0${_w0}&`)("")};${_w0}`)("")
});
var src_default = _template("__tests__/tags/src.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let $tab;
	forOf(input.items, (t) => {
		$tab = attrTags($tab, { content: _content("__tests__/tags/src.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_patch_write($scope1_id, "PatchWrite:t", t);
			_html(`<button>${_text_resume($scope1_id, "#text/1", t, 1, 4, 0)}</button>${_el_resume($scope1_id, "#button/0")}`);
			_script($scope1_id, "__tests__/tags/src.marko_1");
			_scope($scope1_id, { t }, "__tests__/tags/src.marko", "3:6", { t: "2:8" });
		}, $scope0_id, 1) });
	});
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0, $cg__input_items && 1);
	let h = holder_default({ tab: $tab });
	$cg__input_items && _var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/tags/src.marko_0_h#5/var");
	_patch_child_end();
	const $return = h;
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/src.marko", 0);
	return $return;
});

// tags/view.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/view.marko": "__tests__/tags/view.marko !;b%;<!><!><!>",
	"__tests__/tags/view.marko_1*shell": "__tests__/tags/view.marko_1*shell;b%;<!><!><!>",
	"__tests__/tags/view.marko_2*shell": "__tests__/tags/view.marko_2*shell;b%;<!><!><!>"
});
var view_default = _template("__tests__/tags/view.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tabs = _write_guard($scope0_reason, 1), $wg__input_selected = _write_guard($scope0_reason, 2), $wi__input_tabs__OR__input_selected = _write_if($scope0_reason, 0), $cg__input_tabs = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.tabs, (tab, i) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (i === input.selected) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "#text/0", tab.content, {}, 2, 0, 0, $wg__input_tabs, $scope0_reason, 1);
				$cg__input_tabs && _patch_init($scope2_id, "__tests__/tags/view.marko_2_tab_content#1:3/init");
				$wi__input_tabs__OR__input_selected && _scope($scope2_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope1_id) }, "__tests__/tags/view.marko", "2:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__input_selected, 1, 0, 0, ["__tests__/tags/view.marko_2*shell"], $scope0_reason, 0);
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/view.marko_1_input_selected#0:4/init");
		$wi__input_tabs__OR__input_selected && _scope($scope1_id, {
			tab_content: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && tab?.content,
			"#LoopKey": _unfilled_if($scope0_reason, 2) && i,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/view.marko", "1:2", {
			tab_content: ["tab.content", "1:6"],
			"#LoopKey": "1:11"
		});
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/tags/view.marko_1*shell", $scope0_reason, 1);
	_scope($scope0_id, { input_selected: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.selected }, "__tests__/tags/view.marko", 0, { input_selected: ["input.selected"] }) || _filled_guard($scope0_reason, 2) && $cg__input_tabs && _patch_fill($scope0_id, "PatchFill:__tests__/tags/view.marko_fill0", input.selected, !_server_guard($scope0_reason, 2));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&b/${_w1}&b`)($walks$2, "b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$2], ["#childScope/2>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `0${_w0}&b/${_w1}&b`)($walks$2, "b%c")};${((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($template$2, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0, $cg__input_items && 1);
	let tabs = src_default({ items: input.items });
	$cg__input_items && _var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_tabs#7/var");
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/2", 1);
	view_default({
		tabs,
		selected: input.selected
	});
	_patch_child_end();
	_scope($scope0_id, {
		"#childScope/0": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0);
}, 1);

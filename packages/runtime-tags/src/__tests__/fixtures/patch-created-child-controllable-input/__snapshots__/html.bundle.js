// tags/demo-card.marko
const $template$1 = "<button>tab=<!></button>";
const $walks$1 = " Db%l";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; Db%;<button>tab=<!></button>" });
var demo_card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_tab__OR__input_tabChange = _unfilled_if($scope0_reason, 0), $ui__input_tabChange = _unfilled_if($scope0_reason, 2), $ui__input_tab = _unfilled_if($scope0_reason, 1), $fg__input_tab = _filled_guard($scope0_reason, 1), $fg__input_tabChange = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let selected = input.tab;
	_html(`<button>tab=${_text_mark($scope0_id, "b", String(selected), 2)}</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_render($scope0_id, "b1", (($fg__input_tab ? " e" : "") + ($fg__input_tabChange ? " f" : "")).slice(1), $scope0_reason, 0);
	const $selectedChange = input.tabChange || void 0;
	_patch_let_change($scope0_id, "vb2", selected, "wi", $selectedChange, $scope0_reason, 0);
	_scope($scope0_id, {
		e: ($ui__input_tabChange || $ui__input_tab__OR__input_tabChange) && input.tab,
		f: ($ui__input_tab || $ui__input_tab__OR__input_tabChange) && input.tabChange,
		h: selected,
		i: $selectedChange
	}) || ($fg__input_tab && $ui__input_tabChange && _patch_write($scope0_id, "xe", input.tab, !_server_guard($scope0_reason, 1)), $fg__input_tabChange && $ui__input_tab && _patch_write($scope0_id, "xf", input.tabChange, !_server_guard($scope0_reason, 2)));
});

// tags/page-b.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ c: `c${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks$1)};${$template$1}` });
var page_b_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let tab = 0;
	_set_scope_reason(10);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	demo_card_default({
		tab,
		tabChange: _resume((_new_tab) => tab = _new_tab, "c0", $scope0_id)
	});
	_patch_child_end();
	_patch_fill($scope0_id, "vc1", tab, 1);
	_scope($scope0_id, { a: _existing_scope($childScope) });
	_resume_branch($scope0_id);
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: `a0${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			page_b_default({});
			_patch_child_end();
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a0"], $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);

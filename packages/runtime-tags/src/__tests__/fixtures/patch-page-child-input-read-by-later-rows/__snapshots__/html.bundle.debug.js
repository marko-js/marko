// tags/list.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/list.marko": "__tests__/tags/list.marko !;b%;<!><!><!>",
	"__tests__/tags/list.marko_1*shell": "__tests__/tags/list.marko_1*shell;b%;<!><!><!>",
	"__tests__/tags/list.marko_2*shell": "__tests__/tags/list.marko_2*shell __tests__/tags/list.marko_2_sel#0:5/subscribe!__tests__/tags/list.marko_2; D ;<button> </button>"
});
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 1), $ui__input_b = _unfilled_if($scope0_reason, 1), $sg__input_items = _server_guard($scope0_reason, 2), $fg__input_items2 = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $sel__closures = new Set();
	let sel = "";
	_if(() => {
		if (input.b) {
			const $scope1_id = _scope_id();
			_for_of(input.items, (item) => {
				const $scope2_id = _scope_id(), $fg__input_items = _filled_guard($scope0_reason, 2);
				$fg__input_items && _patch_write($scope2_id, "PatchMarkedWrite:item_id", item?.id, !$sg__input_items);
				_html(`<button${item.id === sel ? " class=on" : ""}>${_text_mark($scope2_id, "#text/1", item.id, 1, $scope0_reason, 2)}</button>${_el_mark($scope2_id, "#button/0")}`);
				_script($scope2_id, "__tests__/tags/list.marko_2");
				_patch_render($scope2_id, "__tests__/tags/list.marko_2_sel#0:5_item_id#4/setup", $fg__input_items && "item_id");
				_subscribe($sel__closures, _scope($scope2_id, {
					item_id: item?.id,
					_: _scope_with_id($scope1_id)
				}, "__tests__/tags/list.marko", "3:4", { item_id: ["item.id", "3:8"] }), "__tests__/tags/list.marko_2_sel#0:5/subscribe");
			}, 0, $scope1_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/tags/list.marko_2*shell", $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "__tests__/tags/list.marko_1_input_items#0:4/setup");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/list.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_b, 1, 0, 0, ["__tests__/tags/list.marko_1*shell"], $scope0_reason, 1);
	$fg__input_items2 && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "__tests__/tags/list.marko_1_input_items#0:4/setup", "input_items");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/list.marko_0_sel#5/fill", sel, 1);
	_scope($scope0_id, {
		input_items: _write_if($scope0_reason, 1) && ($ui__input_b || _unfilled_if($scope0_reason, 2)) && input.items,
		sel: _write_if($scope0_reason, 0) && sel,
		"ClosureScopes:sel/7": $sel__closures
	}, "__tests__/tags/list.marko", 0, {
		input_items: ["input.items"],
		sel: "1:6"
	}) || $fg__input_items2 && $ui__input_b && _patch_write($scope0_id, "PatchMarkedWrite:input_items", input.items, !$sg__input_items);
	$wg__input_b || _resume_branch($scope0_id);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	list_default({
		b: input.b,
		items: input.items
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);

// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/child.marko": "__tests__/tags/child.marko;b%;<!><!><!>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell;D l ;<p> </p><div></div>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "PatchMarkedWrite:item", item, !_server_guard($scope0_reason, 1));
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.a + item, 1, $scope0_reason, 0)}</p><div></div>${_el_resume($scope1_id, "#div/1")}`);
		_script($scope1_id, "__tests__/tags/child.marko_1_item#3", 1, _filled_guard($scope0_reason, 1), "item");
		(_filled_guard($scope0_reason, 2) && !$cg__input_items || _filled_guard($scope0_reason, 1)) && _patch_join_init($scope1_id, "__tests__/tags/child.marko_1_input_a#0:4_item#3/init", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">input_a", _filled_guard($scope0_reason, 1) && "item");
		_scope($scope1_id, {
			item,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
		}, "__tests__/tags/child.marko", "1:2", { item: "1:6" });
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/tags/child.marko_1*shell", $scope0_reason, 1);
	_filled_guard($scope0_reason, 2) && $cg__input_items ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0/unpatched", input.a) : $cg__input_items && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, 1);
	_scope($scope0_id, { input_a: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.a }, "__tests__/tags/child.marko", 0, { input_a: ["input.a"] });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	child_default({
		a: input.y,
		items: input.items
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);

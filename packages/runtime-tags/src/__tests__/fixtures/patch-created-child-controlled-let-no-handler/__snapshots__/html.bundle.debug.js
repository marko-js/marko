// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/child.marko": "__tests__/tags/child.marko !;b%;<!><!><!>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell !__tests__/tags/child.marko_1; D ;<button> </button>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 1;
			_html(`<button>${_text_resume($scope1_id, "#text/1", count)}</button>${_el_resume($scope1_id, "#button/0")}`);
			_script($scope1_id, "__tests__/tags/child.marko_1");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/tags/child.marko_1_input_on#0:4/init");
			const $countChange = input.on || void 0;
			_patch_let_change($scope1_id, "PatchFill:__tests__/tags/child.marko_fill1", count, "PatchWrite:TagVariableChange:count", $countChange, $scope0_reason, 1, 1);
			_scope($scope1_id, {
				count,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"TagVariableChange:count": $countChange
			}, "__tests__/tags/child.marko", "1:2", {
				count: "2:8",
				"TagVariableChange:count": ["countChange", "2:8"]
			});
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/child.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, { input_on: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.on }, "__tests__/tags/child.marko", 0, { input_on: ["input.on"] }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", input.on, !_server_guard($scope0_reason, 1));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	child_default({
		show: input.show,
		on: input.on
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);

// tags/card.marko
const $template$2 = "<button> </button>";
const $walks$2 = " D l";
const $setup$2 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; D ;<button> </button>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let f = input.fn;
	_html(`<button>${_text_resume($scope0_id, "#text/1", f(), 1, (_mask_group($scope0_reason, 0) & 1) << 1, 0, 1)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/tree.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/tree.marko": "__tests__/tags/tree.marko !;b%;<!><!><!>",
	"__tests__/tags/tree.marko_1*shell": /*@__PURE__*/ (() => `__tests__/tags/tree.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$2], ["#childScope/1>", $setup$1]))};${/*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&b`)($walks$2, "b%c")};${/*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<!>`)($template$2, $template$1)}`)()
});
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 1), $cg__input_depth = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			card_default({ fn: input.fn });
			_patch_child_end();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
			const $childScope2 = _peek_scope_id($scope1_id, "#childScope/1", 1);
			$content({
				fn: input.fn,
				depth: input.depth - 1
			});
			_patch_child_end();
			$cg__input_depth && _patch_init($scope1_id, "__tests__/tags/tree.marko_1_input_depth#0:3/init");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/tree.marko_1_input_fn#0:4/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope),
				"#childScope/1": _existing_scope($childScope2)
			}, "__tests__/tags/tree.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_depth, 1, 0, 0, ["__tests__/tags/tree.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, { input_fn: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.fn }, "__tests__/tags/tree.marko", 0, { input_fn: ["input.fn"] }) || _filled_guard($scope0_reason, 2) && $cg__input_depth && _patch_fill($scope0_id, "PatchFill:__tests__/tags/tree.marko_fill0", input.fn, !_server_guard($scope0_reason, 2));
};
var tree_default = _template("__tests__/tags/tree.marko", $content);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 5);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			tree_default({
				depth: 2,
				fn: function() {
					return "f:" + input.label;
				}
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:4/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, { input_label: _write_if($scope0_reason, 0) && input.label }, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
}, 1);

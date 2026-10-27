// tags/card.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/card.marko": "__tests__/tags/card.marko !;b%;<!><!><!>",
	"__tests__/tags/card.marko_1*shell": "__tests__/tags/card.marko_1*shell !__tests__/tags/card.marko_1; D ;<button> </button>"
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let f = input.fn;
			_html(`<button>${_patch_text($scope1_id, "#text/1", f(), void 0, (_mask_group($scope0_reason, 1) & 1) << 1, 0, 1)}</button>${_el_resume($scope1_id, "#button/0")}`);
			_script($scope1_id, "__tests__/tags/card.marko_1");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/tags/card.marko_1_input_fn#0:4/init");
			$scope0_page && _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/tags/card.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/card.marko_1*shell"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { input_fn: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.fn }, "__tests__/tags/card.marko", 0, { input_fn: ["input.fn"] }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", input.fn, !_server_guard($scope0_reason, 1));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1));
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	card_default({
		show: input.show,
		fn: _bind_resume(function() {
			return "f:" + input.label;
		}, "__tests__/template.marko_0/fn", $scope0_id)
	});
	_patch_child_end();
	$scope0_page && _scope($scope0_id, {
		input_label: _write_if($scope0_reason, 0) && input.label,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);

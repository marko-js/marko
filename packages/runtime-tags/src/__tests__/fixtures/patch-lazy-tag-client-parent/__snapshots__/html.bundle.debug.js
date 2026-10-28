// components/child.marko
const $template$2 = "<button><!>:<!></button>";
const $walks$2 = " D%c%l";
const $setup$2 = [[], ["__tests__/components/child.marko_0"]];
_shells({ "__tests__/components/child.marko": "__tests__/components/child.marko !__tests__/components/child.marko_0; D%c%;<button><!>:<!></button>" });
var child_default = _template("__tests__/components/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", input.label, void 0, $scope0_reason, 0)}:${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/components/child.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/components/child.marko_fill0", count, 1);
	_scope($scope0_id, { count }, "__tests__/components/child.marko", 0, { count: "1:6" });
});

// components/wrapper.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
const $Child_withLoadAssets = withLoadAssets(() => child_default, "__tests__/components/child.marko", flush, "ready:__tests__/components/child.marko");
const $setup$1 = [[], []];
_shells({
	"__tests__/components/wrapper.marko": "__tests__/components/wrapper.marko !; ;<section></section>",
	"__tests__/components/wrapper.marko_1*shell": /*@__PURE__*/ (() => `__tests__/components/wrapper.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/1>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$2)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$2)}`)()
});
var wrapper_default = _template("__tests__/components/wrapper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/1", 0);
			$Child_withLoadAssets({ label: input.label });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/components/wrapper.marko_1_input_label#0:4/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/1": _existing_scope($childScope)
			}, "__tests__/components/wrapper.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#section/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/components/wrapper.marko_1*shell"], $scope0_reason, 0);
	_html(`</section>${_el_resume($scope0_id, "#section/0", $wg__input_show)}`);
	_scope($scope0_id, { input_label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label }, "__tests__/components/wrapper.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/components/wrapper.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
});

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; ;<main></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let mounted = false;
	_html("<main>");
	_if(() => {
		if (mounted) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 2) << 3);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			wrapper_default({
				show: input.show,
				label: input.label
			});
			_patch_child_end();
			_scope($scope1_id, { "#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope) }, "__tests__/template.marko", "6:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, 1, 1, "</main>", 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_show: input.show,
		input_label: input.label
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_label: ["input.label"]
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.show, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.label, !_server_guard($scope0_reason, 2)));
}, 1);

// tags/lib.ts
const units = [
	"",
	"K",
	"M"
];
const lib = { format(value) {
	return value.toUpperCase() + units[value.length % units.length];
} };

// tags/rowsx.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template$1 = "<!><!><button class=l>l</button>";
const $walks$1 = "b%b b";
const $setup$1 = [[], ["__tests__/tags/rowsx.marko_0"]];
_shells({
	"__tests__/tags/rowsx.marko_2*content": "__tests__/tags/rowsx.marko_2*content !;b%;<!><!><!>",
	"~__tests__/tags/rowsx.marko_2*content": "~__tests__/tags/rowsx.marko_2*content !;b%;<!><!><!>",
	"__tests__/tags/rowsx.marko": "__tests__/tags/rowsx.marko !__tests__/tags/rowsx.marko_0;b%b ;<!><!><button class=l>l</button>",
	"__tests__/tags/rowsx.marko_1*shell": /*@__PURE__*/ (() => `__tests__/tags/rowsx.marko_1*shell __tests__/tags/rowsx.marko_1_suffix#0:6/init;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)(),
	"__tests__/tags/rowsx.marko_3*shell": "__tests__/tags/rowsx.marko_3*shell;D ;<em> </em>"
});
var rowsx_default = _template("__tests__/tags/rowsx.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let suffix = "s";
	const Panel = { content: _content("__tests__/tags/rowsx.marko_2*content", ({ isOpen, fmt, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen = _write_guard($scope2_reason, 4), $cg__isOpen = _client_guard($scope2_reason, 4);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_resume($scope3_id, "#text/0", fmt(label), 1, $scope2_reason, 2)}</em>`);
				_client_guard($scope2_reason, 2) && _patch_init($scope3_id, "__tests__/tags/rowsx.marko_3_fmt#2:4_label#2:5/init");
				_scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) }, "__tests__/tags/rowsx.marko", "4:4");
				return 0;
			}
		}, $scope2_id, "#text/0", 1, $wg__isOpen, 1, 0, 0, ["__tests__/tags/rowsx.marko_3*shell"], $scope2_reason, 4);
		_write_if($scope2_reason, 3) && _scope($scope2_id, {
			fmt: (_unfilled_if($scope2_reason, 1) || _unfilled_if($scope2_reason, 2) || _unfilled_if($scope2_reason, 4)) && fmt,
			label: (_unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 2) || _unfilled_if($scope2_reason, 4) || _unfilled_if($scope2_reason, 6)) && label
		}, "__tests__/tags/rowsx.marko", "3:2", {
			fmt: "3:25",
			label: "3:30"
		}) || (_filled_guard($scope2_reason, 5) && ($cg__isOpen || _client_guard($scope2_reason, 6)) && _patch_fill($scope2_id, "PatchFill:__tests__/tags/rowsx.marko_fill3", fmt, !_server_guard($scope2_reason, 5)), _filled_guard($scope2_reason, 6) && $cg__isOpen && _patch_fill($scope2_id, "PatchFill:__tests__/tags/rowsx.marko_fill4", label, !_server_guard($scope2_reason, 6)));
	}, $scope0_id, 1) };
	_for_of(input.items, (x) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 0) && _patch_fill($scope1_id, "PatchFill:__tests__/tags/rowsx.marko_fill2", x);
		_set_scope_reason(25080 | (_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 9));
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		Panel.content({
			isOpen: input.open,
			fmt: lib.format,
			label: suffix + x
		});
		_patch_child_end();
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/tags/rowsx.marko_1_input_open#0:5/init");
		_scope($scope1_id, {
			x,
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/tags/rowsx.marko", "8:2", { x: "8:6" });
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/tags/rowsx.marko_1*shell", $scope0_reason, 0);
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/rowsx.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/rowsx.marko_fill1", suffix, 1);
	_scope($scope0_id, {
		input_open: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.open,
		suffix
	}, "__tests__/tags/rowsx.marko", 0, {
		input_open: ["input.open"],
		suffix: "2:6"
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/rowsx.marko_fill0", input.open, !_server_guard($scope0_reason, 1));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 3) << 1 | _mask_group($scope0_reason, 2) << 3);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			rowsx_default({
				open: input.open,
				items: input.items
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_open#0:4/init");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "__tests__/template.marko_1_input_items#0:5/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, {
		input_open: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.open,
		input_items: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.items
	}, "__tests__/template.marko", 0, {
		input_open: ["input.open"],
		input_items: ["input.items"]
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.open, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.items, !_server_guard($scope0_reason, 3)));
}, 1);

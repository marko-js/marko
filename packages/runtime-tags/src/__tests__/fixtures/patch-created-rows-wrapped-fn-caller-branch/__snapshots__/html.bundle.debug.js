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
const $template$1 = "<!><!><!><button class=toggle>toggle</button>";
const $walks$1 = "b%b%b b";
const $setup$1 = [[], ["__tests__/tags/rowsx.marko_0"]];
_shells({
	"__tests__/tags/rowsx.marko_3*content": "__tests__/tags/rowsx.marko_3*content;b%;<!><!><!>",
	"__tests__/tags/rowsx.marko": "__tests__/tags/rowsx.marko !__tests__/tags/rowsx.marko_0;b%b%b ;<!><!><!><button class=toggle>toggle</button>",
	"__tests__/tags/rowsx.marko_1*shell": /*@__PURE__*/ (() => `__tests__/tags/rowsx.marko_1*shell;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)(),
	"__tests__/tags/rowsx.marko_4*shell": "__tests__/tags/rowsx.marko_4*shell;D ;<em> </em>"
});
var rowsx_default = _template("__tests__/tags/rowsx.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 4), $cg__input_items = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("__tests__/tags/rowsx.marko_3*content", ({ isOpen, fmt, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__isOpen = _write_guard($scope3_reason, 4), $cg__isOpen = _client_guard($scope3_reason, 4);
		_if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_resume($scope4_id, "#text/0", fmt(label), 1, $scope3_reason, 2)}</em>`);
				_patch_init_entry($scope4_id, "__tests__/tags/rowsx.marko_4_fmt#3:4_label#3:5/init", [_filled_guard($scope3_reason, 5) && ">fmt", _filled_guard($scope3_reason, 6) && ">label"], $scope3_reason, 2);
				_scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) }, "__tests__/tags/rowsx.marko", "4:4");
				return 0;
			}
		}, $scope3_id, "#text/0", 1, $wg__isOpen, 1, 0, 0, ["__tests__/tags/rowsx.marko_4*shell"], $scope3_reason, 4);
		_filled_guard($scope3_reason, 5) && $cg__isOpen ? _patch_fill($scope3_id, "PatchFill:__tests__/tags/rowsx.marko_fill3/unpatched", fmt) : _client_guard($scope3_reason, 1) && _patch_write($scope3_id, "PatchMarkedWrite:fmt", fmt, !(_filled_guard($scope3_reason, 5) && _client_guard($scope3_reason, 6)));
		_filled_guard($scope3_reason, 6) && $cg__isOpen ? _patch_fill($scope3_id, "PatchFill:__tests__/tags/rowsx.marko_fill4/unpatched", label) : _filled_guard($scope3_reason, 6) && _client_guard($scope3_reason, 5) && _patch_write($scope3_id, "PatchMarkedWrite:label", label);
		_write_if($scope3_reason, 3) && _scope($scope3_id, {
			fmt: (_unfilled_if($scope3_reason, 1) || _unfilled_if($scope3_reason, 2)) && fmt,
			label: (_unfilled_if($scope3_reason, 0) || _unfilled_if($scope3_reason, 2)) && label
		}, "__tests__/tags/rowsx.marko", "3:2", {
			fmt: "3:25",
			label: "3:30"
		});
	}, $scope0_id, 1) };
	_for_of(input.items, (x) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 2) && _patch_write($scope1_id, "PatchMarkedWrite:x", x, !_server_guard($scope0_reason, 2));
		_set_scope_reason(_mask_group($scope0_reason, 3) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 1) << 7 | _mask_group($scope0_reason, 3) << 9 | _mask_group($scope0_reason, 0) << 13);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		Panel.content({
			isOpen: input.open,
			fmt: _resume((v) => lib.format(v), "__tests__/tags/rowsx.marko_1/fmt"),
			label: input.label + x
		});
		_patch_child_end();
		_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "__tests__/tags/rowsx.marko_1_input_open#0:6/init");
		(_filled_guard($scope0_reason, 4) && !$cg__input_items || _filled_guard($scope0_reason, 2)) && _patch_init_entry($scope1_id, "__tests__/tags/rowsx.marko_1_input_label#0:7_x#2/init", [_filled_guard($scope0_reason, 4) && ">input_label", _filled_guard($scope0_reason, 2) && "x"], $scope0_reason, 0);
		_scope($scope1_id, {
			x: _write_if($scope0_reason, 4) && x,
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/tags/rowsx.marko", "8:2", { x: "8:6" });
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/tags/rowsx.marko_1*shell", $scope0_reason, 2);
	_if(() => {
		if (open) {
			const $scope2_id = _scope_id();
			_html(`<b>${_text_resume($scope2_id, "#text/0", input.label, $wg__input_label)}</b>`);
			_scope($scope2_id, {}, "__tests__/tags/rowsx.marko", "11:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/rowsx.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/rowsx.marko_fill2", open, 1);
	_scope($scope0_id, {
		input_open: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.open,
		input_label: input.label,
		open
	}, "__tests__/tags/rowsx.marko", 0, {
		input_open: ["input.open"],
		input_label: ["input.label"],
		open: "2:6"
	}) || (_filled_guard($scope0_reason, 3) && $cg__input_items && _patch_fill($scope0_id, "PatchFill:__tests__/tags/rowsx.marko_fill0", input.open, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && ($cg__input_items ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/rowsx.marko_fill1/unpatched", input.label) : _patch_fill($scope0_id, "PatchFill:__tests__/tags/rowsx.marko_fill1", input.label, !_server_guard($scope0_reason, 4))));
});

// template.marko
const $template = "<!><!><button class=l>l</button><button class=o>o</button>";
const $walks = "b%b b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b b ;<!><!><button class=l>l</button><button class=o>o</button>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([["__tests__/template.marko_1_l#0:7/init", "__tests__/template.marko_1_o#0:8/init"], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let l = "a";
	let o = true;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(670 | _mask_group($scope0_reason, 1) << 5);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			rowsx_default({
				label: l,
				open: o,
				items: input.items
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_items#0:6/init");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "#button/1")}<button class=o>o</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_items: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.items,
		l,
		o
	}, "__tests__/template.marko", 0, {
		input_items: ["input.items"],
		l: "1:6",
		o: "2:6"
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.items, !_server_guard($scope0_reason, 1));
}, 1);

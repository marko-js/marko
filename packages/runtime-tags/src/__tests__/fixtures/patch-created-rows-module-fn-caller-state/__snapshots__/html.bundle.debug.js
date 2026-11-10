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
	"__tests__/tags/rowsx.marko_1*shell": `__tests__/tags/rowsx.marko_1*shell;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`,
	"__tests__/tags/rowsx.marko_4*shell": "__tests__/tags/rowsx.marko_4*shell;D ;<em> </em>"
});
var rowsx_default = _template("__tests__/tags/rowsx.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_items__OR__input_open__OR__input_label = _updates_from($scope0_reason, 1), $uf__input_open = _updates_from($scope0_reason, 3), $uf__input_items__OR__input_label = _updates_from($scope0_reason, 0), $wg__input_label = _write_guard($scope0_reason, 4), $ui__input_items = _unfilled_if($scope0_reason, 2), $fg__input_open = _filled_guard($scope0_reason, 3), $fg__input_label = _filled_guard($scope0_reason, 4), $cg__input_items = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("__tests__/tags/rowsx.marko_3*content", ({ isOpen, fmt, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__isOpen = _write_guard($scope3_reason, 4), $ui__isOpen__OR__fmt = _unfilled_if($scope3_reason, 0), $fg__fmt = _filled_guard($scope3_reason, 5), $fg__label = _filled_guard($scope3_reason, 6), $cg__isOpen = _client_guard($scope3_reason, 4);
		_if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_mark($scope4_id, "#text/0", fmt(label), 1, $scope3_reason, 2)}</em>`);
				_patch_render($scope4_id, "__tests__/tags/rowsx.marko_4_fmt#3:4_label#3:5/setup", ((_filled_guard($scope3_reason, 5) ? " >fmt" : "") + (_filled_guard($scope3_reason, 6) ? " >label" : "")).slice(1), $scope3_reason, 2);
				_scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) }, "__tests__/tags/rowsx.marko", "4:4");
				return 0;
			}
		}, $scope3_id, "#text/0", 1, $wg__isOpen, 1, 0, 0, ["__tests__/tags/rowsx.marko_4*shell"], $scope3_reason, 4);
		$fg__fmt && $cg__isOpen && _patch_render($scope3_id, "__tests__/tags/rowsx.marko_4_fmt#3:4/setup", "fmt");
		$fg__label && $cg__isOpen && _patch_render($scope3_id, "__tests__/tags/rowsx.marko_4_label#3:5/setup", "label");
		_write_if($scope3_reason, 3) && _scope($scope3_id, {
			fmt: (_unfilled_if($scope3_reason, 1, 5) || _unfilled_if($scope3_reason, 2, 5)) && fmt,
			label: ($ui__isOpen__OR__fmt || _unfilled_if($scope3_reason, 2)) && label
		}, "__tests__/tags/rowsx.marko", "3:2", {
			fmt: "3:25",
			label: "3:30"
		}) || ($fg__fmt && _unfilled_if($scope3_reason, 1) && _patch_write($scope3_id, "PatchMarkedWrite:fmt", fmt, 1), $fg__label && $ui__isOpen__OR__fmt && _patch_write($scope3_id, "PatchMarkedWrite:label", label, !_server_guard($scope3_reason, 6)));
	}, $scope0_id, 0) };
	_for_of(input.items, (x) => {
		const $scope1_id = _scope_id(), $ui__input_label = _unfilled_if($scope0_reason, 4), $fg__input_items = _filled_guard($scope0_reason, 2);
		$fg__input_items && $ui__input_label && _patch_write($scope1_id, "PatchMarkedWrite:x", x, !_server_guard($scope0_reason, 2));
		_set_scope_reason($uf__input_open << 1 | $uf__input_items__OR__input_open__OR__input_label << 3 | $uf__input_items__OR__input_label << 5 | $uf__input_items__OR__input_open__OR__input_label << 7 | $uf__input_open << 9 | $uf__input_items__OR__input_label << 13);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		Panel.content({
			isOpen: input.open,
			fmt: lib.format,
			label: input.label + x
		});
		_patch_child_end();
		_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "__tests__/tags/rowsx.marko_1_input_open#0:6/setup");
		_patch_render($scope1_id, "__tests__/tags/rowsx.marko_1_input_label#0:7_x#2/setup", ((_filled_guard($scope0_reason, 4) ? " >input_label" : "") + ($fg__input_items ? " x" : "")).slice(1), $scope0_reason, 0);
		_scope($scope1_id, {
			x: ($ui__input_label || _unfilled_if($scope0_reason, 0)) && x,
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/tags/rowsx.marko", "8:2", { x: "8:6" });
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/tags/rowsx.marko_1*shell", $scope0_reason, 2);
	_if(() => {
		if (open) {
			const $scope2_id = _scope_id();
			_html(`<b>${_text_mark($scope2_id, "#text/0", input.label, $wg__input_label)}</b>`);
			_client_guard($scope0_reason, 4) && _patch_render($scope2_id, "__tests__/tags/rowsx.marko_2_input_label#0:7/setup");
			_scope($scope2_id, {}, "__tests__/tags/rowsx.marko", "11:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/rowsx.marko_0");
	$fg__input_open && $cg__input_items && _patch_render($scope0_id, "__tests__/tags/rowsx.marko_1_input_open#0:6/setup", "input_open");
	$fg__input_label && $cg__input_items && _patch_render($scope0_id, "__tests__/tags/rowsx.marko_1_input_label#0:7/setup", "input_label");
	$fg__input_label && _patch_render($scope0_id, "__tests__/tags/rowsx.marko_2_input_label#0:7/setup", "input_label");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/rowsx.marko_0_open#8/fill", open, 1);
	_scope($scope0_id, {
		input_open: ($ui__input_items || _unfilled_if($scope0_reason, 3)) && input.open,
		input_label: input.label,
		open
	}, "__tests__/tags/rowsx.marko", 0, {
		input_open: ["input.open"],
		input_label: ["input.label"],
		open: "2:6"
	}) || ($fg__input_open && $ui__input_items && _patch_write($scope0_id, "PatchMarkedWrite:input_open", input.open, !_server_guard($scope0_reason, 3)), $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 4)));
});

// template.marko
const $template = "<!><!><button class=l>l</button>";
const $walks = "b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button class=l>l</button>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([["__tests__/template.marko_1_l#0:7/setup"], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_open = _filled_guard($scope0_reason, 1), $fg__input_items = _filled_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let l = "a";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(542 | (_updates_from($scope0_reason, 2) << 5 | _updates_from($scope0_reason, 1) << 7));
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			rowsx_default({
				label: l,
				open: input.open,
				items: input.items
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_input_open#0:5/setup");
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "__tests__/template.marko_1_input_items#0:6/setup");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<button class=l>l</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_open && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_open#0:5/setup", "input_open");
	$fg__input_items && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_items#0:6/setup", "input_items");
	_scope($scope0_id, {
		input_open: ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.open,
		input_items: ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.items,
		l
	}, "__tests__/template.marko", 0, {
		input_open: ["input.open"],
		input_items: ["input.items"],
		l: "1:6"
	}) || ($fg__input_open && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_open", input.open, !_server_guard($scope0_reason, 1)), $fg__input_items && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_items", input.items, !_server_guard($scope0_reason, 2)));
}, 1);

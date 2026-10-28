// lib.ts
const units = [
	"",
	"K",
	"M"
];
const lib = { format(value) {
	return value.toUpperCase() + units[value.length % units.length];
} };

// tags/card.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template$1 = "<!><!><!><button class=toggle>toggle</button>";
const $walks$1 = "b%b%b b";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({
	"__tests__/tags/card.marko_3*content": "__tests__/tags/card.marko_3*content;b%;<!><!><!>",
	"__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0;b%b%b ;<!><!><!><button class=toggle>toggle</button>",
	"__tests__/tags/card.marko_1*shell": /*@__PURE__*/ (() => `__tests__/tags/card.marko_1*shell;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)(),
	"__tests__/tags/card.marko_4*shell": "__tests__/tags/card.marko_4*shell;D ;<em> </em>"
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 7), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content_elide("__tests__/tags/card.marko_3*content", ({ isOpen, fmt, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__isOpen = _write_guard($scope3_reason, 4), $cg__isOpen = _client_guard($scope3_reason, 4);
		_if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_resume($scope4_id, "#text/0", fmt(label), void 0, $scope3_reason, 2)}</em>`);
				_patch_join_init($scope4_id, "__tests__/tags/card.marko_4_fmt#3:4_label#3:5/init", $scope3_reason, 2, _filled_guard($scope3_reason, 5) && ">fmt", _filled_guard($scope3_reason, 6) && ">label");
				_scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) }, "__tests__/tags/card.marko", "3:4");
				return 0;
			}
		}, $scope3_id, "#text/0", 1, $wg__isOpen, void 0, void 0, void 0, ["__tests__/tags/card.marko_4*shell"], $scope3_reason, 4);
		_filled_guard($scope3_reason, 5) && $cg__isOpen ? _patch_fill($scope3_id, "PatchFill:__tests__/tags/card.marko_fill4/unpatched", fmt) : _client_guard($scope3_reason, 1) && _patch_write($scope3_id, "PatchMarkedWrite:fmt", fmt, !(_filled_guard($scope3_reason, 5) && _client_guard($scope3_reason, 6)));
		_filled_guard($scope3_reason, 6) && $cg__isOpen ? _patch_fill($scope3_id, "PatchFill:__tests__/tags/card.marko_fill5/unpatched", label) : _client_guard($scope3_reason, 0) && _patch_write($scope3_id, "PatchMarkedWrite:label", label, !(_filled_guard($scope3_reason, 6) && _client_guard($scope3_reason, 5)));
		_write_if($scope3_reason, 3) && _scope($scope3_id, {
			fmt: (_unfilled_if($scope3_reason, 1) || _unfilled_if($scope3_reason, 2)) && fmt,
			label: (_unfilled_if($scope3_reason, 0) || _unfilled_if($scope3_reason, 2)) && label
		}, "__tests__/tags/card.marko", "2:2", {
			fmt: "2:25",
			label: "2:30"
		});
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5 | _mask_group($scope0_reason, 3) << 7 | _mask_group($scope0_reason, 5) << 9 | _mask_group($scope0_reason, 6) << 11 | _mask_group($scope0_reason, 7) << 13);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			Panel.content({
				isOpen: input.open,
				fmt: input.fmt,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 5) && _patch_init($scope1_id, "__tests__/tags/card.marko_1_input_open#0:6/init");
			_client_guard($scope0_reason, 6) && _patch_init($scope1_id, "__tests__/tags/card.marko_1_input_fmt#0:7/init");
			_client_guard($scope0_reason, 7) && _patch_init($scope1_id, "__tests__/tags/card.marko_1_input_label#0:8/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/card.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 4), void 0, void 0, void 0, ["__tests__/tags/card.marko_1*shell"], $scope0_reason, 4);
	_if(() => {
		if (open) {
			const $scope2_id = _scope_id();
			_html(`<b>${_text_resume($scope2_id, "#text/0", input.label, $wg__input_label)}</b>`);
			_scope($scope2_id, {}, "__tests__/tags/card.marko", "10:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill3", open, 1);
	_scope($scope0_id, {
		input_open: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 5)) && input.open,
		input_fmt: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 6)) && input.fmt,
		input_label: input.label,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_open: ["input.open"],
		input_fmt: ["input.fmt"],
		input_label: ["input.label"],
		open: "1:6"
	}) || (_filled_guard($scope0_reason, 5) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", input.open, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 6) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill1", input.fmt, !_server_guard($scope0_reason, 6)), _filled_guard($scope0_reason, 7) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill2/unpatched", input.label) : _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill2", input.label, !_server_guard($scope0_reason, 7))));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=hide>hide</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=hide>hide</button>`)($template$1, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let shown = true;
	_set_scope_reason(512 | (_mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 0) << 7 | _mask_group($scope0_reason, 0) << 15));
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	card_default({
		show: shown,
		open: true,
		fmt: _resume((s) => s + "!", "__tests__/template.marko_0/fmt"),
		label: input.label
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 0) << 7 | _mask_group($scope0_reason, 0) << 15);
	const $childScope2 = _patch_child($scope0_id, "#childScope/1", 1);
	card_default({
		show: true,
		open: true,
		fmt: lib.format,
		label: input.label
	});
	_patch_child_end();
	_html(`<button class=hide>hide</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		shown,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { shown: "2:6" });
}, 1);

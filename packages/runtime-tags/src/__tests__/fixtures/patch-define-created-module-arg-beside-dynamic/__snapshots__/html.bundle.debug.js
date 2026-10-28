// lib.ts
const units = [
	"",
	"K",
	"M"
];
const lib = { format(value) {
	return value.toUpperCase() + units[value.length % units.length];
} };

// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<!><!><!><button class=toggle>toggle</button>";
const $walks = "b%b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b%b ;<!><!><!><button class=toggle>toggle</button>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)(),
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;D ;<em> </em>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("__tests__/template.marko_2*content", ({ isOpen, fmt, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen = _write_guard($scope2_reason, 4), $cg__isOpen = _client_guard($scope2_reason, 4);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_resume($scope3_id, "#text/0", fmt(label), 1, $scope2_reason, 2)}</em>`);
				_patch_init_entry($scope3_id, "__tests__/template.marko_3_fmt#2:4_label#2:5/init", [_filled_guard($scope2_reason, 5) && ">fmt", _filled_guard($scope2_reason, 6) && ">label"], $scope2_reason, 2);
				_scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) }, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope2_id, "#text/0", 1, $wg__isOpen, 1, 0, 0, ["__tests__/template.marko_3*shell"], $scope2_reason, 4);
		_filled_guard($scope2_reason, 5) && $cg__isOpen ? _patch_fill($scope2_id, "PatchFill:__tests__/template.marko_fill3/unpatched", fmt) : _filled_guard($scope2_reason, 5) && _client_guard($scope2_reason, 6) && _patch_write($scope2_id, "PatchMarkedWrite:fmt", fmt);
		_filled_guard($scope2_reason, 6) && $cg__isOpen ? _patch_fill($scope2_id, "PatchFill:__tests__/template.marko_fill4/unpatched", label) : _client_guard($scope2_reason, 0) && _patch_write($scope2_id, "PatchMarkedWrite:label", label, !(_filled_guard($scope2_reason, 6) && _client_guard($scope2_reason, 5)));
		_write_if($scope2_reason, 3) && _scope($scope2_id, {
			fmt: (_unfilled_if($scope2_reason, 1, 5) || _unfilled_if($scope2_reason, 2, 5)) && fmt,
			label: (_unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 2)) && label
		}, "__tests__/template.marko", "3:2", {
			fmt: "3:25",
			label: "3:30"
		});
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 3) << 5 | _mask_group($scope0_reason, 0) << 7 | _mask_group($scope0_reason, 2) << 9 | _mask_group($scope0_reason, 3) << 13);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			Panel.content({
				isOpen: input.open,
				fmt: lib.format,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_open#0:6/init");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:7/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "8:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "#text/1", Tag, {
		isOpen: !open,
		fmt: _resume((s) => s + "!", "__tests__/template.marko_0/fmt"),
		label: input.label
	}, 8);
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_open: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.open,
		input_label: input.label,
		open,
		Panel: _unfilled_if($scope0_reason, 4) && Panel,
		Tag
	}, "__tests__/template.marko", 0, {
		input_open: ["input.open"],
		input_label: ["input.label"],
		open: "2:6",
		Panel: "3:9",
		Tag: "11:8"
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.open, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1/unpatched", input.label) : _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.label, !_server_guard($scope0_reason, 3))), _content_withhold(input.label), _filled_guard($scope0_reason, 4) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", Tag, !_server_guard($scope0_reason, 4)), _content_withhold(Tag));
}, 1);

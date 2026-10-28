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
const $Panel_content__walks = "D l";
const $Panel_content__template = "<em> </em>";
const $template = "<!><!><!><button class=toggle>toggle</button>";
const $walks = "b%b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b%b ;<!><!><!><button class=toggle>toggle</button>",
	"__tests__/template.marko_2*shell": /*@__PURE__*/ (() => `__tests__/template.marko_2*shell;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("__tests__/template.marko_3*content", ({ fmt, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $cg__fmt = _client_guard($scope3_reason, 1);
		_html(`<em>${_text_resume($scope3_id, "#text/0", fmt(label), void 0, $scope3_reason, 0)}</em>`);
		_filled_guard($scope3_reason, 1) && _client_guard($scope3_reason, 2) && _patch_write($scope3_id, "PatchMarkedWrite:fmt", fmt);
		$cg__fmt && _patch_write($scope3_id, "PatchMarkedWrite:label", label, !(_filled_guard($scope3_reason, 2) && $cg__fmt));
		_patch_join_init($scope3_id, "__tests__/template.marko_3_fmt#3_label#4/init", $scope3_reason, 0, _filled_guard($scope3_reason, 1) && "fmt", _filled_guard($scope3_reason, 2) && "label");
		_scope($scope3_id, {
			fmt: (_unfilled_if($scope3_reason, 2, 1) || _unfilled_if($scope3_reason, 0, 1)) && fmt,
			label: (_unfilled_if($scope3_reason, 1) || _unfilled_if($scope3_reason, 0)) && label
		}, "__tests__/template.marko", "3:2", {
			fmt: "3:17",
			label: "3:22"
		});
	}, $scope0_id) };
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			Panel.content({
				fmt: lib.format,
				label: input.label
			});
			_patch_child_end();
			_scope($scope1_id, { "#childScope/0": $wi__input_label && _existing_scope($childScope) }, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
			const $childScope2 = _patch_child($scope2_id, "#childScope/0", 1);
			Panel.content({
				fmt: lib.format,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 0) && _patch_init($scope2_id, "__tests__/template.marko_2_input_label#0:5/init");
			_scope($scope2_id, {
				_: $wi__input_label && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "9:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 1);
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		open
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		open: "2:6"
	}) || _filled_guard($scope0_reason, 0) && (_client_guard($scope0_reason, 1) ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0/unpatched", input.label) : _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0)));
}, 1);

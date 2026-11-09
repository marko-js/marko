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
	"__tests__/template.marko_2*shell": `__tests__/template.marko_2*shell;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($Panel_content__walks)};${$Panel_content__template}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_label = _updates_from($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("__tests__/template.marko_3*content", ({ fmt, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $ui__fmt = _unfilled_if($scope3_reason, 1), $fg__fmt = _filled_guard($scope3_reason, 1), $fg__label = _filled_guard($scope3_reason, 2);
		_html(`<em>${_text_mark($scope3_id, "#text/0", fmt(label), 1, $scope3_reason, 0)}</em>`);
		_patch_render($scope3_id, "__tests__/template.marko_3_fmt#3_label#4/setup", [$fg__fmt && "fmt", $fg__label && "label"], $scope3_reason, 0);
		_scope($scope3_id, {
			fmt: (_unfilled_if($scope3_reason, 2, 1) || _unfilled_if($scope3_reason, 0, 1)) && fmt,
			label: ($ui__fmt || _unfilled_if($scope3_reason, 0)) && label
		}, "__tests__/template.marko", "3:2", {
			fmt: "3:17",
			label: "3:22"
		}) || ($fg__fmt && _unfilled_if($scope3_reason, 2) && _patch_write($scope3_id, "PatchMarkedWrite:fmt", fmt, !_server_guard($scope3_reason, 1)), $fg__label && $ui__fmt && _patch_write($scope3_id, "PatchMarkedWrite:label", label, !_server_guard($scope3_reason, 2)));
	}, $scope0_id) };
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_scope_reason($uf__input_label << 1 | $uf__input_label << 5);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			Panel.content({
				fmt: lib.format,
				label: input.label
			});
			_patch_child_end();
			$cg__input_label && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:5/setup");
			_scope($scope1_id, { "#childScope/0": $wi__input_label && _existing_scope($childScope) }, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason($uf__input_label << 1 | $uf__input_label << 5);
			const $childScope2 = _peek_scope_id($scope2_id, "#childScope/0", 1);
			Panel.content({
				fmt: lib.format,
				label: input.label
			});
			_patch_child_end();
			$cg__input_label && _patch_render($scope2_id, "__tests__/template.marko_2_input_label#0:5/setup");
			_scope($scope2_id, {
				_: $wi__input_label && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "9:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 1);
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_label && _patch_render($scope0_id, "__tests__/template.marko_1_input_label#0:5/setup", "input_label");
	$fg__input_label && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "__tests__/template.marko_2_input_label#0:5/setup", "input_label");
	_scope($scope0_id, {
		input_label: input.label,
		open
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		open: "2:6"
	}) || $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0));
}, 1);

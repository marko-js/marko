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
const $template = "<!><!><button class=toggle>toggle</button>";
const $walks = "b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button class=toggle>toggle</button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_label = _updates_from($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("__tests__/template.marko_2*content", ({ fmt, a, b }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $fg__fmt = _filled_guard($scope2_reason, 3);
		_html(`<em>${_text_mark($scope2_id, "#text/0", fmt(a), 1, $scope2_reason, 0)} ${_text_mark($scope2_id, "#text/1", fmt(b), 2, $scope2_reason, 1)}</em>`);
		_patch_render($scope2_id, "__tests__/template.marko_2_fmt#4_a#5/setup", (($fg__fmt ? " fmt" : "") + (_filled_guard($scope2_reason, 4) ? " a" : "")).slice(1), $scope2_reason, 0);
		_patch_render($scope2_id, "__tests__/template.marko_2_fmt#4_b#7/setup", (($fg__fmt ? " fmt" : "") + (_filled_guard($scope2_reason, 5) ? " b" : "")).slice(1), $scope2_reason, 1);
		_scope($scope2_id, { fmt: _write_if($scope2_reason, 2) && (_unfilled_if($scope2_reason, 2, 3) || _unfilled_if($scope2_reason, 0, 3) || _unfilled_if($scope2_reason, 1, 3)) && fmt }, "__tests__/template.marko", "3:2", {
			fmt: "3:17",
			a: "3:22",
			b: "3:25"
		}) || $fg__fmt && _unfilled_if($scope2_reason, 2) && _patch_write($scope2_id, "PatchMarkedWrite:fmt", fmt, 1);
	}, $scope0_id) };
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_scope_reason($uf__input_label << 1 | $uf__input_label << 3 | $uf__input_label << 5 | $uf__input_label << 9 | $uf__input_label << 11);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			Panel.content({
				fmt: lib.format,
				a: input.label,
				b: input.label + "!"
			});
			_patch_child_end();
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:4/setup");
			_scope($scope1_id, { "#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope) }, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_label && _patch_render($scope0_id, "__tests__/template.marko_1_input_label#0:4/setup", "input_label");
	_scope($scope0_id, {
		input_label: input.label,
		open
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		open: "2:6"
	}) || $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0));
}, 1);

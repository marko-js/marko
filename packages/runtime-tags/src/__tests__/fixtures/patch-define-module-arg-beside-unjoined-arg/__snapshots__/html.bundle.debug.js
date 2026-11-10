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
	const $scope0_reason = _scope_reason(), $uf__input_label = _updates_from($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 1), $fg__input_title = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("__tests__/template.marko_2*content", ({ fmt, label, title }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $fg__fmt = _filled_guard($scope2_reason, 1);
		_html(`<em>${_text_mark($scope2_id, "#text/0", fmt(label), 1, $scope2_reason, 0)}</em><b>${_text_mark($scope2_id, "#text/1", title, 1, $scope2_reason, 3)}</b>`);
		_patch_render($scope2_id, "__tests__/template.marko_2_fmt#4_label#5/setup", [$fg__fmt && "fmt", _filled_guard($scope2_reason, 2) && "label"], $scope2_reason, 0);
		_scope($scope2_id, {
			fmt: (_unfilled_if($scope2_reason, 2, 1) || _unfilled_if($scope2_reason, 0, 1)) && fmt,
			label: _unfilled_if($scope2_reason, 0) && label
		}, "__tests__/template.marko", "3:2", {
			fmt: "3:17",
			label: "3:22"
		}) || $fg__fmt && _unfilled_if($scope2_reason, 2) && _patch_write($scope2_id, "PatchMarkedWrite:fmt", fmt, 1);
	}, $scope0_id) };
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_scope_reason($uf__input_label << 1 | $uf__input_label << 5 | _updates_from($scope0_reason, 2) << 7);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			Panel.content({
				fmt: lib.format,
				label: input.label,
				title: input.title
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:4/setup");
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "__tests__/template.marko_1_input_title#0:5/setup");
			_scope($scope1_id, { "#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope) }, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_label && _patch_render($scope0_id, "__tests__/template.marko_1_input_label#0:4/setup", "input_label");
	$fg__input_title && _patch_render($scope0_id, "__tests__/template.marko_1_input_title#0:5/setup", "input_title");
	_scope($scope0_id, {
		input_label: input.label,
		input_title: input.title,
		open
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_title: ["input.title"],
		open: "2:6"
	}) || ($fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1)), $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 2)));
}, 1);

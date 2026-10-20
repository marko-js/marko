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
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button class=toggle>toggle</button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("__tests__/template.marko_2*content", ({ fmt, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<em>${_patch_text($scope2_id, "#text/0", fmt(label), void 0, $scope2_reason, 0)}</em>`);
		_patch_write($scope2_id, "PatchWrite:label", label, 1);
		_scope($scope2_id, {
			fmt: (_unfilled_if($scope2_reason, 2, 1) || _unfilled_if($scope2_reason, 0, 1)) && fmt,
			label: (_unfilled_if($scope2_reason, 1) || _unfilled_if($scope2_reason, 0)) && label
		}, "__tests__/template.marko", "3:2", {
			fmt: "3:17",
			label: "3:22"
		});
	}, $scope0_id) };
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
			const $childScope = _peek_scope_id();
			Panel.content({
				fmt: lib.format,
				label: input.label
			});
			_scope($scope1_id, { "#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope) }, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", open, 1);
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		open
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		open: "2:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
}, 1);

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
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("__tests__/template.marko_2*content", (props) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<em>${_patch_text($scope2_id, "#text/0", props.fmt(props.label), void 0, $scope2_reason, 0)}</em>`);
		_scope($scope2_id, {}, "__tests__/template.marko", "3:2");
	}, $scope0_id) };
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			Panel.content({
				fmt: lib.format,
				label: input.label
			});
			_patch_child_end();
			_scope($scope1_id, { "#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope) }, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		open
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		open: "2:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
}, 1);

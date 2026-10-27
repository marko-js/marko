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
	const Panel = { content: _content("__tests__/template.marko_2*content", ({ fmt, a, b }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $cg__fmt = _client_guard($scope2_reason, 3), $scope2_page = _page_render();
		_html(`<em>${_patch_text($scope2_id, "#text/0", fmt(a), void 0, $scope2_reason, 0)} ${_patch_text($scope2_id, "#text/1", fmt(b), 2, $scope2_reason, 1)}</em>`);
		_filled_guard($scope2_reason, 3) && (_client_guard($scope2_reason, 4) || _client_guard($scope2_reason, 5)) && _patch_write($scope2_id, "PatchMarkedWrite:fmt", fmt);
		$cg__fmt && _patch_write($scope2_id, "PatchMarkedWrite:a", a, !(_filled_guard($scope2_reason, 4) && $cg__fmt));
		$cg__fmt && _patch_write($scope2_id, "PatchMarkedWrite:b", b, !(_filled_guard($scope2_reason, 5) && $cg__fmt));
		_patch_join_init($scope2_id, "__tests__/template.marko_2_fmt#4_a#5/init", $scope2_reason, 0, _filled_guard($scope2_reason, 3) && "fmt", _filled_guard($scope2_reason, 4) && "a");
		_patch_join_init($scope2_id, "__tests__/template.marko_2_fmt#4_b#7/init", $scope2_reason, 1, _filled_guard($scope2_reason, 3) && "fmt", _filled_guard($scope2_reason, 5) && "b");
		$scope2_page && _scope($scope2_id, {
			fmt: (_unfilled_if($scope2_reason, 2, 3) || _unfilled_if($scope2_reason, 0, 3) || _unfilled_if($scope2_reason, 1, 3)) && fmt,
			a: (_unfilled_if($scope2_reason, 3) || _unfilled_if($scope2_reason, 0)) && a,
			b: (_unfilled_if($scope2_reason, 3) || _unfilled_if($scope2_reason, 1)) && b
		}, "__tests__/template.marko", "3:2", {
			fmt: "3:17",
			a: "3:22",
			b: "3:25"
		});
	}, $scope0_id) };
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 0) << 9 | _mask_group($scope0_reason, 0) << 11);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			Panel.content({
				fmt: lib.format,
				a: input.label,
				b: input.label + "!"
			});
			_patch_child_end();
			$scope0_page && _scope($scope1_id, { "#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope) }, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		open
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		open: "2:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
}, 1);

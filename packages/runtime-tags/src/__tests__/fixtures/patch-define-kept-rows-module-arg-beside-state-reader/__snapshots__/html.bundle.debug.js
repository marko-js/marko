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
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell;D ;<em> </em>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $scope0_page = _page_render(), $wg__input_label = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("__tests__/template.marko_3*content", ({ isOpen, fmt, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $scope3_page = _page_render(), $wg__isOpen = _write_guard($scope3_reason, 4), $cg__isOpen = _client_guard($scope3_reason, 4);
		_if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_patch_text($scope4_id, "#text/0", fmt(label), void 0, $scope3_reason, 2)}</em>`);
				_patch_join_init($scope4_id, "__tests__/template.marko_4_fmt#3:4_label#3:5/init", $scope3_reason, 2, _filled_guard($scope3_reason, 5) && ">fmt", _filled_guard($scope3_reason, 6) && ">label");
				$scope3_page && _scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) }, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope3_id, "#text/0", 1, $wg__isOpen, void 0, void 0, void 0, ["__tests__/template.marko_4*shell"], $scope3_reason, 4);
		_filled_guard($scope3_reason, 5) && $cg__isOpen ? _patch_fill($scope3_id, "PatchFill:__tests__/template.marko_fill1/unpatched", fmt) : _client_guard($scope3_reason, 1) && _patch_write($scope3_id, "PatchMarkedWrite:fmt", fmt, !(_filled_guard($scope3_reason, 5) && _client_guard($scope3_reason, 6)));
		_filled_guard($scope3_reason, 6) && $cg__isOpen ? _patch_fill($scope3_id, "PatchFill:__tests__/template.marko_fill2/unpatched", label) : _filled_guard($scope3_reason, 6) && _client_guard($scope3_reason, 5) && _patch_write($scope3_id, "PatchMarkedWrite:label", label);
		$scope3_page && _write_if($scope3_reason, 3) && _scope($scope3_id, {
			fmt: (_unfilled_if($scope3_reason, 1) || _unfilled_if($scope3_reason, 2)) && fmt,
			label: (_unfilled_if($scope3_reason, 0) || _unfilled_if($scope3_reason, 2)) && label
		}, "__tests__/template.marko", "3:2", {
			fmt: "3:25",
			label: "3:30"
		});
	}, $scope0_id) };
	_for_of([1, 2], (x) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 2) << 5 | _mask_group($scope0_reason, 0) << 7 | _mask_group($scope0_reason, 1) << 9 | _mask_group($scope0_reason, 2) << 13);
		const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
		Panel.content({
			isOpen: input.open,
			fmt: lib.format,
			label: input.label + x
		});
		_patch_child_end();
		$cg__input_label && _patch_write($scope1_id, "PatchWrite:x", x, 1);
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_open#0:5/init");
		$cg__input_label && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:6_x#2/init");
		$scope0_page && _scope($scope1_id, {
			x: _write_if($scope0_reason, 2) && x,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "8:2", { x: "8:6" });
	}, 0, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", 0, 0);
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope2_id = _scope_id();
			_html(`<b>${_text_resume($scope2_id, "#text/0", input.label, $wg__input_label)}</b>`);
			$scope0_page && _scope($scope2_id, {}, "__tests__/template.marko", "11:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		open
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		open: "2:6"
	}) : _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 2));
}, 1);

// template.marko
const $template = "<!><!><!><button>toggle</button><button>shown</button>";
const $walks = "b%b%b b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b%b b ;<!><!><!><button>toggle</button><button>shown</button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	let shown = true;
	const Panel = { content: _content_resume("__tests__/template.marko_2*content", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__label = _write_guard($scope2_reason, 2), $scope2_page = _page_render(), $wg__isOpen = _write_guard($scope2_reason, 1);
		if ($scope0_page) _if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_resume($scope3_id, "#text/0", label, $wg__label)}</em>`);
				$scope2_page && _write_if($scope2_reason, 0) && _scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) }, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope2_id, "#text/0", _write_guard($scope2_reason, 0), $wg__isOpen, 0, 0, 1);
		$scope2_page && _write_if($scope2_reason, 1) && _scope($scope2_id, { label }, "__tests__/template.marko", "3:2", { label: "3:25" });
	}, $scope0_id) };
	if ($scope0_page) _if(() => {
		if (shown) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			Panel.content({
				isOpen: true,
				label: input.label
			});
			_patch_child_end();
			$scope0_page && _scope($scope1_id, { "#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope) }, "__tests__/template.marko", "8:2");
			return 0;
		}
	}, $scope0_id, "#text/0");
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "#text/1", Tag, {
		isOpen: !open,
		label: input.label + "!"
	}, 8);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/2")}<button>shown</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		open,
		shown,
		Panel: _unfilled_if($scope0_reason, 1) && Panel,
		Tag
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		open: "1:6",
		shown: "2:6",
		Panel: "3:9",
		Tag: "11:8"
	}) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0)), _content_withhold(input.label), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", Tag, !_server_guard($scope0_reason, 1)), _content_withhold(Tag));
}, 1);

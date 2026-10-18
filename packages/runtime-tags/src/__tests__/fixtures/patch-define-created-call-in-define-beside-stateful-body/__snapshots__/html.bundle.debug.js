// template.marko
const $Outer_content__walks = "b%c";
const $Outer_content__template = "<!><!><!>";
const $Inner_content__walks = "b%c";
const $Inner_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Outer_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%b b`)($Outer_content__walks);
_shells({
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `b/${_w0}&%b b`)($Outer_content__walks)};${((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Outer_content__template)}`)(),
	"__tests__/template.marko_3*shell": /*@__PURE__*/ (() => `__tests__/template.marko_3*shell __tests__/template.marko_3_isOpen#2:3/init __tests__/template.marko_3_label#2:4/init;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	const Inner = { content: _content_resume("__tests__/template.marko_1*content", ({ isOpen, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__label = _write_guard($scope1_reason, 2), $wg__isOpen = _write_guard($scope1_reason, 1);
		if ($scope0_page) _if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_resume($scope4_id, "#text/0", label, $wg__label)}</em>`);
				_write_if($scope1_reason, 0) && _scope($scope4_id, { _: _write_if($scope1_reason, 2) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/0", _write_guard($scope1_reason, 0), $wg__isOpen, 0, 0, 1);
		_write_if($scope1_reason, 1) && _scope($scope1_id, { label }, "__tests__/template.marko", "2:2", { label: "2:25" });
	}, $scope0_id) };
	const Outer = { content: _content("__tests__/template.marko_2*content", ({ isOpen, label, show }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__show = _write_guard($scope2_reason, 3), $scope2_page = _page_render();
		_if(() => {
			if (show) {
				const $scope3_id = _scope_id();
				_set_scope_reason(_mask_group($scope2_reason, 0) << 1 | _mask_group($scope2_reason, 1) << 3 | _mask_group($scope2_reason, 2) << 5);
				const $childScope = _patch_child($scope3_id, "#childScope/0");
				Inner.content({
					isOpen,
					label
				});
				_scope($scope3_id, {
					_: _write_if($scope2_reason, 0) && _scope_with_id($scope2_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/template.marko", "8:4");
				return 0;
			}
		}, $scope2_id, "#text/0", 1, $wg__show, void 0, void 0, void 0, ["__tests__/template.marko_3*shell"], $scope2_reason, 3);
		$scope2_page ? _write_if($scope2_reason, 3) && _scope($scope2_id, {
			isOpen,
			label
		}, "__tests__/template.marko", "7:2", {
			isOpen: "7:17",
			label: "7:25"
		}) : (_filled_guard($scope2_reason, 1) && _patch_value($scope2_id, "PatchValue:__tests__/template.marko_fill3", isOpen, !_server_guard($scope2_reason, 1)), _filled_guard($scope2_reason, 2) && _patch_value($scope2_id, "PatchValue:__tests__/template.marko_fill4", label, !_server_guard($scope2_reason, 2)));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5 | _mask_group($scope0_reason, 3) << 7);
	const $childScope2 = _patch_child($scope0_id, "#childScope/0");
	Outer.content({
		isOpen: input.open,
		label: input.label,
		show: input.show
	});
	const Tag = input.other ? "div" : Inner;
	_dynamic_tag($scope0_id, "#text/1", Tag, {
		isOpen: !open,
		label: input.label + "!"
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_write($scope0_id, "PatchWrite:Inner", Inner, 1);
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", open, 1);
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		open,
		Inner: _write_if($scope0_reason, 4) && Inner,
		Tag,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		open: "1:6",
		Inner: "2:9",
		Tag: "13:8"
	}) : (_filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 2)), _content_withhold(input.label), _filled_guard($scope0_reason, 4) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill2", Tag, !_server_guard($scope0_reason, 4)), _content_withhold(Tag));
}, 1);

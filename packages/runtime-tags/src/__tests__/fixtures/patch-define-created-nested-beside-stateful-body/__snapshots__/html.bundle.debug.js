// template.marko
const $Inner_content__walks = "b%c";
const $Inner_content__template = "<!><!><!>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($Inner_content__walks, $Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($Inner_content__template, $Inner_content__template);
const $template = "<!><!><!><button>toggle</button>";
const $walks = "b%b%b b";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b%b ;<!><!><!><button>toggle</button>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Outer_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Outer_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	const Inner = { content: _content_resume("__tests__/template.marko_2*content", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__label = _write_guard($scope2_reason, 2), $wg__isOpen = _write_guard($scope2_reason, 1);
		if ($scope0_page) _if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_resume($scope4_id, "#text/0", label, $wg__label)}</em>`);
				_write_if($scope2_reason, 0) && _scope($scope4_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) }, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope2_id, "#text/0", _write_guard($scope2_reason, 0), $wg__isOpen, 0, 0, 1);
		_write_if($scope2_reason, 1) && _scope($scope2_id, { label }, "__tests__/template.marko", "2:2", { label: "2:25" });
	}, $scope0_id) };
	const Outer = { content: _content("__tests__/template.marko_3*content", ({ isOpen, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $scope3_page = _page_render();
		_set_scope_reason(_mask_group($scope3_reason, 0) << 1 | _mask_group($scope3_reason, 1) << 3 | _mask_group($scope3_reason, 2) << 5);
		const $childScope = _patch_child($scope3_id, "#childScope/0");
		Inner.content({
			isOpen,
			label
		});
		_set_scope_reason(_mask_group($scope3_reason, 2) << 1 | _mask_group($scope3_reason, 2) << 5);
		const $childScope2 = _patch_child($scope3_id, "#childScope/1");
		Inner.content({
			isOpen: true,
			label
		});
		_patch_init($scope3_id, "__tests__/template.marko_3_#childScope#1/init", 1);
		$scope3_page ? _scope($scope3_id, {
			"#childScope/0": _existing_scope($childScope),
			"#childScope/1": _existing_scope($childScope2)
		}, "__tests__/template.marko", "7:2") : (_filled_guard($scope3_reason, 1) && _patch_value($scope3_id, "PatchValue:__tests__/template.marko_fill4", isOpen, !_server_guard($scope3_reason, 1)), _filled_guard($scope3_reason, 2) && _patch_value($scope3_id, "PatchValue:__tests__/template.marko_fill5", label, !_server_guard($scope3_reason, 2)));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 3) << 5);
			const $childScope3 = _patch_child($scope1_id, "#childScope/0");
			Outer.content({
				isOpen: input.open,
				label: input.label
			});
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope3)
			}, "__tests__/template.marko", "11:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	const Tag = input.other ? "div" : Inner;
	_dynamic_tag($scope0_id, "#text/1", Tag, {
		isOpen: !open,
		label: input.label + "!"
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_write($scope0_id, "PatchWrite:Inner", Inner, 1);
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill2", open, 1);
	$scope0_page ? _scope($scope0_id, {
		input_open: _unfilled_if($scope0_reason, 1) && input.open,
		input_label: input.label,
		open,
		Inner: _write_if($scope0_reason, 4) && Inner,
		Tag
	}, "__tests__/template.marko", 0, {
		input_open: ["input.open"],
		input_label: ["input.label"],
		open: "1:6",
		Inner: "2:9",
		Tag: "14:8"
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.open, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", input.label, !_server_guard($scope0_reason, 3)), _content_withhold(input.label), _filled_guard($scope0_reason, 4) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill3", Tag, !_server_guard($scope0_reason, 4)), _content_withhold(Tag));
}, 1);

// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<!><!><!><button>toggle</button>";
const $walks = "b%b%b b";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b%b ;<!><!><!><button>toggle</button>",
	"__tests__/template.marko_3*shell": /*@__PURE__*/ (() => `__tests__/template.marko_3*shell __tests__/template.marko_3_input_label#0:5/init __tests__/template.marko_3_input_open#0:7/init __tests__/template.marko_3_#childScope#0/init __tests__/template.marko_3_#childScope#1/init;${/*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($Panel_content__walks, $Panel_content__walks)};${/*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($Panel_content__template, $Panel_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $scope0_page = _page_render(), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let open = false;
	const Panel = { content: _content_resume("__tests__/template.marko_1*content", ({ isOpen, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__label = _write_guard($scope1_reason, 2), $wg__isOpen = _write_guard($scope1_reason, 1);
		if ($scope0_page) _if(() => {
			if (isOpen) {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "#text/0", label, $wg__label)} ${_text_resume($scope2_id, "#text/1", input.label, $wg__input_label * 2)}</em>`);
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:4"), "__tests__/template.marko_2_input_label#0:5/subscribe", $wg__input_label || $wg__label);
				return 0;
			}
		}, $scope1_id, "#text/0", _write_guard($scope1_reason, 0), $wg__isOpen, 0, 0, 1);
		_scope($scope1_id, {
			label: _write_if($scope1_reason, 1) && label,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { label: "2:25" });
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope3_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 3) << 3 | _mask_group($scope0_reason, 1) << 5);
			const $childScope = _patch_child($scope3_id, "#childScope/0");
			Panel.content({
				isOpen: input.open,
				label: input.label
			});
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 5);
			const $childScope2 = _patch_child($scope3_id, "#childScope/1");
			Panel.content({
				isOpen: true,
				label: input.label
			});
			_scope($scope3_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope),
				"#childScope/1": _existing_scope($childScope2)
			}, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 2), void 0, void 0, void 0, ["__tests__/template.marko_3*shell"], $scope0_reason, 2);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "#text/1", Tag, {
		isOpen: !open,
		label: input.label + "!"
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_write($scope0_id, "PatchWrite:Panel", Panel, 1);
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill2", open, 1);
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		input_open: _write_if($scope0_reason, 2) && input.open,
		open,
		Panel: _write_if($scope0_reason, 4) && Panel,
		Tag,
		"ClosureScopes:input_label/14": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_open: ["input.open"],
		open: "1:6",
		Panel: "2:9",
		Tag: "11:8"
	}) : (_filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1)), _content_withhold(input.label), _filled_guard($scope0_reason, 3) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", input.open, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill3", Tag, !_server_guard($scope0_reason, 4)), _content_withhold(Tag));
}, 1);

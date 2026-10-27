// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<!><!><!><button>toggle</button>";
const $walks = "b%b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b%b ;<!><!><!><button>toggle</button>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0, _w1, _w2) => `b/${_w0}&/${_w1}&/${_w2}&b`)($Panel_content__walks, $Panel_content__walks, $Panel_content__walks)};${/*@__PURE__*/ ((_w0, _w1, _w2) => `<!>${_w0}${_w1}${_w2}<!>`)($Panel_content__template, $Panel_content__template, $Panel_content__template)}`)(),
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;D ;<em> </em>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_b = _client_guard($scope0_reason, 5), $cg__input_show = _client_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("__tests__/template.marko_2*content", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $scope2_page = _page_render(), $wg__isOpen = _write_guard($scope2_reason, 0);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_patch_text($scope3_id, "#text/0", label, void 0, $scope2_reason, 1)}</em>`);
				_client_guard($scope2_reason, 1) && _patch_init($scope3_id, "__tests__/template.marko_3_label#2:4/init");
				$scope2_page && _scope($scope3_id, { _: _write_if($scope2_reason, 1) && _scope_with_id($scope2_id) }, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope2_id, "#text/0", 1, $wg__isOpen, void 0, void 0, void 0, ["__tests__/template.marko_3*shell"], $scope2_reason, 0);
		$scope2_page ? _write_if($scope2_reason, 0) && _scope($scope2_id, { label: (_unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 1)) && label }, "__tests__/template.marko", "2:2", { label: "2:25" }) : _filled_guard($scope2_reason, 1) && _client_guard($scope2_reason, 0) && _patch_fill($scope2_id, "PatchFill:__tests__/template.marko_fill4", label, !_server_guard($scope2_reason, 1));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 2) << 3);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			Panel.content({
				...input.a,
				...input.b
			});
			_patch_child_end();
			_set_scope_reason(_mask_group($scope0_reason, 5) << 1 | _mask_group($scope0_reason, 5) << 3);
			const $childScope2 = _patch_child($scope1_id, "#childScope/1", 1);
			Panel.content({
				isOpen: true,
				...input.b
			});
			_patch_child_end();
			_set_scope_reason(0);
			const $childScope3 = _patch_child($scope1_id, "#childScope/2", 2);
			Panel.content({
				isOpen: true,
				...{ label: "x" }
			});
			_patch_child_end();
			$cg__input_b && _patch_init($scope1_id, "__tests__/template.marko_1_input_b#0:7/init");
			_patch_join_init($scope1_id, "__tests__/template.marko_1_input_a#0:6_input_b#0:7/init", $scope0_reason, 2, _filled_guard($scope0_reason, 4) && ">input_a", _filled_guard($scope0_reason, 5) && ">input_b");
			$scope0_page && _scope($scope1_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope),
				"#childScope/1": _existing_scope($childScope2),
				"#childScope/2": _existing_scope($childScope3)
			}, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 3), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 3);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "#text/1", Tag, {
		isOpen: !open,
		label: input.label + "!"
	}, 24);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_filled_guard($scope0_reason, 4) && $cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0/unpatched", input.a) : _filled_guard($scope0_reason, 4) && $cg__input_b && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a);
	$scope0_page ? _scope($scope0_id, {
		input_a: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.a,
		input_b: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 5)) && input.b,
		input_label: input.label,
		open,
		Panel: _unfilled_if($scope0_reason, 6) && Panel,
		Tag
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		input_label: ["input.label"],
		open: "1:6",
		Panel: "2:9",
		Tag: "12:8"
	}) : (_filled_guard($scope0_reason, 5) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1/unpatched", input.b) : _client_guard($scope0_reason, 4) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.b, !_server_guard($scope0_reason, 5))), _filled_guard($scope0_reason, 7) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", input.label, !_server_guard($scope0_reason, 7)), _content_withhold(input.label), _filled_guard($scope0_reason, 6) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill3", Tag, !_server_guard($scope0_reason, 6)), _content_withhold(Tag));
}, 1);

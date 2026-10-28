// template.marko
const $Panel_content__walks = "b%bD l";
const $Panel_content__template = "<!><!><span> </span>";
const $template = "<!><!><!><button>toggle</button>";
const $walks = "b%b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b%b ;<!><!><!><button>toggle</button>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&D l`)($Panel_content__walks, $Panel_content__walks)};${/*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<span> </span>`)($Panel_content__template, $Panel_content__template)}`)(),
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;D ;<em> </em>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let open = false;
	const Panel = { content: _content_resume("__tests__/template.marko_2*content", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $cg__label = _client_guard($scope2_reason, 2);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_resume($scope3_id, "#text/0", label, 1, $scope2_reason, 2)}</em>`);
				_scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) }, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope2_id, "#text/0", 1, _write_guard($scope2_reason, 1), 1, 0, 0, ["__tests__/template.marko_3*shell"], $scope2_reason, 1);
		_html(`<span>${_text_resume($scope2_id, "#text/1", isOpen ? label : "-", 1, $scope2_reason, 0)}</span>`);
		$cg__label && _patch_write($scope2_id, "PatchMarkedWrite:isOpen", isOpen, !(_filled_guard($scope2_reason, 1) && $cg__label));
		_patch_init_entry($scope2_id, "__tests__/template.marko_2_isOpen#4_label#5/init", [_filled_guard($scope2_reason, 1) && "isOpen", _filled_guard($scope2_reason, 2) && "label"], $scope2_reason, 0);
		_scope($scope2_id, {
			isOpen: (_unfilled_if($scope2_reason, 2) || _unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 1)) && isOpen,
			label: (_unfilled_if($scope2_reason, 1) || _unfilled_if($scope2_reason, 0)) && label
		}, "__tests__/template.marko", "2:2", {
			isOpen: "2:17",
			label: "2:25"
		}) || _filled_guard($scope2_reason, 2) && _client_guard($scope2_reason, 1) && _patch_fill($scope2_id, "PatchFill:__tests__/template.marko_fill2", label, !_server_guard($scope2_reason, 2));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(64 | ((2 | _mask_group($scope0_reason, 0)) << 1 | _mask_group($scope0_reason, 0) << 3));
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			Panel.content({
				isOpen: input.show,
				label: $global$1.brand
			});
			_patch_child_end();
			_set_scope_reason(68);
			const $childScope2 = _peek_scope_id($scope1_id, "#childScope/1", 1);
			Panel.content({
				isOpen: true,
				label: $global$1.brand
			});
			_patch_child_end();
			_html(`<span>${_text_resume($scope1_id, "#text/2", $global$1.brand, 1, 4, 0)}</span>`);
			_fill_global_subscribe("__tests__/template.marko_1_$global_brand#0:17", $scope1_id);
			_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/template.marko_1_input_show#0:5/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope),
				"#childScope/1": _existing_scope($childScope2)
			}, "__tests__/template.marko", "8:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "#text/1", Tag, {
		isOpen: !open,
		label: input.label + "!"
	}, 16);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		open,
		Panel: _unfilled_if($scope0_reason, 1) && Panel,
		Tag
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		open: "1:6",
		Panel: "2:9",
		Tag: "13:8"
	}) || (_filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 2)), _content_withhold(input.label), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", Tag, !_server_guard($scope0_reason, 1)), _content_withhold(Tag));
}, 1);

// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Panel_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%b b`)($Panel_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content !",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `b/${_w0}&%b b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Panel_content__template)}`)(),
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;D ;<em> </em>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_other__OR__input_show = _client_guard($scope0_reason, 2), $cg__input_label__OR__input_other = _client_guard($scope0_reason, 0), $cg__input_label__OR__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("__tests__/template.marko_1*content", ({ isOpen, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__isOpen = _write_guard($scope1_reason, 0);
		_if(() => {
			if (isOpen) {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "#text/0", label, void 0, $scope1_reason, 1)}</em>`);
				_client_guard($scope1_reason, 1) && _patch_init($scope2_id, "__tests__/template.marko_2_label#1:4/init");
				_scope($scope2_id, { _: _write_if($scope1_reason, 1) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__isOpen, void 0, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope1_reason, 0);
		_write_if($scope1_reason, 0) && _scope($scope1_id, { label: (_unfilled_if($scope1_reason, 0) || _unfilled_if($scope1_reason, 1)) && label }, "__tests__/template.marko", "2:2", { label: "2:25" }) || _filled_guard($scope1_reason, 1) && _client_guard($scope1_reason, 0) && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill3", label, !_server_guard($scope1_reason, 1));
	}, $scope0_id) };
	const Other = { content: _content_resume("__tests__/template.marko_3*content", ({ label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_html(`<i>${_text_resume($scope3_id, "#text/0", label, void 0, 4, 0)}</i>`);
		_scope($scope3_id, {}, "__tests__/template.marko", "7:2");
	}, $scope0_id) };
	_set_scope_reason(2 | _mask_group($scope0_reason, 4) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Panel.content({
		isOpen: open,
		label: input.label
	});
	_patch_child_end();
	const Tag = input.other ? Other : Panel;
	_dynamic_tag($scope0_id, "#text/1", Tag, {
		isOpen: input.show,
		label: input.label + "!"
	}, 9, 0, 0, _write_guard($scope0_reason, 3), $scope0_reason, 3);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.label,
		input_show: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.show,
		open,
		Panel: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 3)) && Panel,
		Other: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 3)) && Other,
		Tag: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && Tag,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_show: ["input.show"],
		open: "1:6",
		Panel: "2:9",
		Other: "7:9",
		Tag: "11:8"
	}) || (_filled_guard($scope0_reason, 4) && $cg__input_other__OR__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 4)), $cg__input_other__OR__input_show && _content_withhold(input.label), _filled_guard($scope0_reason, 6) && $cg__input_label__OR__input_other && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.show, !_server_guard($scope0_reason, 6)), $cg__input_label__OR__input_other && _content_withhold(input.show), _filled_guard($scope0_reason, 5) && $cg__input_label__OR__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", Tag, !_server_guard($scope0_reason, 5)), $cg__input_label__OR__input_show && _content_withhold(Tag));
}, 1);

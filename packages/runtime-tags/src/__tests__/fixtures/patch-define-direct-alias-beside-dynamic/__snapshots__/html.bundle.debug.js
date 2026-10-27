// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Panel_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%b b`)($Panel_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `b/${_w0}&%b b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Panel_content__template)}`)(),
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;D ;<em> </em>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("__tests__/template.marko_1*content", ({ isOpen, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__isOpen = _write_guard($scope1_reason, 0);
		_if(() => {
			if (isOpen) {
				const $scope2_id = _scope_id();
				_html(`<em>${_patch_text($scope2_id, "#text/0", label, void 0, $scope1_reason, 1)}</em>`);
				_client_guard($scope1_reason, 1) && _patch_init($scope2_id, "__tests__/template.marko_2_label#1:4/init");
				_scope($scope2_id, { _: _write_if($scope1_reason, 1) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__isOpen, void 0, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope1_reason, 0);
		_write_if($scope1_reason, 0) && _scope($scope1_id, { label: (_unfilled_if($scope1_reason, 0) || _unfilled_if($scope1_reason, 1)) && label }, "__tests__/template.marko", "2:2", { label: "2:25" }) || _filled_guard($scope1_reason, 1) && _client_guard($scope1_reason, 0) && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill2", label, !_server_guard($scope1_reason, 1));
	}, $scope0_id) };
	const { label: l } = input.rest;
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	Panel.content({
		isOpen: input.show,
		label: l
	});
	_patch_child_end();
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "#text/1", Tag, {
		isOpen: !open,
		label: input.label + "!"
	}, 8);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		open,
		Panel: _unfilled_if($scope0_reason, 2) && Panel,
		Tag,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		open: "1:6",
		Panel: "2:9",
		Tag: "9:8"
	}) || (_filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 3)), _content_withhold(input.label), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", Tag, !_server_guard($scope0_reason, 2)), _content_withhold(Tag));
}, 1);

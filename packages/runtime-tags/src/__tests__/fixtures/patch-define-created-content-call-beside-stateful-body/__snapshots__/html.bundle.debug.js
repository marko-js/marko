// template.marko
const $Wrap_content2__walks = "b%c";
const $Wrap_content2__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Wrap_content2__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%b b`)($Wrap_content2__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `b/${_w0}&%b b`)($Wrap_content2__walks)};${((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Wrap_content2__template)}`)(),
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;D ;<em> </em>",
	"__tests__/template.marko_5*shell": "__tests__/template.marko_5*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let open = false;
	const Panel = { content: _content_resume("__tests__/template.marko_2*content", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen = _write_guard($scope2_reason, 0);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_resume($scope3_id, "#text/0", label, 1, $scope2_reason, 1)}</em>`);
				_client_guard($scope2_reason, 1) && _patch_init($scope3_id, "__tests__/template.marko_3_label#2:4/init");
				_scope($scope3_id, { _: _write_if($scope2_reason, 1) && _scope_with_id($scope2_id) }, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope2_id, "#text/0", 1, $wg__isOpen, 1, 0, 0, ["__tests__/template.marko_3*shell"], $scope2_reason, 0);
		_client_guard($scope2_reason, 0) && _patch_write($scope2_id, "PatchWrite:label", label, 1);
		_write_if($scope2_reason, 0) && _scope($scope2_id, { label: (_unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 1)) && label }, "__tests__/template.marko", "2:2", { label: "2:25" });
	}, $scope0_id) };
	const Wrap = { content: _content("__tests__/template.marko_4*content", ({ show, content }) => {
		const $scope4_id = _scope_id();
		const $scope4_reason = _scope_reason(), $wg__content = _write_guard($scope4_reason, 2), $wg__show = _write_guard($scope4_reason, 1), $cg__show = _client_guard($scope4_reason, 1);
		_if(() => {
			if (show) {
				const $scope5_id = _scope_id();
				_dynamic_tag($scope5_id, "#text/0", content, {}, 2, 0, 0, $wg__content, $scope4_reason, 2);
				_write_if($scope4_reason, 0) && _scope($scope5_id, { _: _write_if($scope4_reason, 2) && _scope_with_id($scope4_id) }, "__tests__/template.marko", "8:4");
				return 0;
			}
		}, $scope4_id, "#text/0", 1, $wg__show, 1, 0, 0, ["__tests__/template.marko_5*shell"], $scope4_reason, 1);
		_write_if($scope4_reason, 1) && _scope($scope4_id, { content: _unfilled_if($scope4_reason, 1) && content }, "__tests__/template.marko", "7:2", { content: "7:22" }) || (_filled_guard($scope4_reason, 2) && $cg__show && _patch_fill($scope4_id, "PatchFill:__tests__/template.marko_fill2", content, !_server_guard($scope4_reason, 2)), $cg__show && _content_withhold(content));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/0", 2);
	Wrap.content({
		show: input.show,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 3);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 1);
			Panel.content({
				isOpen: true,
				label: input.label
			});
			_patch_child_end();
			_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, _client_guard($scope0_reason, 2) ? "__tests__/template.marko_1_input_label#0:6/init" : "__tests__/template.marko_1_input_label#0:6/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "12:2"));
		}, $scope0_id)
	});
	_patch_child_end();
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "#text/1", Tag, {
		isOpen: !open,
		label: "y"
	}, 24);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		open,
		Panel: _unfilled_if($scope0_reason, 3) && Panel,
		Tag,
		"ClosureScopes:input_label/13": _write_if($scope0_reason, 2) && $input_label__closures,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		open: "1:6",
		Panel: "2:9",
		Tag: "15:8"
	}) || (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", Tag, !_server_guard($scope0_reason, 3)), _content_withhold(Tag));
}, 1);

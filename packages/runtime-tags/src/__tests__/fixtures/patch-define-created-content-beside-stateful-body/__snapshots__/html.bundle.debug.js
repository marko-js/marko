// template.marko
const $Panel_content2__walks = "b%c";
const $Panel_content2__template = "<!><!><!>";
const $template = "<!><!><!><button>toggle</button>";
const $walks = "b%b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b%b ;<!><!><!><button>toggle</button>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content2__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content2__template)}`)(),
	"__tests__/template.marko_5*shell": "__tests__/template.marko_5*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_open__OR__input_label = _write_if($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 4), $wi__input_label = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let open = false;
	const Panel = { content: _content_resume("__tests__/template.marko_4*content", ({ isOpen, content }) => {
		const $scope4_id = _scope_id();
		const $scope4_reason = _scope_reason(), $wg__content = _write_guard($scope4_reason, 2), $wg__isOpen = _write_guard($scope4_reason, 1), $cg__isOpen = _client_guard($scope4_reason, 1);
		_if(() => {
			if (isOpen) {
				const $scope5_id = _scope_id();
				_dynamic_tag($scope5_id, "#text/0", content, {}, 2, 0, 0, $wg__content, $scope4_reason, 2);
				_write_if($scope4_reason, 0) && _scope($scope5_id, { _: _write_if($scope4_reason, 2) && _scope_with_id($scope4_id) }, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope4_id, "#text/0", 1, $wg__isOpen, void 0, void 0, void 0, ["__tests__/template.marko_5*shell"], $scope4_reason, 1);
		_write_if($scope4_reason, 1) && _scope($scope4_id, { content: _unfilled_if($scope4_reason, 1) && content }, "__tests__/template.marko", "2:2", { content: "2:25" }) || (_filled_guard($scope4_reason, 2) && $cg__isOpen && _patch_fill($scope4_id, "PatchFill:__tests__/template.marko_fill3", content, !_server_guard($scope4_reason, 2)), $cg__isOpen && _content_withhold(content));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 3) << 1 | _mask_group($scope0_reason, 3) << 3);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 1);
			Panel.content({
				isOpen: input.open,
				content: _content_resume("__tests__/template.marko_2*content", () => {
					const $scope2_reason = _scope_reason();
					const $scope2_id = _scope_id();
					_html(`<em>${_text_resume($scope2_id, "#text/0", input.label, void 0, $scope0_reason, 4)}</em>`);
					_unfilled_if($scope0_reason, 4) && _patch_init($scope2_id, _client_guard($scope0_reason, 4) ? "__tests__/template.marko_2_input_label#0:7/init" : "__tests__/template.marko_2_input_label#0:7/subscribe");
					_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_open__OR__input_label && _scope_with_id($scope1_id) }, "__tests__/template.marko", "8:4"));
				}, $scope1_id)
			});
			_patch_child_end();
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "__tests__/template.marko_1_input_open#0:6/init");
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_open__OR__input_label && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 2), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 2);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "#text/1", Tag, { isOpen: !open }, 16, _content_resume("__tests__/template.marko_3*content", () => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_html(`<b>${_text_resume($scope3_id, "#text/0", input.label, $wg__input_label)}!</b>`);
		_subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_label/15": $wi__input_label && 1
		}, "__tests__/template.marko", "11:4"), "__tests__/template.marko_3_input_label#0:7/subscribe", $wg__input_label);
		$wg__input_label || _resume_branch($scope3_id);
	}, $scope0_id));
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_open: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.open,
		input_label: input.label,
		open,
		Panel: _unfilled_if($scope0_reason, 5) && Panel,
		Tag,
		"ClosureScopes:input_label/15": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_open: ["input.open"],
		input_label: ["input.label"],
		open: "1:6",
		Panel: "2:9",
		Tag: "10:8"
	}) || (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.open, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.label, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 5) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", Tag, !_server_guard($scope0_reason, 5)), _content_withhold(Tag));
}, 1);

// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<!><!><!><button>toggle</button>";
const $walks = "b%b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b%b ;<!><!><!><button>toggle</button>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)(),
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;D ;<em> </em>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("__tests__/template.marko_2*content", ({ isOpen, label, hidden }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen__OR__hidden = _write_guard($scope2_reason, 0), $cg__isOpen__OR__hidden = _client_guard($scope2_reason, 0);
		_if(() => {
			if (isOpen && !hidden) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_resume($scope3_id, "#text/0", label, 1, $scope2_reason, 2)}</em>`);
				_client_guard($scope2_reason, 2) && _patch_init($scope3_id, "__tests__/template.marko_3_label#2:4/init");
				_scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) }, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope2_id, "#text/0", 1, $wg__isOpen__OR__hidden, 1, 0, 0, ["__tests__/template.marko_3*shell"], $scope2_reason, 0);
		_client_guard($scope2_reason, 3) && _patch_write($scope2_id, "PatchWrite:isOpen", isOpen, 1);
		$cg__isOpen__OR__hidden && _patch_init($scope2_id, "__tests__/template.marko_2_isOpen#3_hidden#5/init");
		_write_if($scope2_reason, 0) && _scope($scope2_id, {
			isOpen: (_unfilled_if($scope2_reason, 3) || _unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 1)) && isOpen,
			label: (_unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 2)) && label,
			hidden: _unfilled_if($scope2_reason, 1) && hidden
		}, "__tests__/template.marko", "2:2", {
			isOpen: "2:17",
			label: "2:25",
			hidden: "2:32"
		}) || (_filled_guard($scope2_reason, 2) && $cg__isOpen__OR__hidden && _patch_fill($scope2_id, "PatchFill:__tests__/template.marko_fill4", label, !_server_guard($scope2_reason, 2)), _filled_guard($scope2_reason, 3) && _client_guard($scope2_reason, 1) && _patch_fill($scope2_id, "PatchFill:__tests__/template.marko_fill5", hidden, !_server_guard($scope2_reason, 3)));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 3) << 5);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			Panel.content({
				isOpen: input.open,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_open#0:6/init");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:7/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "#text/1", Tag, {
		isOpen: !open,
		label: input.label + "!",
		hidden: input.hidden
	}, 8);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_open: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.open,
		input_label: input.label,
		input_hidden: input.hidden,
		open,
		Panel: _unfilled_if($scope0_reason, 4) && Panel,
		Tag
	}, "__tests__/template.marko", 0, {
		input_open: ["input.open"],
		input_label: ["input.label"],
		input_hidden: ["input.hidden"],
		open: "1:6",
		Panel: "2:9",
		Tag: "10:8"
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.open, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1/unpatched", input.label) : _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.label, !_server_guard($scope0_reason, 3))), _content_withhold(input.label), _filled_guard($scope0_reason, 5) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", input.hidden, !_server_guard($scope0_reason, 5)), _content_withhold(input.hidden), _filled_guard($scope0_reason, 4) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill3", Tag, !_server_guard($scope0_reason, 4)), _content_withhold(Tag));
}, 1);

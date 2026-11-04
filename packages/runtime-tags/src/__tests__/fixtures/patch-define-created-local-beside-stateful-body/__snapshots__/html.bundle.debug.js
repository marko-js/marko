// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<button>toggle</button><!><!><!>";
const $walks = " b%b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%b%;<button>toggle</button><!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell !__tests__/template.marko_1;${/*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($Panel_content__walks, $Panel_content__walks)};${/*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button>inc</button>`)($Panel_content__template, $Panel_content__template)}`,
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;D ;<em> </em>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _server_guard($scope0_reason, 2), $sg__input_other = _server_guard($scope0_reason, 4), $fg__input_label = _filled_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1), $fg__input_open = _filled_guard($scope0_reason, 3), $fg__input_other = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	const Panel = { content: _content_resume("__tests__/template.marko_2*content", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen = _write_guard($scope2_reason, 0), $fg__label = _filled_guard($scope2_reason, 1), $cg__isOpen = _client_guard($scope2_reason, 0);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_mark($scope3_id, "#text/0", label, 1, $scope2_reason, 1)}</em>`);
				_client_guard($scope2_reason, 1) && _patch_render($scope3_id, "__tests__/template.marko_3_label#2:4/setup");
				_scope($scope3_id, { _: _write_if($scope2_reason, 1) && _scope_with_id($scope2_id) }, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope2_id, "#text/0", 1, $wg__isOpen, 1, 0, 0, ["__tests__/template.marko_3*shell"], $scope2_reason, 0);
		$fg__label && $cg__isOpen && _patch_render($scope2_id, "__tests__/template.marko_3_label#2:4/setup", "label");
		_write_if($scope2_reason, 0) && _scope($scope2_id, { label: (_unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 1)) && label }, "__tests__/template.marko", "3:2", { label: "3:25" }) || $fg__label && $cg__isOpen && _patch_write($scope2_id, "PatchMarkedWrite:label", label, !_server_guard($scope2_reason, 1));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const x = input.label + "?";
			let n = 1;
			_set_scope_reason(_updates_from($scope0_reason, 3) << 1 | _updates_from($scope0_reason, 2) << 3);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			Panel.content({
				isOpen: input.open,
				label: x
			});
			_patch_child_end();
			_set_scope_reason(8);
			const $childScope2 = _peek_scope_id($scope1_id, "#childScope/1", 1);
			Panel.content({
				isOpen: true,
				label: n
			});
			_patch_child_end();
			_html(`<button>inc</button>${_el_mark($scope1_id, "#button/2")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:6/setup");
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "__tests__/template.marko_1_input_open#0:7/setup");
			_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill0", n, 1);
			_scope($scope1_id, {
				n,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope),
				"#childScope/1": _existing_scope($childScope2)
			}, "__tests__/template.marko", "8:2", { n: "10:8" });
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "#text/2", Tag, {
		isOpen: !open,
		label: input.label + "!"
	}, 16);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_label && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_label#0:6/setup", "input_label");
	$fg__input_open && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_open#0:7/setup", "input_open");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_other#8_Panel#10/setup", $fg__input_other && "input_other", $scope0_reason, 4);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_label#6_open#9_Tag#12/setup", [$fg__input_label && "input_label", $fg__input_other && "Tag"]);
	_scope($scope0_id, {
		input_label: input.label,
		input_open: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.open,
		open,
		Panel: _write_if($scope0_reason, 4) && Panel,
		Tag
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_open: ["input.open"],
		open: "1:6",
		Panel: "3:9",
		Tag: "15:8"
	}) || ($fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !$sg__input_label), $fg__input_open && $cg__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_open", input.open, !_server_guard($scope0_reason, 3)), $fg__input_other && _patch_write($scope0_id, "PatchMarkedWrite:Tag", Tag, !$sg__input_other));
}, 1);

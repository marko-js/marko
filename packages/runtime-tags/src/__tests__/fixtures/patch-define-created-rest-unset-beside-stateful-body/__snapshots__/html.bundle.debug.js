// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<!><!><!><button>toggle</button>";
const $walks = "b%b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b%b ;<!><!><!><button>toggle</button>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`,
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell !__tests__/template.marko_3_rest#2:6; D ;<em> </em>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_other = _server_guard($scope0_reason, 4), $fg__input_open = _filled_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 3), $fg__input_other = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("__tests__/template.marko_2*content", ({ isOpen, hidden, ...rest }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen__OR__hidden = _write_guard($scope2_reason, 0), $fg__rest = _filled_guard($scope2_reason, 3), $cg__isOpen__OR__hidden = _client_guard($scope2_reason, 0), $fg__isOpen = _filled_guard($scope2_reason, 1), $fg__hidden = _filled_guard($scope2_reason, 2);
		_if(() => {
			if (isOpen && !hidden) {
				const $scope3_id = _scope_id();
				_html(`<em${_attrs(rest, "#em/0", $scope3_id, "em", 0, $scope2_reason, 3)}>${_text_mark($scope3_id, "#text/1", Object.keys(rest).join(), 1, $scope2_reason, 3)}</em>${_el_mark($scope3_id, "#em/0")}`);
				_script($scope3_id, "__tests__/template.marko_3_rest#2:6");
				_client_guard($scope2_reason, 3) && _patch_render($scope3_id, "__tests__/template.marko_3_rest#2:6/setup");
				_scope($scope3_id, { _: _write_if($scope2_reason, 3) && _scope_with_id($scope2_id) }, "__tests__/template.marko", "3:4", { "EventAttributes:#em/0": ["...rest", "4:12"] });
				return 0;
			}
		}, $scope2_id, "#text/0", 1, $wg__isOpen__OR__hidden, 1, 0, 0, ["__tests__/template.marko_3*shell"], $scope2_reason, 0);
		$fg__rest && $cg__isOpen__OR__hidden && _patch_render($scope2_id, "__tests__/template.marko_3_rest#2:6/setup", "rest");
		_patch_render($scope2_id, "__tests__/template.marko_2_isOpen#3_hidden#4/setup", [$fg__isOpen && "isOpen", $fg__hidden && "hidden"], $scope2_reason, 0);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {
			isOpen: (_unfilled_if($scope2_reason, 2) || _unfilled_if($scope2_reason, 0)) && isOpen,
			hidden: (_unfilled_if($scope2_reason, 1) || _unfilled_if($scope2_reason, 0)) && hidden,
			rest: (_unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 3)) && rest
		}, "__tests__/template.marko", "2:2", {
			isOpen: "2:17",
			hidden: "2:25",
			rest: "2:36"
		}) || ($fg__isOpen && _client_guard($scope2_reason, 2) && _patch_write($scope2_id, "PatchMarkedWrite:isOpen", isOpen, !_server_guard($scope2_reason, 1)), $fg__hidden && _client_guard($scope2_reason, 1) && _patch_write($scope2_id, "PatchMarkedWrite:hidden", hidden, !_server_guard($scope2_reason, 2)), $fg__rest && $cg__isOpen__OR__hidden && _patch_write($scope2_id, "PatchMarkedWrite:rest", rest, !_server_guard($scope2_reason, 3)));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 2) << 3 | _updates_from($scope0_reason, 3) << 5 | _updates_from($scope0_reason, 3) << 7);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			Panel.content({
				isOpen: input.open,
				title: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "__tests__/template.marko_1_input_open#0:6/setup");
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:7/setup");
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
		title: input.label + "!"
	}, 8);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_open && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_open#0:6/setup", "input_open");
	$fg__input_label && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_label#0:7/setup", "input_label");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_other#8_Panel#10/setup", $fg__input_other && "input_other", $scope0_reason, 4);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_label#7_open#9_Tag#12/setup", [$fg__input_label && "input_label", $fg__input_other && "Tag"]);
	_scope($scope0_id, {
		input_open: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.open,
		input_label: input.label,
		open,
		Panel: _write_if($scope0_reason, 4) && Panel,
		Tag
	}, "__tests__/template.marko", 0, {
		input_open: ["input.open"],
		input_label: ["input.label"],
		open: "1:6",
		Panel: "2:9",
		Tag: "10:8"
	}) || ($fg__input_open && $cg__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_open", input.open, !_server_guard($scope0_reason, 2)), $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 3)), $fg__input_other && _patch_write($scope0_id, "PatchMarkedWrite:Tag", Tag, !$sg__input_other));
}, 1);

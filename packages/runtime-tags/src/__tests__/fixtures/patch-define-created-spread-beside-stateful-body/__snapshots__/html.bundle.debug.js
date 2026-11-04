// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<!><!><!><button>toggle</button>";
const $walks = "b%b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b%b ;<!><!><!><button>toggle</button>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0, _w1, _w2) => `b/${_w0}&/${_w1}&/${_w2}&b`)($Panel_content__walks, $Panel_content__walks, $Panel_content__walks)};${/*@__PURE__*/ ((_w0, _w1, _w2) => `<!>${_w0}${_w1}${_w2}<!>`)($Panel_content__template, $Panel_content__template, $Panel_content__template)}`,
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;D ;<em> </em>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_a__OR__input_b = _updates_from($scope0_reason, 2), $uf__input_b = _updates_from($scope0_reason, 5), $fg__input_a = _filled_guard($scope0_reason, 4), $fg__input_b = _filled_guard($scope0_reason, 5), $cg__input_show = _client_guard($scope0_reason, 3), $fg__input_other = _filled_guard($scope0_reason, 6), $fg__input_label = _filled_guard($scope0_reason, 7);
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("__tests__/template.marko_2*content", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen = _write_guard($scope2_reason, 0), $ui__isOpen = _unfilled_if($scope2_reason, 0), $fg__label = _filled_guard($scope2_reason, 1);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_mark($scope3_id, "#text/0", label, 1, $scope2_reason, 1)}</em>`);
				_client_guard($scope2_reason, 1) && _patch_render($scope3_id, "__tests__/template.marko_3_label#2:4/setup");
				_scope($scope3_id, { _: _write_if($scope2_reason, 1) && _scope_with_id($scope2_id) }, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope2_id, "#text/0", 1, $wg__isOpen, 1, 0, 0, ["__tests__/template.marko_3*shell"], $scope2_reason, 0);
		$fg__label && _client_guard($scope2_reason, 0) && _patch_render($scope2_id, "__tests__/template.marko_3_label#2:4/setup", "label");
		_write_if($scope2_reason, 0) && _scope($scope2_id, { label: ($ui__isOpen || _unfilled_if($scope2_reason, 1)) && label }, "__tests__/template.marko", "2:2", { label: "2:25" }) || $fg__label && $ui__isOpen && _patch_write($scope2_id, "PatchMarkedWrite:label", label, !_server_guard($scope2_reason, 1));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason($uf__input_a__OR__input_b << 1 | $uf__input_a__OR__input_b << 3);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			Panel.content({
				...input.a,
				...input.b
			});
			_patch_child_end();
			_set_scope_reason($uf__input_b << 1 | $uf__input_b << 3);
			const $childScope2 = _peek_scope_id($scope1_id, "#childScope/1", 1);
			Panel.content({
				isOpen: true,
				...input.b
			});
			_patch_child_end();
			_set_scope_reason(0);
			const $childScope3 = _peek_scope_id($scope1_id, "#childScope/2", 2);
			Panel.content({
				isOpen: true,
				...{ label: "x" }
			});
			_patch_child_end();
			_client_guard($scope0_reason, 5) && _patch_render($scope1_id, "__tests__/template.marko_1_input_b#0:7/setup");
			_patch_render($scope1_id, "__tests__/template.marko_1_input_a#0:6_input_b#0:7/setup", [_filled_guard($scope0_reason, 4) && ">input_a", _filled_guard($scope0_reason, 5) && ">input_b"], $scope0_reason, 2);
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope),
				"#childScope/1": _existing_scope($childScope2),
				"#childScope/2": _existing_scope($childScope3)
			}, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 3), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 3);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "#text/1", Tag, {
		isOpen: !open,
		label: input.label + "!"
	}, 24);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_a && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_a#0:6/setup", "input_a");
	$fg__input_b && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_b#0:7/setup", "input_b");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_other#8_Panel#11/setup", $fg__input_other && "input_other", $scope0_reason, 6);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_label#9_open#10_Tag#13/setup", [$fg__input_label && "input_label", $fg__input_other && "Tag"]);
	_scope($scope0_id, {
		input_a: _write_if($scope0_reason, 1) && input.a,
		input_b: _write_if($scope0_reason, 0) && input.b,
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
	}) || ($fg__input_a && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 4)), $fg__input_b && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !_server_guard($scope0_reason, 5)), $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 7)), $fg__input_other && _patch_write($scope0_id, "PatchMarkedWrite:Tag", Tag, !_server_guard($scope0_reason, 6)));
}, 1);

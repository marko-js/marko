// tags/card.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template$1 = "<!><!><!><button class=toggle>toggle</button>";
const $walks$1 = "b%b%b b";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({
	"__tests__/tags/card.marko_3*content": "__tests__/tags/card.marko_3*content;b%;<!><!><!>",
	"__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0;b%b%b ;<!><!><!><button class=toggle>toggle</button>",
	"__tests__/tags/card.marko_1*shell": `__tests__/tags/card.marko_1*shell;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`,
	"__tests__/tags/card.marko_4*shell": "__tests__/tags/card.marko_4*shell;D ;<em> </em>"
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 7), $cg__input_label = _client_guard($scope0_reason, 7), $ui__input_show = _unfilled_if($scope0_reason, 4), $fg__input_label = _filled_guard($scope0_reason, 7), $fg__input_open = _filled_guard($scope0_reason, 5), $fg__input_fmt = _filled_guard($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("__tests__/tags/card.marko_3*content", ({ isOpen, fmt, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__isOpen = _write_guard($scope3_reason, 4), $ui__fmt__OR__label = _unfilled_if($scope3_reason, 2), $ui__isOpen__OR__label = _unfilled_if($scope3_reason, 1), $ui__isOpen__OR__fmt = _unfilled_if($scope3_reason, 0), $fg__fmt = _filled_guard($scope3_reason, 5), $fg__label = _filled_guard($scope3_reason, 6), $cg__isOpen = _client_guard($scope3_reason, 4);
		_if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_mark($scope4_id, "#text/0", fmt(label), 1, $scope3_reason, 2)}</em>`);
				_patch_render($scope4_id, "__tests__/tags/card.marko_4_fmt#3:4_label#3:5/setup", [_filled_guard($scope3_reason, 5) && ">fmt", _filled_guard($scope3_reason, 6) && ">label"], $scope3_reason, 2);
				_scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) }, "__tests__/tags/card.marko", "3:4");
				return 0;
			}
		}, $scope3_id, "#text/0", 1, $wg__isOpen, 1, 0, 0, ["__tests__/tags/card.marko_4*shell"], $scope3_reason, 4);
		$fg__fmt && $cg__isOpen && _patch_render($scope3_id, "__tests__/tags/card.marko_4_fmt#3:4/setup", "fmt");
		$fg__label && $cg__isOpen && _patch_render($scope3_id, "__tests__/tags/card.marko_4_label#3:5/setup", "label");
		_write_if($scope3_reason, 3) && _scope($scope3_id, {
			fmt: ($ui__isOpen__OR__label || $ui__fmt__OR__label) && fmt,
			label: ($ui__isOpen__OR__fmt || $ui__fmt__OR__label) && label
		}, "__tests__/tags/card.marko", "2:2", {
			fmt: "2:25",
			label: "2:30"
		}) || ($fg__fmt && $ui__isOpen__OR__label && _patch_write($scope3_id, "PatchMarkedWrite:fmt", fmt, !_server_guard($scope3_reason, 5)), $fg__label && $ui__isOpen__OR__fmt && _patch_write($scope3_id, "PatchMarkedWrite:label", label, !_server_guard($scope3_reason, 6)));
	}, $scope0_id, 0) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5 | _updates_from($scope0_reason, 3) << 7 | _updates_from($scope0_reason, 5) << 9 | _updates_from($scope0_reason, 6) << 11 | _updates_from($scope0_reason, 7) << 13);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			Panel.content({
				isOpen: input.open,
				fmt: input.fmt,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 5) && _patch_render($scope1_id, "__tests__/tags/card.marko_1_input_open#0:6/setup");
			_client_guard($scope0_reason, 6) && _patch_render($scope1_id, "__tests__/tags/card.marko_1_input_fmt#0:7/setup");
			$cg__input_label && _patch_render($scope1_id, "__tests__/tags/card.marko_1_input_label#0:8/setup");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/card.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 4), 1, 0, 0, ["__tests__/tags/card.marko_1*shell"], $scope0_reason, 4);
	_if(() => {
		if (open) {
			const $scope2_id = _scope_id();
			_html(`<b>${_text_mark($scope2_id, "#text/0", input.label, $wg__input_label)}</b>`);
			$cg__input_label && _patch_render($scope2_id, "__tests__/tags/card.marko_2_input_label#0:8/setup");
			_scope($scope2_id, {}, "__tests__/tags/card.marko", "10:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_script($scope0_id, "__tests__/tags/card.marko_0_input_label#8", 1, $fg__input_label, "input_label");
	$fg__input_open && $cg__input_show && _patch_render($scope0_id, "__tests__/tags/card.marko_1_input_open#0:6/setup", "input_open");
	$fg__input_fmt && $cg__input_show && _patch_render($scope0_id, "__tests__/tags/card.marko_1_input_fmt#0:7/setup", "input_fmt");
	$fg__input_label && $cg__input_show && _patch_render($scope0_id, "__tests__/tags/card.marko_1_input_label#0:8/setup", "input_label");
	$fg__input_label && _patch_render($scope0_id, "__tests__/tags/card.marko_2_input_label#0:8/setup", "input_label");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_0_open#9/fill", open, 1);
	_scope($scope0_id, {
		input_open: ($ui__input_show || _unfilled_if($scope0_reason, 5)) && input.open,
		input_fmt: ($ui__input_show || _unfilled_if($scope0_reason, 6)) && input.fmt,
		input_label: input.label,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_open: ["input.open"],
		input_fmt: ["input.fmt"],
		input_label: ["input.label"],
		open: "1:6"
	}) || ($fg__input_open && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_open", input.open, !_server_guard($scope0_reason, 5)), $fg__input_fmt && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_fmt", input.fmt, !_server_guard($scope0_reason, 6)), $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 7)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks$1)};${((_w0) => `<!>${_w0}`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_label = _updates_from($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_set_scope_reason($uf__input_label << 3 | $uf__input_label << 5 | $uf__input_label << 7 | _updates_from($scope0_reason, 0) << 9 | $uf__input_label << 15);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	card_default({
		show: input.show,
		open: true,
		fmt: _resume((s) => s + "!", "__tests__/template.marko_0/fmt"),
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);

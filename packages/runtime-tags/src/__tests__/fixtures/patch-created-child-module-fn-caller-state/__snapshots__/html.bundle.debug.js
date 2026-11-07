// tags/lib.ts
const units = [
	"",
	"K",
	"M"
];
const lib = { format(value) {
	return value.toUpperCase() + units[value.length % units.length];
} };

// tags/rowsx.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks);
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/rowsx.marko_1*content": `__tests__/tags/rowsx.marko_1*content;${$Panel_content__walks};${$Panel_content__template}`,
	"__tests__/tags/rowsx.marko": `__tests__/tags/rowsx.marko;${((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`,
	"__tests__/tags/rowsx.marko_2*shell": "__tests__/tags/rowsx.marko_2*shell;D ;<em> </em>"
});
var rowsx_default = _template("__tests__/tags/rowsx.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Panel = { content: _content("__tests__/tags/rowsx.marko_1*content", ({ isOpen, fmt, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__isOpen = _write_guard($scope1_reason, 4), $fg__fmt = _filled_guard($scope1_reason, 5), $fg__label = _filled_guard($scope1_reason, 6), $cg__isOpen = _client_guard($scope1_reason, 4);
		_if(() => {
			if (isOpen) {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_mark($scope2_id, "#text/0", fmt(label), 1, $scope1_reason, 2)}</em>`);
				_patch_render($scope2_id, "__tests__/tags/rowsx.marko_2_fmt#1:4_label#1:5/setup", [_filled_guard($scope1_reason, 5) && ">fmt", _filled_guard($scope1_reason, 6) && ">label"], $scope1_reason, 2);
				_scope($scope2_id, { _: _write_if($scope1_reason, 2) && _scope_with_id($scope1_id) }, "__tests__/tags/rowsx.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__isOpen, 1, 0, 0, ["__tests__/tags/rowsx.marko_2*shell"], $scope1_reason, 4);
		$fg__fmt && $cg__isOpen && _patch_render($scope1_id, "__tests__/tags/rowsx.marko_2_fmt#1:4/setup", "fmt");
		$fg__label && $cg__isOpen && _patch_render($scope1_id, "__tests__/tags/rowsx.marko_2_label#1:5/setup", "label");
		_write_if($scope1_reason, 3) && _scope($scope1_id, {
			fmt: (_unfilled_if($scope1_reason, 1) || _unfilled_if($scope1_reason, 2)) && fmt,
			label: (_unfilled_if($scope1_reason, 0) || _unfilled_if($scope1_reason, 2)) && label
		}, "__tests__/tags/rowsx.marko", "2:2", {
			fmt: "2:25",
			label: "2:30"
		}) || ($fg__fmt && _unfilled_if($scope1_reason, 1) && _patch_write($scope1_id, "PatchMarkedWrite:fmt", fmt, !_server_guard($scope1_reason, 5)), $fg__label && _unfilled_if($scope1_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:label", label, !_server_guard($scope1_reason, 6)));
	}, $scope0_id, 0) };
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 0) << 3 | _updates_from($scope0_reason, 2) << 5 | _updates_from($scope0_reason, 0) << 7 | _updates_from($scope0_reason, 1) << 9 | _updates_from($scope0_reason, 2) << 13);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Panel.content({
		isOpen: input.open,
		fmt: lib.format,
		label: input.label + "1"
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/rowsx.marko", 0);
});

// template.marko
const $template = "<!><!><button class=l>l</button>";
const $walks = "b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button class=l>l</button>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([["__tests__/template.marko_1_l#0:6/setup"], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_open = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let l = "a";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(38 | _updates_from($scope0_reason, 1) << 3);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			rowsx_default({
				label: l,
				open: input.open
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_input_open#0:5/setup");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<button class=l>l</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_open && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/template.marko_1_input_open#0:5/setup", "input_open");
	_scope($scope0_id, {
		input_open: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.open,
		l
	}, "__tests__/template.marko", 0, {
		input_open: ["input.open"],
		l: "1:6"
	}) || $fg__input_open && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_open", input.open, !_server_guard($scope0_reason, 1));
}, 1);

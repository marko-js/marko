// tags/wrap.marko
const $template$1 = "<button id=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], ["__tests__/tags/wrap.marko_0"]];
_shells({ "__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko !__tests__/tags/wrap.marko_0; b%;<button id=toggle>toggle</button><!><!>" });
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_row__OR__input_label = _write_guard($scope0_reason, 0), $fg__input_row = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=toggle>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.row, { label: input.label }, 0, 0, 0, $wg__input_row__OR__input_label);
			_patch_render($scope1_id, "__tests__/tags/wrap.marko_1_input_row#0:4_input_label#0:5/setup", [_filled_guard($scope0_reason, 1) && ">input_row", _filled_guard($scope0_reason, 2) && ">input_label"], $scope0_reason, 0);
			_scope($scope1_id, {}, "__tests__/tags/wrap.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/wrap.marko_0");
	$fg__input_row && _patch_render($scope0_id, "__tests__/tags/wrap.marko_1_input_row#0:4/setup", "input_row");
	$fg__input_label && _patch_render($scope0_id, "__tests__/tags/wrap.marko_1_input_label#0:5/setup", "input_label");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/wrap.marko_0_open#6/fill", open, 1);
	_scope($scope0_id, {
		input_row: input.row,
		input_label: input.label,
		open
	}, "__tests__/tags/wrap.marko", 0, {
		input_row: ["input.row"],
		input_label: ["input.label"],
		open: "1:6"
	}) || ($fg__input_row && _patch_write($scope0_id, "PatchMarkedWrite:input_row", input.row, !_server_guard($scope0_reason, 1)), $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Row = { content: _content_resume("__tests__/template.marko_2*content", ({ label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__label = _write_guard($scope2_reason, 0);
		_html(`<em>${_text_mark($scope2_id, "#text/0", label, $wg__label)}</em>`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 1) << 5);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			wrap_default({
				row: Row,
				label: input.label
			});
			_patch_child_end();
			!$cg__input_show && _unfilled_if() && _patch_write($scope0_id, "PatchWrite:Row", Row);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:4/setup");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$fg__input_label && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_label#0:4/setup", "input_label");
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		Row: _unfilled_if($scope0_reason, 0) && Row
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		Row: "1:9"
	}) || $fg__input_label && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1));
}, 1);

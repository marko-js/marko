// tags/maker.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/maker.marko_1*content": "__tests__/tags/maker.marko_1*content !__tests__/tags/maker.marko_1",
	"__tests__/tags/maker.marko": "^__tests__/tags/maker.marko,"
});
var maker_default = _template("__tests__/tags/maker.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Label = { content: _content_resume("__tests__/tags/maker.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>made</em>${_el_mark($scope1_id, "#em/0")}`);
		_script($scope1_id, "__tests__/tags/maker.marko_1");
		_scope($scope1_id, {}, "__tests__/tags/maker.marko", "1:2");
	}, $scope0_id) };
	const $return = Label;
	return $return;
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `0${_w0}&b%c`)("")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)("")}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag = _write_guard($scope0_reason, 1), $cg__input_tag = _client_guard($scope0_reason, 1), $fg__input_tag = _filled_guard($scope0_reason, 1), $cg__input_rows = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		let L = maker_default({});
		_patch_child_end();
		_dynamic_tag($scope1_id, "#text/2", input.tag, { content: L }, 9, 0, 0, $wg__input_tag, $scope0_reason, 1);
		$cg__input_tag && _patch_write($scope1_id, "PatchWrite:L", L, 1);
		$cg__input_tag && _patch_render($scope1_id, "__tests__/template.marko_1_input_tag#0:4_L#3/setup");
		_scope($scope1_id, {
			L: _unfilled_if($scope0_reason, 1) && L,
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "1:2", { L: "2:10" });
	}, "id", $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	$fg__input_tag && $cg__input_rows && _patch_render($scope0_id, "__tests__/template.marko_1_input_tag#0:4/setup", "input_tag");
	_scope($scope0_id, { input_tag: _unfilled_if($scope0_reason, 0) && input.tag }, "__tests__/template.marko", 0, { input_tag: ["input.tag"] }) || $fg__input_tag && $cg__input_rows && _patch_write($scope0_id, "PatchMarkedWrite:input_tag", input.tag, !_server_guard($scope0_reason, 1));
}, 1);

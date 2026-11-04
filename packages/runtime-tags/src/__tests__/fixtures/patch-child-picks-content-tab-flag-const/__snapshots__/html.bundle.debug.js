// tags/tabs.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/tabs.marko": "__tests__/tags/tabs.marko;b%;<!><!><!>" });
var tabs_default = _template("__tests__/tags/tabs.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tab = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const active = [...input.tab].find((t) => t.active);
	_dynamic_tag($scope0_id, "#text/0", active?.content, {}, 2, 0, 0, $wg__input_tab, $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/tags/tabs.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=s>s</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content __tests__/template.marko_2_s#0:6/subscribe;b%;B<!>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;A<!>",
	"__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=s>s</button>${_w0}<!>`)($template$1)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_y = _filled_guard($scope0_reason, 2), $cg__input_x = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_y__closures = new Set();
	const $s__closures = new Set();
	let s = 0;
	_html(`<button class=s>s</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	tabs_default({ tab: attrTags(attrTag({
		active: input.x === 1,
		content: _content("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`A${_text_mark($scope1_id, "#text/0", input.y, 2, $scope0_reason, 2)}`);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "__tests__/template.marko_1_input_y#0:5/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_y__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4"));
		}, $scope0_id, 0)
	}), {
		active: input.x === 2,
		content: _content("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`B${_text_mark($scope2_id, "#text/0", s, 2)}`);
			_subscribe($s__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4"));
		}, $scope0_id, 0)
	}) });
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_y && $cg__input_x && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_y#5/subscribers", "input_y");
	_scope($scope0_id, {
		input_y: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.y,
		s,
		"ClosureScopes:input_y/7": _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && $input_y__closures,
		"ClosureScopes:s/8": $s__closures,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_y: ["input.y"],
		s: "1:6"
	}) || $fg__input_y && $cg__input_x && _patch_write($scope0_id, "PatchMarkedWrite:input_y", input.y, !_server_guard($scope0_reason, 2));
}, 1);

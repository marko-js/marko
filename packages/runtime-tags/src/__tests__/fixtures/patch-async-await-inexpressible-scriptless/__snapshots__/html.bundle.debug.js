// tags/widget/index.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/widget/index.marko": "^__tests__/tags/widget/index.marko," });
var widget_default = _template("__tests__/tags/widget/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $return = input.label;
	return $return;
});

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": `__tests__/template.marko_2*content${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("")};${/*@__PURE__*/ ((_w0) => `${_w0}<em> </em>`)("")}`,
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1_#text#0/await": `__tests__/template.marko_1_#text#0/await${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${((_w0) => `0${_w0}&D l`)("")};${((_w0) => `${_w0}<em> </em>`)("")}`,
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_value = _client_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $ui__input_value2 = _unfilled_if($scope0_reason, 2), $fg__input_value = _filled_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_value__closures = new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", Promise.resolve(input.value), () => {
				const $scope2_id = _scope_id(), $ui__input_value = _unfilled_if($scope0_reason, 2);
				const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0, $ui__input_value && 1);
				let w = widget_default({ label: input.value });
				$ui__input_value && _var($scope2_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_2_w#3/var");
				_patch_child_end();
				_html(`<em>${_text_mark($scope2_id, "#text/2", w, 1, $scope0_reason, 2)}</em>`);
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_value#0:4/subscribe", $cg__input_value);
				_subscribe($ui__input_value && $input_value__closures, _scope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:6"), $cg__input_value && "__tests__/template.marko_2_input_value#0:4/subscribe");
			}, 1, "__tests__/template.marko_2*content", _unfilled_if($scope0_reason, 2));
			$cg__input_value && _patch_render($scope1_id, "__tests__/template.marko_1_input_value#0:4/setup");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`</main>${_el_mark($scope0_id, "#main/0", $wg__input_show)}`);
	$fg__input_value && $cg__input_show && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_value#4/subscribers", "input_value");
	$fg__input_value && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_value#0:4/setup", "input_value");
	_scope($scope0_id, {
		input_value: ($ui__input_show || $ui__input_value2) && input.value,
		"ClosureScopes:input_value/5": _write_if($scope0_reason, 2) && ($ui__input_value2 || $ui__input_show) && $input_value__closures
	}, "__tests__/template.marko", 0, { input_value: ["input.value"] }) || $fg__input_value && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_value", input.value, !_server_guard($scope0_reason, 2));
}, 1);

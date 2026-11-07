// tags/wrap.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko;b%;<!><!><!>",
	"__tests__/tags/wrap.marko_1*shell": "__tests__/tags/wrap.marko_1*shell;D%;<div><!></div>"
});
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $fg__input_content = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
			_html("</div>");
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "__tests__/tags/wrap.marko_1_input_content#0:4/setup");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/wrap.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/wrap.marko_1*shell"], $scope0_reason, 1);
	$fg__input_content && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "__tests__/tags/wrap.marko_1_input_content#0:4/setup", "input_content");
	_scope($scope0_id, { input_content: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content }, "__tests__/tags/wrap.marko", 0, { input_content: ["input.content"] }) || $fg__input_content && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 2));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_prefix = _server_guard($scope0_reason, 2), $fg__input_prefix = _filled_guard($scope0_reason, 2), $wi__input_prefix = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_prefix__closures = new Set();
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	wrap_default({
		show: input.show,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			const inner = input.prefix + "!";
			_filled_guard($scope0_reason, 2) && _patch_write($scope1_id, "PatchMarkedWrite:inner", inner, !$sg__input_prefix);
			_html(`<div></div>${_el_mark($scope1_id, "#div/0")}`);
			_script($scope1_id, "__tests__/template.marko_1_inner#1", 1, _filled_guard($scope0_reason, 2), "inner");
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_prefix#0:4/subscribe", _client_guard($scope0_reason, 2));
			_subscribe($wi__input_prefix && $input_prefix__closures, _scope($scope1_id, {
				inner,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "1:2", { inner: "2:10" }));
		}, $scope0_id)
	});
	_patch_child_end();
	$fg__input_prefix && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_prefix#4/subscribers", "input_prefix");
	_scope($scope0_id, {
		input_prefix: _write_if($scope0_reason, 1) && input.prefix,
		"ClosureScopes:input_prefix/5": $wi__input_prefix && $input_prefix__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_prefix: ["input.prefix"] }) || $fg__input_prefix && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_prefix", input.prefix, !$sg__input_prefix);
}, 1);

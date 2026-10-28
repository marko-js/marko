// tags/wrap.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = [[], []];
_shells({
	"__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko !;b%;<!><!><!>",
	"__tests__/tags/wrap.marko_1*shell": "__tests__/tags/wrap.marko_1*shell;D%;<div><!></div>"
});
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_body = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_dynamic_tag($scope1_id, "#text/0", input.body, {}, 2, 0, 0, $wg__input_body, $scope0_reason, 2);
			_html("</div>");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/wrap.marko_1_input_body#0:4/init");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/wrap.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/wrap.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, { input_body: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.body }, "__tests__/tags/wrap.marko", 0, { input_body: ["input.body"] }) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/tags/wrap.marko_fill0", input.body, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.body));
});

// tags/child.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({
	"__tests__/tags/child.marko_1*content": "__tests__/tags/child.marko_1*content",
	"__tests__/tags/child.marko": /*@__PURE__*/ (() => `__tests__/tags/child.marko${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$2)}`)()
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_count = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_count__closures = new Set();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	wrap_default({
		show: input.show,
		body: attrTag({ content: _content_resume("__tests__/tags/child.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html("<p>body</p>");
			_script($scope1_id, "__tests__/tags/child.marko_1_input_count#0:4", 0, _filled_guard($scope0_reason, 1), ">input_count");
			_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, _client_guard($scope0_reason, 1) ? "__tests__/tags/child.marko_1_input_count#0:4/init" : "__tests__/tags/child.marko_1_input_count#0:4/subscribe");
			_subscribe($wi__input_count && $input_count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "2:4"));
			_resume_branch($scope1_id);
		}, $scope0_id) })
	});
	_patch_child_end();
	_scope($scope0_id, {
		input_count: input.count,
		"ClosureScopes:input_count/5": $wi__input_count && $input_count__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/child.marko", 0, { input_count: ["input.count"] }) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_count", input.count, !_server_guard($scope0_reason, 1));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button> </button>${_w0}${_w1}<!>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => ` D l/${_w0}&/${_w1}&b`)($walks$1, $walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/2>", $setup$1], ["#childScope/3>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => ` D l/${_w0}&/${_w1}&b`)($walks$1, $walks$1)};${((_w0, _w1) => `<button> </button>${_w0}${_w1}<!>`)($template$1, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(8 | _mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/2", 0);
	child_default({
		show: input.show,
		count
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/3", 1);
	child_default({
		show: input.show,
		count: input.count
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/2": _existing_scope($childScope),
		"#childScope/3": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);

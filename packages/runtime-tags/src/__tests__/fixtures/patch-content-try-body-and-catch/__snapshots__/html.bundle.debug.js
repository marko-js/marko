// tags/wrapper.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
function boom() {
	throw new Error("SHOWN_message");
}
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/wrapper.marko_2*content": "__tests__/tags/wrapper.marko_2*content;D l%;<p> </p><!><!>",
	"__tests__/tags/wrapper.marko": "__tests__/tags/wrapper.marko !;b%;<!><!><!>"
});
var wrapper_default = _template("__tests__/tags/wrapper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 1), $wi__input_content = _write_if($scope0_reason, 1), $cg__input_fail = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	const $input_fail__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "#text/0", input.fail ? boom() : "ok", void 0, $scope0_reason, 2)}</p>`);
		_dynamic_tag($scope2_id, "#text/1", input.content, {}, 10, 0, 0, $wg__input_content, $scope0_reason, 1);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, _client_guard($scope0_reason, 1) ? "__tests__/tags/wrapper.marko_2_input_content#0:3/init" : "__tests__/tags/wrapper.marko_2_input_content#0:3/subscribe");
		_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_fail ? "__tests__/tags/wrapper.marko_2_input_fail#0:4/init" : "__tests__/tags/wrapper.marko_2_input_fail#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_fail__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_content__closures, _scope($scope2_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_content/5": $wi__input_content && 1
		}, "__tests__/tags/wrapper.marko", "4:2"), "__tests__/tags/wrapper.marko_2_input_content#0:3/subscribe"), $cg__input_fail && "__tests__/tags/wrapper.marko_2_input_fail#0:4/subscribe");
	}, void 0, () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, 0, $wg__input_content);
		_subscribe($wi__input_content && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/wrapper.marko", "7:4"), "__tests__/tags/wrapper.marko_1_input_content#0:3/subscribe", $wg__input_content);
		$wg__input_content || _resume_branch($scope1_id);
	}, void 0, "__tests__/tags/wrapper.marko_1*content", "__tests__/tags/wrapper.marko_2*content", 1);
	_scope($scope0_id, {
		input_content: input.content,
		"ClosureScopes:input_content/5": $wi__input_content && $input_content__closures,
		"ClosureScopes:input_fail/6": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_fail__closures
	}, "__tests__/tags/wrapper.marko", 0, { input_content: ["input.content"] }) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/wrapper.marko_fill0", input.content, !_server_guard($scope0_reason, 1)), _content_withhold(input.content));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button> </button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/2>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` D l/${_w0}&b`)("b%c")};${((_w0) => `<button> </button>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(34);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/2", 0);
	wrapper_default({
		fail: count > 0,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</em>`);
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), "__tests__/template.marko_1_input_label#0:5/subscribe");
		}, $scope0_id)
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		count,
		"ClosureScopes:input_label/7": _write_if($scope0_reason, 0) && $input_label__closures,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		count: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
}, 1);

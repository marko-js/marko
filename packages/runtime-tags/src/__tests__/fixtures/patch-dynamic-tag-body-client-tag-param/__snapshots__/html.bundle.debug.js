// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/child.marko_1*content": "__tests__/tags/child.marko_1*content; ; ",
	"__tests__/tags/child.marko": "__tests__/tags/child.marko !;b%;<!><!><!>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_tag = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_dynamic_tag($scope0_id, "#text/0", input.tag, {}, 2, _content_resume("__tests__/tags/child.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(_text_resume($scope1_id, "#text/0", input.note, 1, $scope0_reason, 2));
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, _client_guard($scope0_reason, 2) ? "__tests__/tags/child.marko_1_input_note#0:4/init" : "__tests__/tags/child.marko_1_input_note#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "1:4"));
	}, $scope0_id, ($scope) => $scope0_page ? [{ input_note: input.note }] : []), 0, $wg__input_tag, $scope0_reason, 1);
	_scope($scope0_id, {
		input_note: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.note,
		"ClosureScopes:input_note/5": _write_if($scope0_reason, 2) && $input_note__closures
	}, "__tests__/tags/child.marko", 0, { input_note: ["input.note"] }) || _filled_guard($scope0_reason, 2) && _content_withheld("__tests__/tags/child.marko_1*content", $scope0_id) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", input.note, !_server_guard($scope0_reason, 2));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>swap</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button>swap</button>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let tag = "b";
	_html(`<button>swap</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(14 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	child_default({
		tag,
		note: input.note
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		tag,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { tag: "1:6" });
}, 1);

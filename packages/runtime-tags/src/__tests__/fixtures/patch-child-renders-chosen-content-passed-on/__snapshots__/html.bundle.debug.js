// tags/child.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko;b%;<!><!><!>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_renderer__OR__input_label = _write_guard($scope0_reason, 0), $ui__input_renderer__OR__input_label = _unfilled_if($scope0_reason, 0), $fg__input_renderer = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.renderer, { label: input.label }, 1, 0, 0, $wg__input_renderer__OR__input_label, $scope0_reason, 0, 0, 1);
	_patch_render($scope0_id, "__tests__/tags/child.marko_0_input_renderer#3_input_label#4/setup", (($fg__input_renderer ? " input_renderer" : "") + ($fg__input_label ? " input_label" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_renderer: _write_if($scope0_reason, 2) && $ui__input_renderer__OR__input_label && input.renderer,
		input_label: _write_if($scope0_reason, 1) && $ui__input_renderer__OR__input_label && input.label
	}, "__tests__/tags/child.marko", 0, {
		input_renderer: ["input.renderer"],
		input_label: ["input.label"]
	}) || ($fg__input_renderer && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_renderer", input.renderer, !_server_guard($scope0_reason, 1)), $fg__input_label && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2)));
});

// tags/mid.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({ "__tests__/tags/mid.marko": `__tests__/tags/mid.marko${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$2)}` });
var mid_default = _template("__tests__/tags/mid.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	child_default({
		renderer: input.renderer,
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/mid.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<b> </b>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<em> </em>",
	"__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)($walks$1)};${((_w0) => `<!>${_w0}<!>`)($template$1)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_a = _unfilled_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const A = { content: _content_resume("__tests__/template.marko_1*content", ({ label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_mark($scope1_id, "#text/0", label, 1, 4, 0)}</em>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id, void 0, 1) };
	const B = { content: _content_resume("__tests__/template.marko_2*content", ({ label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<b>${_text_mark($scope2_id, "#text/0", label, 1, 4, 0)}</b>`);
		_scope($scope2_id, {}, "__tests__/template.marko", "4:2");
	}, $scope0_id, void 0, 1) };
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	mid_default({
		renderer: input.a ? A : B,
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, {
		A: $ui__input_a && A,
		B: $ui__input_a && B,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		A: "1:9",
		B: "4:9"
	});
}, 1);

// tags/grand.marko
const $template$1 = "<!><!><!>";
const $setup$2 = [[], []];
_shells({ c: "c;b%;<!><!><!>" });
var grand_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_renderer__OR__input_label = _write_guard($scope0_reason, 0), $ui__input_renderer__OR__input_label = _unfilled_if($scope0_reason, 0), $fg__input_renderer = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.renderer, { label: input.label }, 1, 0, 0, $wg__input_renderer__OR__input_label, $scope0_reason, 0, 0, 1);
	_patch_render($scope0_id, "c0", (($fg__input_renderer ? " d" : "") + ($fg__input_label ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && $ui__input_renderer__OR__input_label && input.renderer,
		e: _write_if($scope0_reason, 1) && $ui__input_renderer__OR__input_label && input.label
	}) || ($fg__input_renderer && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.renderer, !_server_guard($scope0_reason, 1)), $fg__input_label && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2)));
});

// tags/child.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], []], ["a>", $setup$2]);
_shells({ b: `b${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}` });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	grand_default(input);
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a1: "a1;D ;<b> </b>",
	a0: "a0;D ;<em> </em>",
	a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)($walks)};${((_w0) => `<!>${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_a = _unfilled_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const A = { content: _content_resume("a0", ({ label }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_mark($scope1_id, "a", label, 1, 4, 0)}</em>`);
		_scope($scope1_id, {});
	}, $scope0_id, void 0, 1) };
	const B = { content: _content_resume("a1", ({ label }) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<b>${_text_mark($scope2_id, "a", label, 1, 4, 0)}</b>`);
		_scope($scope2_id, {});
	}, $scope0_id, void 0, 1) };
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		renderer: input.a ? A : B,
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, {
		f: $ui__input_a && A,
		g: $ui__input_a && B,
		a: _existing_scope($childScope)
	});
}, 1);

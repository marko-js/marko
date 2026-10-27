// tags/child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b0: "b0; ; ",
	b: "b !;b%;<!><!><!>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_tag = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_dynamic_tag($scope0_id, "a", input.tag, {}, 2, _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_patch_text($scope1_id, "a", input.note, void 0, $scope0_reason, 2));
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, _client_guard($scope0_reason, 2) ? "b1" : "b2");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id, ($scope) => $scope0_page ? [{ e: input.note }] : []), 0, $wg__input_tag, $scope0_reason, 1);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.note,
		f: _write_if($scope0_reason, 2) && $input_note__closures
	}) || _filled_guard($scope0_reason, 2) && _content_withheld("b0", $scope0_id) && _patch_fill($scope0_id, "vb3", input.note, !_server_guard($scope0_reason, 2));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button>swap</button>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let tag = "b";
	_html(`<button>swap</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(14 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _patch_child($scope0_id, "b", 0);
	child_default({
		tag,
		note: input.note
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: tag,
		b: _existing_scope($childScope)
	});
}, 1);

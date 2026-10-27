// tags/b-tag.marko
const $template$1 = "<!><!><!>";
const $setup$2 = [[], []];
_shells({
	c: "c;b%;<!><!><!>",
	c1: "c1;b%;<!><!><!>"
});
var b_tag_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_n = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.n > 0) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", a_tag_default, { n: input.n - 1 }, 1, 0, 0, $wg__input_n, $scope0_reason, 0);
			_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "c0");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_n, void 0, void 0, void 0, ["c1"], $scope0_reason, 0);
	_scope($scope0_id, {});
});

// tags/a-tag.marko
const $template = /*@__PURE__*/ ((_w0) => `<span>a<!></span>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `Db%l/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], ["b0"]], ["b>", $setup$2]);
_shells({ b: /*@__PURE__*/ (() => `b${_shell_marker($setup$1)};${((_w0) => `Db%l/${_w0}&b`)("b%c")};${((_w0) => `<span>a<!></span>${_w0}<!>`)($template$1)}`)() });
var a_tag_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>a${_patch_text($scope0_id, "a", input.n, 2, $scope0_reason, 0)}</span>`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "b", 0);
	b_tag_default({ n: input.n });
	_patch_child_end();
	_script($scope0_id, "b0");
	_scope($scope0_id, { b: _existing_scope($childScope) });
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a", 0);
	a_tag_default({ n: input.n });
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);

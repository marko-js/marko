// tags/b-tag.marko
const $template$1 = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	c: "c;b%;<!><!><!>",
	c2: "c2;b1bD ;<!><!><em> </em>"
});
var b_tag_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_n = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.n > 0) {
			const $scope1_id = _scope_id();
			const $atag_scope = _peek_scope_id();
			let x = _dynamic_tag($scope1_id, "a", a_tag_default, { n: input.n - 1 }, 1, 0, 0, 1, $scope0_reason, 0, 0, void 0, void 0, "c0");
			_var($scope1_id, "b", $atag_scope, "c0");
			_html(`<em>${_text_resume($scope1_id, "c", x)}</em>`);
			_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "c1");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_n, 1, 0, 0, ["c2"], $scope0_reason, 0);
	_scope($scope0_id, {});
});

// tags/a-tag.marko
const $template = /*@__PURE__*/ ((_w0) => `<span>a<!></span>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `Db%l/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({ b: /*@__PURE__*/ (() => `b${_shell_marker($setup)};${((_w0) => `Db%l/${_w0}&b`)("b%c")};${((_w0) => `<span>a<!></span>${_w0}<!>`)($template$1)}`)() });
var a_tag_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>a${_text_resume($scope0_id, "a", input.n, 2, $scope0_reason, 0)}</span>`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	b_tag_default({ n: input.n });
	_patch_child_end();
	const $return = input.n * 10;
	_scope($scope0_id, { b: _existing_scope($childScope) });
	return $return;
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a1: /*@__PURE__*/ (() => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			a_tag_default({ n: input.n });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 0);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.n }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.n, !_server_guard($scope0_reason, 1));
}, 1);

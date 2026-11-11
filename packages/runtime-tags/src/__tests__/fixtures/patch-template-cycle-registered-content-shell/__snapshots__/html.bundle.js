// tags/wrap.marko
const $template$2 = "<!><!><!>";
const $setup$3 = [[], []];
_shells({
	d: "d;b%;<!><!><!>",
	d1: "d1;b%;<!><!><!>"
});
var wrap_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_content = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "d0");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["d1"], $scope0_reason, 1);
	$fg__input_content && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "d0", "e");
	_scope($scope0_id, { e: ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.content }) || $fg__input_content && $ui__input_show && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 2));
});

// tags/tree-b.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)("b%c");
const $setup$2 = _shell_setup([[], []], ["a>", $setup$3]);
_shells({
	c1: "c1",
	c: `c${_shell_marker($setup$2)};${((_w0) => `b/${_w0}&%c`)("b%c")};${((_w0) => `<!>${_w0}<!><!>`)($template$2)}`,
	c3: "c3;b%;<!><!><!>"
});
var tree_b_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_depth = _client_guard($scope0_reason, 2), $uf__input_show = _updates_from($scope0_reason, 1), $wg__input_show__OR__input_depth = _write_guard($scope0_reason, 0), $wi__input_show__OR__input_depth = _write_if($scope0_reason, 0), $wg__input_depth = _write_guard($scope0_reason, 2), $ui__input_show__OR__input_depth = _unfilled_if($scope0_reason, 0), $ui__input_depth = _unfilled_if($scope0_reason, 2), $fg__input_show = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_depth__closures = /* @__PURE__ */ new Set();
	_set_scope_reason($uf__input_show << 1 | $uf__input_show << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	wrap_default({
		show: input.show,
		content: _content_resume("c1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<span>${_text_mark($scope1_id, "a", input.depth, 1, $scope0_reason, 2)}</span>`);
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "c0", $cg__input_depth);
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_depth__closures, _scope($scope1_id, { _: $wi__input_show__OR__input_depth && _scope_with_id($scope0_id) }), $cg__input_depth && "c0");
		}, $scope0_id)
	});
	_patch_child_end();
	_if(() => {
		if (input.depth) {
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "a", tree_a_default, {
				show: input.show,
				depth: input.depth - 1
			}, 9, 0, 0, $wg__input_show__OR__input_depth, $scope0_reason, 0);
			_patch_render($scope2_id, "c2", ((_filled_guard($scope0_reason, 1) ? " >e" : "") + (_filled_guard($scope0_reason, 2) ? " >f" : "")).slice(1), $scope0_reason, 0);
			$wi__input_show__OR__input_depth && _scope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, $wg__input_depth, 1, 0, 0, ["c3"], $scope0_reason, 2);
	$fg__input_show && $cg__input_depth && _patch_render($scope0_id, "c5", "e");
	_scope($scope0_id, {
		e: $ui__input_show__OR__input_depth && input.show,
		f: ($ui__input_show__OR__input_depth || $ui__input_depth) && input.depth,
		h: _write_if($scope0_reason, 2) && $input_depth__closures,
		a: _existing_scope($childScope)
	}) || ($fg__input_show && $ui__input_depth && _patch_write($scope0_id, "xe", input.show, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.depth, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "c4", "f"));
});

// tags/tree-a.marko
const $template = /*@__PURE__*/ ((_w0) => `<button> </button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&b`)($walks$1);
const $setup$1 = _shell_setup([[], ["b0"]], ["c>", $setup$2]);
_shells({ b: `b${_shell_marker($setup$1)};${((_w0) => ` D l/${_w0}&b`)($walks$1)};${((_w0) => `<button> </button>${_w0}<!>`)($template$1)}` });
var tree_a_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id($scope0_id, "c", 0);
	tree_b_default({
		show: input.show,
		depth: input.depth
	});
	_patch_child_end();
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb1", count, 1);
	_scope($scope0_id, {
		h: count,
		c: _existing_scope($childScope)
	});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_show = _updates_from($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($uf__input_show << 1 | $uf__input_show << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	tree_a_default({
		show: input.show,
		depth: 1
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);

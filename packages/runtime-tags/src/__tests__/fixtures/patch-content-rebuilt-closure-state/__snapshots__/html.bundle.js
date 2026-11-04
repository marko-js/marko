// tags/list.marko
const $template$1 = "<!><!><!>";
const $setup$2 = [[], []];
_shells({
	c: "c;b%;<!><!><!>",
	c0: "c0;b%;<!><!><!>"
});
var list_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", item.content, {}, 2, 0, 0, $wg__input_item, $scope0_reason, 0);
		_write_if($scope0_reason, 0) && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "c0", $scope0_reason, 0);
	_scope($scope0_id, {});
});

// tags/child.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>add</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], ["b3"]], ["b>", $setup$2]);
_shells({
	b1: "b1;b%;<!><!><!>",
	b: `b${_shell_marker($setup$1)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button>add</button>${_w0}<!>`)($template$1)}`,
	b0: "b0,<span>shown</span>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $cg__input_show = _client_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_show__closures = /* @__PURE__ */ new Set();
	let items = [1, 2];
	_html(`<button>add</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(2);
	let $item;
	forOf(items, (item) => $item = attrTags($item, { content: _content("b1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_html("<span>shown</span>");
				$wi__input_show && _scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_show, 1, 0, 0, ["b0"], $scope0_reason, 0);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "b2", $cg__input_show);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_show && "b2", $wg__input_show);
		$wg__input_show || _resume_branch($scope1_id);
	}, $scope0_id, 0) }));
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	list_default({ item: $item });
	_patch_child_end();
	_script($scope0_id, "b3");
	_patch_fill($scope0_id, "vb5", items, 1);
	_scope($scope0_id, {
		e: input.show,
		f: items,
		g: $wi__input_show && $input_show__closures,
		b: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.show, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "b4", "e");
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({ show: input.show });
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);

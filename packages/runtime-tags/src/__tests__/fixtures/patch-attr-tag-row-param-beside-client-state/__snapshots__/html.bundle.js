// tags/my-list.marko
const $template$1 = "<!><!><!>";
const $setup$2 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b0: "b0;D%;<div><!></div>"
});
var my_list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_row = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.row, (r) => {
		const $scope1_id = _scope_id();
		_html("<div>");
		_dynamic_tag($scope1_id, "a", r, {}, 2, 0, 0, $wg__input_row, $scope0_reason, 0);
		_html("</div>");
		_write_if($scope0_reason, 0) && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "b0", $scope0_reason, 0);
	_scope($scope0_id, {});
});

// tags/wrap.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], ["c3"]], ["a>", $setup$2]);
_shells({
	c2: "c2; ; ",
	c: `c${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`
});
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_label = _updates_from($scope0_reason, 2), $ui__input_items = _unfilled_if($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
	let $row;
	forOf(input.items, (item) => $row = attrTags($row, { content: _content("c2", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id(), $ui__input_label = _unfilled_if($scope0_reason, 2);
		$ui__input_label && _patch_write($scope1_id, "xb", item);
		_html(_text_mark($scope1_id, "a", item + input.label, 1, (2 | $uf__input_label) << 1, 0));
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "c0");
		_patch_render($scope1_id, "c1", "b" + (_filled_guard($scope0_reason, 2) ? " >e" : ""), (2 | $uf__input_label) << 1, 0);
		_subscribe($ui__input_label && $input_label__closures, _scope($scope1_id, {
			b: $ui__input_label && item,
			_: (_write_if($scope0_reason, 0) || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id)
		}), _client_guard($scope0_reason, 2) && "c0");
	}, $scope0_id, 0) }));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	my_list_default({ row: $row });
	_patch_child_end();
	_script($scope0_id, "c3", 0);
	$fg__input_label && _client_guard($scope0_reason, 1) && _patch_subscribers($scope0_id, "c4", "e");
	_scope($scope0_id, {
		e: ($ui__input_items || _unfilled_if($scope0_reason, 2)) && input.label,
		f: _write_if($scope0_reason, 2) && $input_label__closures,
		a: _existing_scope($childScope)
	}) || $fg__input_label && $ui__input_items && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)($walks)};${((_w0) => `<!>${_w0}<button>rename</button>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = "c";
	_set_scope_reason(38 | _updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	wrap_default({
		items: input.items,
		label: c
	});
	_patch_child_end();
	_html(`<button>rename</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: c,
		a: _existing_scope($childScope)
	});
}, 1);

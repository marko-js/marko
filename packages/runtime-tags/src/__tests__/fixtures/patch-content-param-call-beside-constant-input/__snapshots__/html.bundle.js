// tags/row.marko
const $template$2 = "<i> </i>";
const $setup$3 = [[], []];
_shells({ d: "d;D ;<i> </i>" });
var row_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<i>${_text_mark($scope0_id, "a", input.x, 1, $scope0_reason, 0)}</i>`);
	_scope($scope0_id, {});
});

// tags/each.marko
const $template$1 = "<!><!><!>";
const $setup$2 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b1: "b1;b%;<!><!><!>"
});
var each_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items__OR__input_content = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id(), $fg__input_items = _filled_guard($scope0_reason, 1);
		$fg__input_items && _unfilled_if($scope0_reason, 2) && _patch_write($scope1_id, "xd", item?.label, !_server_guard($scope0_reason, 1));
		_dynamic_tag($scope1_id, "a", input.content, { label: item.label }, 1, 0, 0, $wg__input_items__OR__input_content, $scope0_reason, 0, 0, 2);
		_patch_render($scope1_id, "b0", ((_filled_guard($scope0_reason, 2) ? " >e" : "") + ($fg__input_items ? " d" : "")).slice(1), $scope0_reason, 0);
		_write_if($scope0_reason, 0) && _scope($scope1_id, {
			d: _unfilled_if($scope0_reason, 0) && item?.label,
			_: _scope_with_id($scope0_id)
		});
	}, "id", $scope0_id, "a", 1, 1, 1, 0, 0, "b1", $scope0_reason, 1);
	$fg__input_content && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "b2", "e");
	_scope($scope0_id, { e: _unfilled_if($scope0_reason, 0) && input.content }) || $fg__input_content && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 2));
});

// tags/list.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], []], ["a>", $setup$2]);
_shells({
	c2: `c2${_shell_marker([[], []], ["a>", $setup$3])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${$template$2}`,
	c: `c${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`
});
var list_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_q = _updates_from($scope0_reason, 2), $uf__input_items = _updates_from($scope0_reason, 1), $ui__input_items = _unfilled_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_q__closures = /* @__PURE__ */ new Set();
	_set_scope_reason($uf__input_items << 1 | $uf__input_items << 3);
	const $childScope2 = _peek_scope_id($scope0_id, "a", 1);
	each_default({
		items: input.items,
		content: _content_resume("c2", ({ label }) => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id(), $ui__input_q = _unfilled_if($scope0_reason, 2);
			$ui__input_q && _patch_write($scope1_id, "xd", label);
			_set_scope_reason((2 | $uf__input_q) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			row_default({ x: label + input.q });
			_patch_child_end();
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "c0");
			_patch_render($scope1_id, "c1", "d" + (_filled_guard($scope0_reason, 2) ? " >e" : ""), (2 | $uf__input_q) << 1, 0);
			_subscribe($ui__input_q && $input_q__closures, _scope($scope1_id, {
				d: $ui__input_q && label,
				_: (_write_if($scope0_reason, 0) || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			}), _client_guard($scope0_reason, 2) && "c0", 0);
			_resume_branch($scope1_id);
		}, $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, {
		e: ($ui__input_items || _unfilled_if($scope0_reason, 2)) && input.q,
		f: _write_if($scope0_reason, 2) && $input_q__closures,
		a: _existing_scope($childScope2)
	}) || _filled_guard($scope0_reason, 2) && $ui__input_items && _patch_write($scope0_id, "xe", input.q, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "c3", "e");
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)($walks)};${((_w0) => `<!>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_items = _updates_from($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($uf__input_items << 1 | $uf__input_items << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	list_default({
		items: input.items,
		q: "!"
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);

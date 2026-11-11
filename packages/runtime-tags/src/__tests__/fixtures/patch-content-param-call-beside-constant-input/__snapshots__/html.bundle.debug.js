// tags/row.marko
const $template$3 = "<i> </i>";
const $walks$3 = "D l";
const $setup$3 = [[], []];
_shells({ "__tests__/tags/row.marko": "__tests__/tags/row.marko;D ;<i> </i>" });
var row_default = _template("__tests__/tags/row.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<i>${_text_mark($scope0_id, "#text/0", input.x, 1, $scope0_reason, 0)}</i>`);
	_scope($scope0_id, {}, "__tests__/tags/row.marko", 0);
});

// tags/each.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = [[], []];
_shells({
	"__tests__/tags/each.marko": "__tests__/tags/each.marko;b%;<!><!><!>",
	"__tests__/tags/each.marko_1*shell": "__tests__/tags/each.marko_1*shell;b%;<!><!><!>"
});
var each_default = _template("__tests__/tags/each.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items__OR__input_content = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id(), $fg__input_items = _filled_guard($scope0_reason, 1);
		$fg__input_items && _unfilled_if($scope0_reason, 2) && _patch_write($scope1_id, "PatchMarkedWrite:item_label", item?.label, !_server_guard($scope0_reason, 1));
		_dynamic_tag($scope1_id, "#text/0", input.content, { label: item.label }, 1, 0, 0, $wg__input_items__OR__input_content, $scope0_reason, 0, 0, 2);
		_patch_render($scope1_id, "__tests__/tags/each.marko_1_input_content#0:4_item_label#3/setup", ((_filled_guard($scope0_reason, 2) ? " >input_content" : "") + ($fg__input_items ? " item_label" : "")).slice(1), $scope0_reason, 0);
		_write_if($scope0_reason, 0) && _scope($scope1_id, {
			item_label: _unfilled_if($scope0_reason, 0) && item?.label,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/each.marko", "1:2", { item_label: ["item.label", "1:6"] });
	}, "id", $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/tags/each.marko_1*shell", $scope0_reason, 1);
	$fg__input_content && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "__tests__/tags/each.marko_1_input_content#0:4/setup", "input_content");
	_scope($scope0_id, { input_content: _unfilled_if($scope0_reason, 0) && input.content }, "__tests__/tags/each.marko", 0, { input_content: ["input.content"] }) || $fg__input_content && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 2));
});

// tags/list.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({
	"__tests__/tags/list.marko_1*content": `__tests__/tags/list.marko_1*content${_shell_marker([[], []], ["#childScope/0>", $setup$3])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${$template$3}`,
	"__tests__/tags/list.marko": `__tests__/tags/list.marko${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$2)}`
});
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_q = _updates_from($scope0_reason, 2), $uf__input_items = _updates_from($scope0_reason, 1), $ui__input_items = _unfilled_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_q__closures = new Set();
	_set_scope_reason($uf__input_items << 1 | $uf__input_items << 3);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/0", 1);
	each_default({
		items: input.items,
		content: _content_resume("__tests__/tags/list.marko_1*content", ({ label }) => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id(), $ui__input_q = _unfilled_if($scope0_reason, 2);
			$ui__input_q && _patch_write($scope1_id, "PatchMarkedWrite:label", label);
			_set_scope_reason((2 | $uf__input_q) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			row_default({ x: label + input.q });
			_patch_child_end();
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "__tests__/tags/list.marko_1_input_q#0:4/subscribe");
			_patch_render($scope1_id, "__tests__/tags/list.marko_1_input_q#0:4_label#3/setup", "label" + (_filled_guard($scope0_reason, 2) ? " >input_q" : ""), (2 | $uf__input_q) << 1, 0);
			_subscribe($ui__input_q && $input_q__closures, _scope($scope1_id, {
				label: $ui__input_q && label,
				_: (_write_if($scope0_reason, 0) || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/list.marko", "1:2", { label: "1:9" }), _client_guard($scope0_reason, 2) && "__tests__/tags/list.marko_1_input_q#0:4/subscribe", 0);
			_resume_branch($scope1_id);
		}, $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, {
		input_q: ($ui__input_items || _unfilled_if($scope0_reason, 2)) && input.q,
		"ClosureScopes:input_q/5": _write_if($scope0_reason, 2) && $input_q__closures,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/tags/list.marko", 0, { input_q: ["input.q"] }) || _filled_guard($scope0_reason, 2) && $ui__input_items && _patch_write($scope0_id, "PatchMarkedWrite:input_q", input.q, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "__tests__/tags/list.marko_0_input_q#4/subscribers", "input_q");
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)($walks$1)};${((_w0) => `<!>${_w0}<!>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_items = _updates_from($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($uf__input_items << 1 | $uf__input_items << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	list_default({
		items: input.items,
		q: "!"
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);

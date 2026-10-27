// tags/card.marko
_shells({ b: "b !b0; b%;<button id=toggle>toggle</button><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb2", open, 1);
	_scope($scope0_id, {
		e: input.content,
		f: open
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// tags/heading.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	c0: "c0;b%;depth <!>",
	c: "c !;b%;<!><!><!>"
});
var heading_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_type = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_depth__closures = /* @__PURE__ */ new Set();
	_dynamic_tag($scope0_id, "a", input.type, {}, 2, _content_resume("c0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`depth ${_patch_text($scope1_id, "a", input.depth, 2, $scope0_reason, 2)}`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, _client_guard($scope0_reason, 2) ? "c1" : "c2");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_depth__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id, ($scope) => $scope0_page ? [{ e: input.depth }] : []), 0, $wg__input_type, $scope0_reason, 1);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.depth,
		f: _write_if($scope0_reason, 2) && $input_depth__closures
	}) || _filled_guard($scope0_reason, 2) && _content_withheld("c0", $scope0_id) && _patch_fill($scope0_id, "vc3", input.depth, !_server_guard($scope0_reason, 2));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _patch_child($scope0_id, "a", 0);
	heading_default({
		type: card_default,
		depth: input.depth
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);

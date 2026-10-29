// tags/card.marko
_shells({ b: "b;D ;<em> </em>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// tags/outer.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	c: "c !;b%;<!><!><!>",
	c2: "c2 c6;b%;<!><!><!>"
});
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let T = input.fmt;
	_for_of(input.items, (v) => {
		const $scope1_id = _scope_id();
		_content_withhold(v), _filled_guard($scope0_reason, 2) && _patch_fill($scope1_id, "vc0", v);
		_dynamic_tag($scope1_id, "a", T, { label: v + input.label });
		_patch_init_entry($scope1_id, "c1", _filled_guard($scope0_reason, 3) && ">f", _filled_guard($scope0_reason, 2) && "c");
		_scope($scope1_id, {
			c: v,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "c2", $scope0_reason, 2);
	!_client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vc4", T, 1);
	_scope($scope0_id, {
		f: input.label,
		g: _write_if($scope0_reason, 0) && T
	}) || (_filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "vc3", input.label, !_server_guard($scope0_reason, 3)), _content_withhold(input.label), _content_withhold(input.fmt));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 2) << 7);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	outer_default({
		fmt: card_default,
		items: input.items,
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);

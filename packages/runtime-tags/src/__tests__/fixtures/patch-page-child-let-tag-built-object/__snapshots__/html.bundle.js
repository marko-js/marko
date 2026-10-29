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
_shells({ c: "c !;b%;<!><!><!>" });
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let T = input.fmt;
	const obj = { T };
	_dynamic_tag($scope0_id, "a", obj.T, { label: input.label });
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc1", T, 1);
	_scope($scope0_id, {
		e: input.label,
		h: _write_if($scope0_reason, 1) && obj.T
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vc0", input.label, !_server_guard($scope0_reason, 1)), _content_withhold(input.label), _content_withhold(input.fmt));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	outer_default({
		fmt: card_default,
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);

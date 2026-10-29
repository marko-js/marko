// tags/card.marko
const $template = "<section><!><p> </p></section>";
const $walks = "D%bD m";
const $setup$1 = [[], []];
_shells({ b: "b;D%bD ;<section><!><p> </p></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html("<section>");
	_dynamic_tag($scope0_id, "a", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0);
	_html(`<p>${_text_resume($scope0_id, "b", input.label, 1, $scope0_reason, 1)}</p></section>`);
	_scope($scope0_id, {}) || _content_withhold(input.content);
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template) });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({
		label: input.label,
		content: _content("a0", () => {
			_scope_reason();
			_scope_id();
			_html("<em>static</em>");
		}, $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);

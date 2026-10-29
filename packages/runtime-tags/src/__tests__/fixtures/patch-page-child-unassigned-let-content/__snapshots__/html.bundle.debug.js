// tags/card.marko
const $template$1 = "<section><!><p> </p></section>";
const $walks$1 = "D%bD m";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko;D%bD ;<section><!><p> </p></section>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_first_value($scope0_id, "c", c, $scope0_reason, 0);
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", c, {}, 2, 0, 0, 1, $scope0_reason, 0, "c");
	_html(`<p>${_text_resume($scope0_id, "#text/1", input.label, 1, $scope0_reason, 1)}</p></section>`);
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0) => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1) });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	card_default({
		label: input.label,
		content: _content("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html("<em>static</em>");
		}, $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);

// tags/card.marko
const $template$3 = "<em> </em>";
const $walks$3 = "D l";
const $setup$3 = [[], []];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko;D ;<em> </em>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "#text/0", input.label, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/big.marko
const $template$2 = "<strong> </strong>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/big.marko": "__tests__/tags/big.marko;D ;<strong> </strong>" });
var big_default = _template("__tests__/tags/big.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<strong>${_text_resume($scope0_id, "#text/0", input.label, 1, $scope0_reason, 0)}</strong>`);
	_scope($scope0_id, {}, "__tests__/tags/big.marko", 0);
});

// tags/outer.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/outer.marko": "__tests__/tags/outer.marko !;b%;<!><!><!>" });
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let T = input.tag;
	const obj = { T };
	_dynamic_tag($scope0_id, "#text/0", obj.T, { label: input.label });
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill1", T, 1);
	_scope($scope0_id, {
		input_label: input.label,
		obj_T: _write_if($scope0_reason, 1) && obj.T
	}, "__tests__/tags/outer.marko", 0, {
		input_label: ["input.label"],
		obj_T: ["obj.T", "2:8"]
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill0", input.label, !_server_guard($scope0_reason, 1)), _content_withhold(input.label), _content_withhold(input.tag));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	outer_default({
		tag: input.alt ? big_default : card_default,
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);

// tags/card.marko
const $template$2 = "<em> </em>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko;D ;<em> </em>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "#text/0", input.label, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/outer.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/outer.marko": "__tests__/tags/outer.marko !;b%;<!><!><!>",
	"__tests__/tags/outer.marko_1*shell": "__tests__/tags/outer.marko_1*shell __tests__/tags/outer.marko_1_T#0:6/init;b%;<!><!><!>"
});
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let T = input.fmt;
	_for_of(input.items, (v) => {
		const $scope1_id = _scope_id();
		_content_withhold(v), _filled_guard($scope0_reason, 2) && _patch_fill($scope1_id, "PatchFill:__tests__/tags/outer.marko_fill2", v);
		_dynamic_tag($scope1_id, "#text/0", T, { label: v + input.label });
		_patch_init_entry($scope1_id, "__tests__/tags/outer.marko_1_input_label#0:5_T#0:6_v#2/init", _filled_guard($scope0_reason, 3) && ">input_label", _filled_guard($scope0_reason, 2) && "v");
		_scope($scope1_id, {
			v,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/outer.marko", "2:2", { v: "2:6" });
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/tags/outer.marko_1*shell", $scope0_reason, 2);
	!_client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill1", T, 1);
	_scope($scope0_id, {
		input_label: input.label,
		T: _write_if($scope0_reason, 0) && T
	}, "__tests__/tags/outer.marko", 0, {
		input_label: ["input.label"],
		T: "1:6"
	}) || (_filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill0", input.label, !_server_guard($scope0_reason, 3)), _content_withhold(input.label), _content_withhold(input.fmt));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 2) << 7);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	outer_default({
		fmt: card_default,
		items: input.items,
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);

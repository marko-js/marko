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
const $template$1 = "<!><!><p> </p>";
const $walks$1 = "b%bD l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/outer.marko": "__tests__/tags/outer.marko !;b%bD ;<!><!><p> </p>" });
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let v = input.value;
	_dynamic_tag($scope0_id, "#text/0", v.tag, { label: input.label });
	_html(`<p>${_text_resume($scope0_id, "#text/1", v.fmt(input.label))}</p>`);
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill1", v, 1);
	_scope($scope0_id, {
		input_label: input.label,
		v: $wi__input_label && v,
		v_tag: $wi__input_label && v?.tag
	}, "__tests__/tags/outer.marko", 0, {
		input_label: ["input.label"],
		v: "1:6",
		v_tag: ["v.tag", "1:6"]
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill0", input.label, !_server_guard($scope0_reason, 1)), _content_withhold(input.label), _content_withhold(input.value));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks$1)};${((_w0) => `<!>${_w0}`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const fn = _resume((v) => "f-" + v, "__tests__/template.marko_0/fn");
	const other = _resume((v) => "g-" + v, "__tests__/template.marko_0/other");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	outer_default({
		value: _patch_live($childScope, {
			tag: card_default,
			fmt: input.alt ? other : fn
		}, $scope0_id, "input_alt"),
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, {
		fn: _unfilled_if($scope0_reason, 0) && fn,
		other: _unfilled_if($scope0_reason, 0) && other,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		fn: "3:8",
		other: "4:8"
	});
}, 1);

// tags/card.marko
_shells({ b: "b;D ;<em> </em>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// tags/outer.marko
const $template = "<!><!><p> </p>";
const $walks = "b%bD l";
const $setup$1 = [[], []];
_shells({ c: "c !;b%bD ;<!><!><p> </p>" });
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let v = input.value;
	_dynamic_tag($scope0_id, "a", v.tag, { label: input.label });
	_html(`<p>${_text_resume($scope0_id, "b", v.fmt(input.label))}</p>`);
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc1", v, 1);
	_scope($scope0_id, {
		f: input.label,
		g: $wi__input_label && v,
		i: $wi__input_label && v?.tag
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vc0", input.label, !_server_guard($scope0_reason, 1)), _content_withhold(input.label), _content_withhold(input.value));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks)};${((_w0) => `<!>${_w0}`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const fn = _resume((v) => "f-" + v, "a0");
	const other = _resume((v) => "g-" + v, "a1");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	outer_default({
		value: _patch_live($childScope, {
			tag: card_default,
			fmt: input.alt ? other : fn
		}, $scope0_id, "d"),
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, {
		f: _unfilled_if($scope0_reason, 0) && fn,
		g: _unfilled_if($scope0_reason, 0) && other,
		a: _existing_scope($childScope)
	});
}, 1);

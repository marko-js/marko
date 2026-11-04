// tags/view.marko
const $template$1 = "<!><!><span> </span>";
const $walks$1 = "b%bD l";
const $setup$2 = [[], []];
_shells({ c: "c;b%bD ;<!><!><span> </span>" });
var view_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html(`<span>${_text_mark($scope0_id, "b", input.title, 1, $scope0_reason, 1)}</span>`);
	_scope($scope0_id, {});
});

// tags/pick.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $setup$1 = _shell_setup([[], []], ["a>", $setup$2]);
_shells({ b: `b${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&`)($walks$1)};${((_w0) => `<!>${_w0}`)($template$1)}` });
var pick_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_on__OR__input_a__OR__input_b = _unfilled_if($scope0_reason, 3), $ui__input_a__OR__input_b = _unfilled_if($scope0_reason, 2), $ui__input_on__OR__input_b = _unfilled_if($scope0_reason, 1), $ui__input_on__OR__input_a = _unfilled_if($scope0_reason, 0), $fg__input_on = _filled_guard($scope0_reason, 4), $fg__input_a = _filled_guard($scope0_reason, 5), $fg__input_b = _filled_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 3) << 1 | _updates_from($scope0_reason, 7) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	view_default({
		content: input.on ? input.a : input.b,
		title: input.title
	});
	_patch_child_end();
	_patch_render($scope0_id, "b0", (($fg__input_on ? " d" : "") + ($fg__input_a ? " e" : "") + ($fg__input_b ? " f" : "")).slice(1), $scope0_reason, 3);
	_scope($scope0_id, {
		d: ($ui__input_a__OR__input_b || $ui__input_on__OR__input_a__OR__input_b) && input.on,
		e: ($ui__input_on__OR__input_b || $ui__input_on__OR__input_a__OR__input_b) && input.a,
		f: ($ui__input_on__OR__input_a || $ui__input_on__OR__input_a__OR__input_b) && input.b,
		a: _existing_scope($childScope)
	}) || ($fg__input_on && $ui__input_a__OR__input_b && _patch_write($scope0_id, "xd", input.on, !_server_guard($scope0_reason, 4)), $fg__input_a && $ui__input_on__OR__input_b && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 5)), $fg__input_b && $ui__input_on__OR__input_a && _patch_write($scope0_id, "xf", input.b, !_server_guard($scope0_reason, 6)));
});

// template.marko
const $setup = _shell_setup([[], ["a4"]], ["b>", $setup$1]);
_shells({
	a3: "a3 a1",
	a2: "a2",
	a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)($walks)};${((_w0) => `<button>s</button>${_w0}`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_x = _client_guard($scope0_reason, 2), $uf__input_on = _updates_from($scope0_reason, 1), $ui__input_on = _unfilled_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_x__closures = /* @__PURE__ */ new Set();
	const $s__closures = /* @__PURE__ */ new Set();
	let s = 0;
	_html(`<button>s</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason($uf__input_on << 1 | $uf__input_on << 3 | $uf__input_on << 7 | $uf__input_on << 9 | _updates_from($scope0_reason, 3) << 15);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	pick_default({
		on: input.on,
		title: input.title,
		a: attrTag({ content: _content_resume("a2", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`A${_text_mark($scope1_id, "a", input.x, 2, $scope0_reason, 2)}`);
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "a0", $cg__input_x);
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_x__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), $cg__input_x && "a0");
		}, $scope0_id) }),
		b: attrTag({ content: _content_resume("a3", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`B${_text_mark($scope2_id, "a", s, 2)}`);
			_subscribe($s__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), "a1");
		}, $scope0_id) })
	});
	_patch_child_end();
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		f: ($ui__input_on || _unfilled_if($scope0_reason, 2)) && input.x,
		h: s,
		i: _write_if($scope0_reason, 2) && $input_x__closures,
		j: $s__closures,
		b: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 2) && $ui__input_on && _patch_write($scope0_id, "xf", input.x, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "a5", "f");
}, 1);

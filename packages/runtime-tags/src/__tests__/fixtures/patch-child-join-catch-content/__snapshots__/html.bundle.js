// tags/wrapper.marko
const $template$1 = "<!><!><!>";
function boom() {
	throw new Error("SHOWN_message");
}
const $setup$2 = [[], []];
_shells({
	c3: "c3;D ;<p> </p>",
	c: "c;b%;<!><!><!>"
});
var wrapper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_fallback = _write_guard($scope0_reason, 0), $cg__input_fallback = _client_guard($scope0_reason, 0), $cg__input_fail = _client_guard($scope0_reason, 1), $fg__input_fallback = _filled_guard($scope0_reason, 0), $wi__input_fallback = _write_if($scope0_reason, 0), $wi__input_fail = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_fallback__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_mark($scope2_id, "a", input.fail ? boom() : "ok", 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "c1", $cg__input_fail);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_fail__closures, _scope($scope2_id, { _: $wi__input_fail && _scope_with_id($scope0_id) }), $cg__input_fail && "c1");
	}, void 0, () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.fallback, {}, 0, 0, 0, $wg__input_fallback);
		$cg__input_fallback && _patch_render($scope1_id, "c0");
		_subscribe($wi__input_fallback && $input_fallback__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_fallback && "c0", $wg__input_fallback);
	}, 0, "c2", "c3", 1);
	$fg__input_fallback && _patch_subscribers($scope0_id, "c4", "d");
	_scope($scope0_id, {
		d: input.fallback,
		f: $wi__input_fallback && $input_fallback__closures,
		g: $wi__input_fail && _unfilled_if($scope0_reason, 1) && $input_fail__closures
	}) || $fg__input_fallback && _patch_write($scope0_id, "xd", input.fallback, !_server_guard($scope0_reason, 0));
});

// tags/panel.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], []], ["a>", $setup$2]);
_shells({
	b3: "b3",
	b: `b${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_a = _filled_guard($scope0_reason, 2), $fg__input_b = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_b__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_updates_from($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	wrapper_default({
		fail: input.fail,
		fallback: attrTag({ content: _content_resume("b3", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_mark($scope1_id, "a", input.a + input.b, 1, $scope0_reason, 0)}</em>`);
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "b0");
			_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope1_id, "b1");
			_patch_render($scope1_id, "b2", [_filled_guard($scope0_reason, 2) && ">e", _filled_guard($scope0_reason, 3) && ">f"], $scope0_reason, 0);
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_b__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 2) && "b0"), _client_guard($scope0_reason, 3) && "b1");
		}, $scope0_id) })
	});
	_patch_child_end();
	$fg__input_a && _patch_subscribers($scope0_id, "b4", "e");
	$fg__input_b && _patch_subscribers($scope0_id, "b5", "f");
	_scope($scope0_id, {
		e: input.a,
		f: input.b,
		g: _write_if($scope0_reason, 2) && $input_a__closures,
		h: _write_if($scope0_reason, 3) && $input_b__closures,
		a: _existing_scope($childScope)
	}) || ($fg__input_a && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 2)), $fg__input_b && _patch_write($scope0_id, "xf", input.b, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = "k";
	_set_scope_reason(134 | (_updates_from($scope0_reason, 2) << 3 | _updates_from($scope0_reason, 1) << 5));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	panel_default({
		a: input.a,
		b: n,
		fail: input.fail
	});
	_patch_child_end();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 2) << 3 | _updates_from($scope0_reason, 1) << 5 | _updates_from($scope0_reason, 3) << 7);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	panel_default({
		a: input.a,
		b: input.b,
		fail: input.fail
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		i: n,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);

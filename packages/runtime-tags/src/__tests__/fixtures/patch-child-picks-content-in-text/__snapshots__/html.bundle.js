// tags/pick.marko
const $template = "<div><!><!></div>";
const $walks = "D%b%l";
const $setup$1 = [[], []];
_shells({ b: "b;D%b%;<div><!><!></div>" });
var pick_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_on = _filled_guard($scope0_reason, 4), $fg__input_a = _filled_guard($scope0_reason, 5), $fg__input_b = _filled_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const c = input.on ? input.a : input.b;
	_html(`<div>${_text_mark($scope0_id, "a", input.title, 1, $scope0_reason, 7)}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, _write_guard($scope0_reason, 3), $scope0_reason, 3);
	_html("</div>");
	_patch_render($scope0_id, "b0", [
		$fg__input_on && "e",
		$fg__input_a && "f",
		$fg__input_b && "g"
	], $scope0_reason, 3);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.on,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.a,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.b
	}) || ($fg__input_on && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xe", input.on, !_server_guard($scope0_reason, 4)), $fg__input_a && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.a, !_server_guard($scope0_reason, 5)), $fg__input_b && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xg", input.b, !_server_guard($scope0_reason, 6)));
});

// template.marko
const $setup = _shell_setup([[], ["a4"]], ["b>", $setup$1]);
_shells({
	a3: "a3 a1",
	a2: "a2",
	a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)($walks)};${((_w0) => `<button>s</button>${_w0}`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_x = _client_guard($scope0_reason, 2), $fg__input_x = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_x__closures = /* @__PURE__ */ new Set();
	const $s__closures = /* @__PURE__ */ new Set();
	let s = 0;
	_html(`<button>s</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 1) << 7 | _updates_from($scope0_reason, 1) << 9 | _updates_from($scope0_reason, 3) << 15);
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
	$fg__input_x && _patch_subscribers($scope0_id, "a5", "f");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.x,
		h: s,
		i: _write_if($scope0_reason, 2) && $input_x__closures,
		j: $s__closures,
		b: _existing_scope($childScope)
	}) || $fg__input_x && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.x, !_server_guard($scope0_reason, 2));
}, 1);

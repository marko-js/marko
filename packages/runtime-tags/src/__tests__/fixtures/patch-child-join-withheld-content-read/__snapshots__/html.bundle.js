// tags/child.marko
const $template = "<section></section><!><!>";
const $walks = " b%c";
const $setup$1 = [[], []];
_shells({
	b0: "b0;D ;<i> </i>",
	b: "b; b%;<section></section><!><!>",
	b3: "b3;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a = _client_guard($scope0_reason, 3), $fg__input_a = _filled_guard($scope0_reason, 3), $cg__input_mode__OR__input_b = _client_guard($scope0_reason, 2), $fg__input_b = _filled_guard($scope0_reason, 5), $cg__input_b = _client_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const frag = { content: _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<i>${_text_mark($scope1_id, "a", input.a, 1, $scope0_reason, 3)}</i>`);
		_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope1_id, "b1", $cg__input_a);
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_a__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_html("<section>");
	_attr_content("a", $scope0_id, input.mode ? frag.content : null, 0, 1, $scope0_reason, 4);
	_html(`</section>${_el_mark($scope0_id, "a", _updates_from($scope0_reason, 4))}`);
	_if(() => {
		if (input.b) {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_mark($scope2_id, "a", input.a + input.b, 1, $scope0_reason, 1)}</p>`);
			_patch_render($scope2_id, "b2", [_filled_guard($scope0_reason, 3) && ">e", _filled_guard($scope0_reason, 5) && ">g"], $scope0_reason, 1);
			_scope($scope2_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 5), 1, 0, 0, ["b3"], $scope0_reason, 5);
	_unfilled_if($scope0_reason, 4) && _patch_write($scope0_id, "wi", frag?.content, 1);
	$fg__input_a && $cg__input_mode__OR__input_b && _patch_subscribers($scope0_id, "b4", "e");
	$fg__input_a && $cg__input_b && _patch_render($scope0_id, "b5", "e");
	$fg__input_b && $cg__input_b && _patch_render($scope0_id, "b6", "g");
	_client_guard($scope0_reason, 4) && _patch_render($scope0_id, "b7");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.a,
		g: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 1)) && input.b,
		i: _unfilled_if($scope0_reason, 4) && frag?.content,
		k: _write_if($scope0_reason, 3) && $input_a__closures
	}) || ($fg__input_a && $cg__input_mode__OR__input_b && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 3)), $fg__input_b && $cg__input_a && _patch_write($scope0_id, "xg", input.b, !_server_guard($scope0_reason, 5)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}& b b`)($walks, $walks)};${((_w0, _w1) => `${_w0}${_w1}<button class=m>m</button><button class=n>n</button>`)($template, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let m = true;
	let n = "";
	_set_scope_reason(614 | (_updates_from($scope0_reason, 0) << 3 | _updates_from($scope0_reason, 1) << 7 | _updates_from($scope0_reason, 2) << 11));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		a: input.x,
		b: input.y,
		mode: m
	});
	_patch_child_end();
	_set_scope_reason(2622 | _updates_from($scope0_reason, 1) << 7);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	child_default({
		a: input.x,
		b: n,
		mode: m
	});
	_patch_child_end();
	_html(`<button class=m>m</button>${_el_mark($scope0_id, "c")}<button class=n>n</button>${_el_mark($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		i: m,
		j: n,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);

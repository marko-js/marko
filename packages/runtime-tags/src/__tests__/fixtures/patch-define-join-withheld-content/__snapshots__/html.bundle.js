// tags/child.marko
const $template = "<section></section>";
const $setup$1 = [[], []];
_shells({
	b0: "b0;D ;<em> </em>",
	b: "b; ;<section></section>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_mode = _client_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_b__closures = /* @__PURE__ */ new Set();
	const frag = { content: _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_resume($scope1_id, "a", input.a + input.b, 1, $scope0_reason, 0)}</em>`);
		(_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "b1");
		(_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "b2");
		_patch_init_entry($scope1_id, "b3", [_filled_guard($scope0_reason, 4) && ">d", _filled_guard($scope0_reason, 5) && ">e"], $scope0_reason, 0);
		_subscribe(_unfilled_if($scope0_reason, 5) && $input_b__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_a__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id) })));
	}, $scope0_id) };
	_html("<section>");
	_attr_content("a", $scope0_id, input.mode ? frag.content : null, 0, 1, $scope0_reason, 6);
	_html(`</section>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 6))}`);
	_filled_guard($scope0_reason, 4) && (_content_withheld("b0", $scope0_id) || $cg__input_mode) ? _patch_fill($scope0_id, "vb4", input.a) : _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.a, !(_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 5)));
	_filled_guard($scope0_reason, 5) && (_content_withheld("b0", $scope0_id) || $cg__input_mode) ? _patch_fill($scope0_id, "vb5", input.b) : _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.b, !(_filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 4)));
	$cg__input_mode && _patch_write($scope0_id, "wh", frag?.content, 1);
	$cg__input_mode && _patch_init($scope0_id, "b6");
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.a,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.b,
		h: _unfilled_if($scope0_reason, 6) && frag?.content,
		j: _write_if($scope0_reason, 4) && $input_a__closures,
		k: _write_if($scope0_reason, 5) && $input_b__closures
	});
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}& b b`)(" b", " b")};${((_w0, _w1) => `${_w0}${_w1}<button class=n>+</button><button class=m>m</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	let m = false;
	_set_scope_reason(9198 | _mask_group($scope0_reason, 1) << 11);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		a: n,
		b: input.x,
		mode: m
	});
	_patch_child_end();
	_set_scope_reason(8696 | (_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 9 | _mask_group($scope0_reason, 1) << 11));
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	child_default({
		a: input.y,
		b: input.x,
		mode: m
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "c")}<button class=m>m</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		i: n,
		j: m,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);

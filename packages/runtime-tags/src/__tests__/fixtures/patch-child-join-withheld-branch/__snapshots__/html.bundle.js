// tags/child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b0: "b0;D ;<em> </em>",
	b: "b !;b%;<!><!><!>",
	b5: "b5; ;<section></section>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_mode = _client_guard($scope0_reason, 7), $wi__input_show__OR__input_a__OR__input_b__OR__input_mode = _write_if($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_b__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const frag = { content: _content_resume("b0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(`<em>${_text_resume($scope2_id, "a", input.a + input.b, 1, $scope0_reason, 0)}</em>`);
				(_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "b1");
				(_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "b2");
				_patch_init_entry($scope2_id, "b3", [_filled_guard($scope0_reason, 5) && ">>e", _filled_guard($scope0_reason, 6) && ">>f"], $scope0_reason, 0);
				_subscribe(_unfilled_if($scope0_reason, 6) && $input_b__closures, _subscribe(_unfilled_if($scope0_reason, 5) && $input_a__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_a__OR__input_b__OR__input_mode && _scope_with_id($scope1_id) })));
			}, $scope1_id) };
			_html("<section>");
			_attr_content("a", $scope1_id, input.mode ? frag.content : null, 0, 1, $scope0_reason, 7);
			_html(`</section>${_el_resume($scope1_id, "a", _mask_group($scope0_reason, 7))}`);
			$cg__input_mode && _patch_write($scope1_id, "wc", frag?.content, 1);
			$cg__input_mode && _patch_init($scope1_id, "b4");
			_scope($scope1_id, {
				c: (_unfilled_if($scope0_reason, 7) || _unfilled_if($scope0_reason, 4)) && frag?.content,
				_: $wi__input_show__OR__input_a__OR__input_b__OR__input_mode && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b5"], $scope0_reason, 4);
	_filled_guard($scope0_reason, 5) && (_content_withheld("b0", $scope0_id) || $cg__input_mode) ? _patch_fill($scope0_id, "vb7", input.a) : _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "xe", input.a, !(_filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 6)));
	_filled_guard($scope0_reason, 6) && (_content_withheld("b0", $scope0_id) || $cg__input_mode) ? _patch_fill($scope0_id, "vb8", input.b) : _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.b, !(_filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 5)));
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.a,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.b,
		g: _unfilled_if($scope0_reason, 4) && input.mode,
		h: _write_if($scope0_reason, 5) && $input_a__closures,
		i: _write_if($scope0_reason, 6) && $input_b__closures
	}) || (_filled_guard($scope0_reason, 7) && $cg__input_show && _patch_fill($scope0_id, "vb6", input.mode, !_server_guard($scope0_reason, 7)), $cg__input_show && _content_withhold(input.mode));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)("b%c", "b%c")};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=m>m</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	let m = false;
	_set_scope_reason(35326 | (_mask_group($scope0_reason, 2) << 9 | _mask_group($scope0_reason, 1) << 13));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		a: n,
		b: input.x,
		show: input.show,
		mode: m
	});
	_patch_child_end();
	_set_scope_reason(33272 | (_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 9 | _mask_group($scope0_reason, 3) << 11 | _mask_group($scope0_reason, 1) << 13));
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	child_default({
		a: input.y,
		b: input.x,
		show: input.show,
		mode: m
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "c")}<button class=m>m</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		j: n,
		k: m,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);

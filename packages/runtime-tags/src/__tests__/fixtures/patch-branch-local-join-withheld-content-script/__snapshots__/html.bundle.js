// tags/child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b0: "b0",
	b: "b !;b%;<!><!><!>",
	b8: "b8; b ;<div></div><section></section>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_mode = _client_guard($scope0_reason, 6), $wi__input_show__OR__input_b__OR__input_a__OR__input_mode = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 3), $sg__input_b = _server_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 3), $cg__input_b = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__c__closures = /* @__PURE__ */ new Set();
			const c = input.b + "!";
			_html(`<div></div>${_el_resume($scope1_id, "a")}`);
			const frag = { content: _content_resume("b0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(`<em>${_text_resume($scope2_id, "a", input.a + c, void 0, $scope0_reason, 0)}</em>`);
				(_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "b1");
				(_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "b2");
				_patch_join_init($scope2_id, "b3", $scope0_reason, 0, _filled_guard($scope0_reason, 5) && ">>f", _filled_guard($scope0_reason, 4) && ">c");
				_subscribe(_unfilled_if($scope0_reason, 4) && $if_content__c__closures, _subscribe(_unfilled_if($scope0_reason, 5) && $input_a__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_b__OR__input_a__OR__input_mode && _scope_with_id($scope1_id) })));
			}, $scope1_id) };
			_html("<section>");
			_attr_content("b", $scope1_id, input.mode ? frag.content : null, 0, void 0, $scope0_reason, 6);
			_html(`</section>${_el_resume($scope1_id, "b", _mask_group($scope0_reason, 6))}`);
			_script($scope1_id, "b4", 1, _filled_guard($scope0_reason, 4), "c");
			_filled_guard($scope0_reason, 4) && (_content_withheld("b0", $scope1_id) || $cg__input_mode ? _patch_fill($scope1_id, "vb5", c) : _patch_write($scope1_id, "xc", c, !$sg__input_b));
			$cg__input_mode && _patch_write($scope1_id, "we", frag?.content, 1);
			$cg__input_b && _patch_init($scope1_id, "b6");
			$cg__input_mode && _patch_init($scope1_id, "b7");
			_scope($scope1_id, {
				c,
				e: (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 3)) && frag?.content,
				_: $wi__input_show__OR__input_b__OR__input_a__OR__input_mode && _scope_with_id($scope0_id),
				k: _write_if($scope0_reason, 4) && $if_content__c__closures
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b8"], $scope0_reason, 3);
	_filled_guard($scope0_reason, 5) && (_content_withheld("b0", $scope0_id) || $cg__input_mode) ? _patch_fill($scope0_id, "vb11", input.a) : _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.a, !(_filled_guard($scope0_reason, 5) && $cg__input_b));
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && input.b,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.a,
		g: _unfilled_if($scope0_reason, 3) && input.mode,
		i: _write_if($scope0_reason, 5) && $input_a__closures
	}) || (_filled_guard($scope0_reason, 4) && $cg__input_show && _patch_fill($scope0_id, "vb9", input.b, !$sg__input_b), _filled_guard($scope0_reason, 6) && $cg__input_show && _patch_fill($scope0_id, "vb10", input.mode, !_server_guard($scope0_reason, 6)), $cg__input_show && _content_withhold(input.mode));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)("b%c", "b%c")};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=m>m</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	let m = false;
	_set_scope_reason(10366 | (_mask_group($scope0_reason, 2) << 7 | _mask_group($scope0_reason, 1) << 9));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		a: n,
		b: input.x,
		show: input.show,
		mode: m
	});
	_patch_child_end();
	_set_scope_reason(8312 | (_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 7 | _mask_group($scope0_reason, 1) << 9 | _mask_group($scope0_reason, 3) << 11));
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

// tags/child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b0: "b0;D ;<em> </em>",
	b: "b !;b%;<!><!><!>",
	b7: "b7 !;D l ;<p> </p><section></section>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a = _client_guard($scope0_reason, 7), $cg__input_mode = _client_guard($scope0_reason, 8), $wg__input_show = _write_guard($scope0_reason, 5), $sg__input_b = _server_guard($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 5), $cg__input_b = _client_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__c__closures = /* @__PURE__ */ new Set();
			const c = input.b + "!";
			_html(`<p>${_text_resume($scope1_id, "a", input.a + c, void 0, $scope0_reason, 1)}</p>`);
			const frag = { content: _content_resume("b0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(`<em>${_text_resume($scope2_id, "a", c, void 0, $scope0_reason, 6)}</em>`);
				_unfilled_if($scope0_reason, 6) && _patch_init($scope2_id, $cg__input_b ? "b1" : "b2");
				_subscribe(_unfilled_if($scope0_reason, 6) && $if_content__c__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope1_id) }));
			}, $scope1_id) };
			_html("<section>");
			_patch_attr_content("b", $scope1_id, input.mode ? frag.content : null, 0, void 0, $scope0_reason, 8);
			_html(`</section>${_el_resume($scope1_id, "b", _mask_group($scope0_reason, 8))}`);
			_filled_guard($scope0_reason, 6) ? ($cg__input_a || _content_withheld("b0", $scope1_id) || $cg__input_mode) && _patch_fill($scope1_id, "vb3", c) : _patch_init($scope1_id, "b4");
			$cg__input_mode && _patch_write($scope1_id, "wf", frag?.content, 1);
			_patch_join_init($scope1_id, "b5", $scope0_reason, 1, _filled_guard($scope0_reason, 7) && ">f", _filled_guard($scope0_reason, 6) && "c");
			$cg__input_mode && _patch_init($scope1_id, "b6");
			_scope($scope1_id, {
				c: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 6)) && c,
				f: (_unfilled_if($scope0_reason, 8) || _unfilled_if($scope0_reason, 5)) && frag?.content,
				_: _write_if($scope0_reason, 4) && _scope_with_id($scope0_id),
				k: _write_if($scope0_reason, 6) && $if_content__c__closures
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b7"], $scope0_reason, 5);
	_filled_guard($scope0_reason, 7) && $cg__input_show ? _patch_fill($scope0_id, "vb10", input.a) : _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.a, !(_filled_guard($scope0_reason, 7) && $cg__input_b));
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 6)) && input.b,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.a,
		g: _unfilled_if($scope0_reason, 5) && input.mode
	}) || (_filled_guard($scope0_reason, 6) && $cg__input_show && _patch_fill($scope0_id, "vb8", input.b, !$sg__input_b), _filled_guard($scope0_reason, 8) && $cg__input_show && _patch_fill($scope0_id, "vb9", input.mode, !_server_guard($scope0_reason, 8)), $cg__input_show && _content_withhold(input.mode));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)("b%c", "b%c")};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=m>m</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	let m = false;
	_set_scope_reason(165624 | (_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 3) << 11 | _mask_group($scope0_reason, 2) << 13));
	const $childScope = _patch_child($scope0_id, "a", 0);
	child_default({
		a: n,
		b: input.x,
		show: input.show,
		mode: m
	});
	_patch_child_end();
	_set_scope_reason(133088 | (_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 3) << 11 | _mask_group($scope0_reason, 2) << 13 | _mask_group($scope0_reason, 4) << 15));
	const $childScope2 = _patch_child($scope0_id, "b", 1);
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

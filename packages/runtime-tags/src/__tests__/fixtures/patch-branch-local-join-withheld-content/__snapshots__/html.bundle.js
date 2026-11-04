// tags/child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b0: "b0;D ;<em> </em>",
	b: "b;b%;<!><!><!>",
	b6: "b6;D l ;<p> </p><section></section>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_b = _client_guard($scope0_reason, 6), $wg__input_show = _write_guard($scope0_reason, 5), $ui__input_show = _unfilled_if($scope0_reason, 5), $sg__input_b = _server_guard($scope0_reason, 6), $ui__input_show__OR__input_b = _unfilled_if($scope0_reason, 0), $fg__input_b2 = _filled_guard($scope0_reason, 6), $fg__input_a = _filled_guard($scope0_reason, 7), $cg__input_show = _client_guard($scope0_reason, 5), $fg__input_mode = _filled_guard($scope0_reason, 8);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id(), $ui__input_a__OR__input_mode = _unfilled_if($scope0_reason, 3), $ui__input_mode = _unfilled_if($scope0_reason, 8), $fg__input_b = _filled_guard($scope0_reason, 6);
			const $if_content__c__closures = /* @__PURE__ */ new Set();
			const c = input.b + "!";
			$fg__input_b && $ui__input_a__OR__input_mode && _patch_write($scope1_id, "xc", c, !$sg__input_b);
			_html(`<p>${_text_mark($scope1_id, "a", input.a + c, 1, $scope0_reason, 1)}</p>`);
			const frag = { content: _content_resume("b0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(`<em>${_text_mark($scope2_id, "a", c, 1, $scope0_reason, 6)}</em>`);
				_unfilled_if($scope0_reason, 6) && _patch_subscribe($scope2_id, "b1", $cg__input_b);
				_subscribe(_unfilled_if($scope0_reason, 6) && $if_content__c__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope1_id) }), $cg__input_b && "b1");
			}, $scope1_id) };
			_html("<section>");
			_attr_content("b", $scope1_id, input.mode ? frag.content : null, 0, 1, $scope0_reason, 8);
			_html(`</section>${_el_mark($scope1_id, "b", _updates_from($scope0_reason, 8))}`);
			$ui__input_mode && _patch_write($scope1_id, "wf", frag.content, 1);
			$fg__input_b && _patch_subscribers($scope1_id, "b2", "c");
			$cg__input_b && _patch_render($scope1_id, "b3");
			_patch_render($scope1_id, "b4", [_filled_guard($scope0_reason, 7) && ">f", $fg__input_b && "c"], $scope0_reason, 1);
			_client_guard($scope0_reason, 8) && _patch_render($scope1_id, "b5");
			_scope($scope1_id, {
				c: ($ui__input_a__OR__input_mode || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 6)) && c,
				f: $ui__input_mode && frag.content,
				_: _write_if($scope0_reason, 4) && _scope_with_id($scope0_id),
				k: _write_if($scope0_reason, 6) && $if_content__c__closures
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b6"], $scope0_reason, 5);
	$fg__input_b2 && $cg__input_show && _patch_render($scope0_id, "b3", "e");
	$fg__input_a && $cg__input_show && _patch_render($scope0_id, "b7", "f");
	$fg__input_mode && $cg__input_show && _patch_render($scope0_id, "b8", "g");
	_scope($scope0_id, {
		e: ($ui__input_show || _unfilled_if($scope0_reason, 6)) && input.b,
		f: ($ui__input_show__OR__input_b || _unfilled_if($scope0_reason, 1)) && input.a,
		g: ($ui__input_show || _unfilled_if($scope0_reason, 8)) && input.mode
	}) || ($fg__input_b2 && $ui__input_show && _patch_write($scope0_id, "xe", input.b, !$sg__input_b), $fg__input_a && $ui__input_show__OR__input_b && _patch_write($scope0_id, "xf", input.a, !_server_guard($scope0_reason, 7)), $fg__input_mode && $ui__input_show && _patch_write($scope0_id, "xg", input.mode, !_server_guard($scope0_reason, 8)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)("b%c", "b%c")};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=m>m</button>`)($template, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_x__OR__input_show = _updates_from($scope0_reason, 0), $uf__input_show = _updates_from($scope0_reason, 3), $uf__input_x = _updates_from($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let n = 0;
	let m = false;
	_set_scope_reason(165624 | ($uf__input_x__OR__input_show << 1 | $uf__input_show << 11 | $uf__input_x << 13));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		a: n,
		b: input.x,
		show: input.show,
		mode: m
	});
	_patch_child_end();
	_set_scope_reason(133088 | ($uf__input_x__OR__input_show << 1 | _updates_from($scope0_reason, 1) << 3 | $uf__input_show << 11 | $uf__input_x << 13 | _updates_from($scope0_reason, 4) << 15));
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	child_default({
		a: input.y,
		b: input.x,
		show: input.show,
		mode: m
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_mark($scope0_id, "c")}<button class=m>m</button>${_el_mark($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		j: n,
		k: m,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);

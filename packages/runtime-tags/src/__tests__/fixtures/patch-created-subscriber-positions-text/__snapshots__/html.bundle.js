// tags/panel.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b2: "b2; b ;<div></div><span></span>",
	b1: "b1;D ;<em> </em>",
	b3: "b3;D ;<i> </i>"
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_b = _client_guard($scope0_reason, 5), $wg__input_show = _write_guard($scope0_reason, 4), $wi__input_show__OR__input_b__OR__input_a = _write_if($scope0_reason, 3), $fg__input_b = _filled_guard($scope0_reason, 5), $cg__input_show = _client_guard($scope0_reason, 4), $fg__input_a = _filled_guard($scope0_reason, 6), $wi__input_b = _write_if($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_b__closures = /* @__PURE__ */ new Set();
	const $input_a__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html(`<em>${_text_mark($scope2_id, "a", input.b, 1, $scope0_reason, 5)}</em>`);
					_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope2_id, "b0", $cg__input_b);
					_subscribe(_unfilled_if($scope0_reason, 5) && $input_b__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) }), $cg__input_b && "b0");
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_show, 1, 0, 0, ["b1"], $scope0_reason, 4);
			_html(`</div>${_el_mark($scope1_id, "a", $wg__input_show)}<span>`);
			_if(() => {
				if (input.show) {
					const $scope3_id = _scope_id();
					_html(`<i>${_text_mark($scope3_id, "a", input.a + ":" + input.b, 1, $scope0_reason, 2)}</i>`);
					_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope3_id, "b4");
					_unfilled_if($scope0_reason, 6) && _patch_subscribe($scope3_id, "b5");
					_patch_render($scope3_id, "b6", [_filled_guard($scope0_reason, 5) && ">>e", _filled_guard($scope0_reason, 6) && ">>f"], $scope0_reason, 2);
					_subscribe(_unfilled_if($scope0_reason, 6) && $input_a__closures, _subscribe(_unfilled_if($scope0_reason, 5) && $input_b__closures, _scope($scope3_id, {
						_: $wi__input_show__OR__input_b__OR__input_a && _scope_with_id($scope1_id),
						Ch: $wi__input_b && 1
					}), $cg__input_b && "b4"), _client_guard($scope0_reason, 6) && "b5");
					return 0;
				}
			}, $scope1_id, "b", 1, $wg__input_show, 1, 0, 0, ["b3"], $scope0_reason, 4);
			_html(`</span>${_el_mark($scope1_id, "b", $wg__input_show)}`);
			$cg__input_show && _patch_render($scope1_id, "b7");
			$wi__input_show__OR__input_b__OR__input_a && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b2"], $scope0_reason, 4);
	$fg__input_b && $cg__input_show && _patch_subscribers($scope0_id, "b8", "e");
	$fg__input_a && $cg__input_show && _patch_subscribers($scope0_id, "b9", "f");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 5)) && input.b,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.a,
		h: $wi__input_b && (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && $input_b__closures,
		i: _write_if($scope0_reason, 6) && (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && $input_a__closures
	}) || ($fg__input_b && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.b, !_server_guard($scope0_reason, 5)), $fg__input_a && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.a, !_server_guard($scope0_reason, 6)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)("b%c")};${((_w0) => `<!>${_w0}<button>+</button>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(8696 | (_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 2) << 9 | _updates_from($scope0_reason, 1) << 11));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	panel_default({
		a: count,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: count,
		a: _existing_scope($childScope)
	});
}, 1);

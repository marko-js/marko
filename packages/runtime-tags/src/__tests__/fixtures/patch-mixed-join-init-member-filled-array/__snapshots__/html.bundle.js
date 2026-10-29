// tags/panel.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b !;b%;<!><!><!>",
	b3: "b3; b ;<div></div><span></span>",
	b4: "b4;D ;<i> </i>",
	b2: "b2;D ;<em> </em>"
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_b = _client_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 5), $wi__input_b__OR__input_show__OR__input_a = _write_if($scope0_reason, 3), $cg__input_a = _client_guard($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 5), $wi__input_b = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $b__closures = /* @__PURE__ */ new Set();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const b = [input.b];
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_if(() => {
				if (input.show) {
					const $scope3_id = _scope_id();
					_html(`<em>${_text_resume($scope3_id, "a", JSON.stringify(b), 1, $scope0_reason, 4)}</em>`);
					_unfilled_if($scope0_reason, 4) && _patch_init($scope3_id, $cg__input_b ? "b0" : "b1");
					_subscribe(_unfilled_if($scope0_reason, 4) && $b__closures, _scope($scope3_id, {
						_: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id),
						Cj: $wi__input_b && 1
					}), $cg__input_b && "b1");
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_show, 1, 0, 0, ["b2"], $scope0_reason, 5);
			_html(`</div>${_el_resume($scope1_id, "a", $wg__input_show)}<span>`);
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html(`<i>${_text_resume($scope2_id, "a", input.a + ":" + JSON.stringify(b), 1, $scope0_reason, 1)}</i>`);
					(_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 1)) && _patch_init($scope2_id, "b5");
					(_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 1)) && _patch_init($scope2_id, "b6");
					_patch_join_init($scope2_id, "b7", $scope0_reason, 1, _filled_guard($scope0_reason, 6) && ">>f", _filled_guard($scope0_reason, 4) && ">>g");
					_subscribe(_unfilled_if($scope0_reason, 4) && $b__closures, _subscribe(_unfilled_if($scope0_reason, 6) && $input_a__closures, _scope($scope2_id, { _: $wi__input_b__OR__input_show__OR__input_a && _scope_with_id($scope1_id) }), $cg__input_a && "b5"), $cg__input_b && "b6");
					return 0;
				}
			}, $scope1_id, "b", 1, $wg__input_show, 1, 0, 0, ["b4"], $scope0_reason, 5);
			_html(`</span>${_el_resume($scope1_id, "b", $wg__input_show)}`);
			$cg__input_show && _patch_init($scope1_id, "b8");
			$wi__input_b__OR__input_show__OR__input_a && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b3"], $scope0_reason, 5);
	_filled_guard($scope0_reason, 6) && $cg__input_show ? _patch_fill($scope0_id, "vb11", input.a) : _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.a, !(_filled_guard($scope0_reason, 6) && $cg__input_b));
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 5)) && input.a,
		g: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 4)) && b,
		j: $wi__input_b && (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 1)) && $b__closures,
		i: _write_if($scope0_reason, 6) && (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 5)) && $input_a__closures
	}) || _filled_guard($scope0_reason, 4) && ($cg__input_show ? _patch_fill($scope0_id, "vb10", b) : $cg__input_a && _patch_fill($scope0_id, "vb9", b, !_server_guard($scope0_reason, 4)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&%b b`)("b%c")};${((_w0) => `<!>${_w0}<!><button>+</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(8696 | (_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 9 | _mask_group($scope0_reason, 2) << 11));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	panel_default({
		a: count,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	_if(() => {}, $scope0_id, "b");
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		h: count,
		a: _existing_scope($childScope)
	});
}, 1);

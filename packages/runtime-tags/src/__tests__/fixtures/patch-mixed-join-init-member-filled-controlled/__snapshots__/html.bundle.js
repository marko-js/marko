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
	const $scope0_reason = _scope_reason(), $cg__input_b__OR__input_bChange = _client_guard($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 7), $wi__input_b__OR__input_bChange__OR__input_show__OR__input_a = _write_if($scope0_reason, 4), $cg__input_a = _client_guard($scope0_reason, 8), $cg__input_show = _client_guard($scope0_reason, 7), $wi__input_b__OR__input_bChange = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $b__closures = /* @__PURE__ */ new Set();
	const $input_a__closures = /* @__PURE__ */ new Set();
	let b = input.b;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_if(() => {
				if (input.show) {
					const $scope3_id = _scope_id();
					_html(`<em>${_text_resume($scope3_id, "a", b, 1, $scope0_reason, 0)}</em>`);
					_unfilled_if($scope0_reason, 0) && _patch_init($scope3_id, $cg__input_b__OR__input_bChange ? "b0" : "b1");
					_subscribe(_unfilled_if($scope0_reason, 0) && $b__closures, _scope($scope3_id, {
						_: _write_if($scope0_reason, 2) && _scope_with_id($scope1_id),
						Cm: $wi__input_b__OR__input_bChange && 1
					}), $cg__input_b__OR__input_bChange && "b1");
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_show, 1, 0, 0, ["b2"], $scope0_reason, 7);
			_html(`</div>${_el_resume($scope1_id, "a", $wg__input_show)}<span>`);
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html(`<i>${_text_resume($scope2_id, "a", input.a + ":" + b, 1, $scope0_reason, 3)}</i>`);
					(_unfilled_if($scope0_reason, 8) || _unfilled_if($scope0_reason, 3)) && _patch_init($scope2_id, "b5");
					(_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && _patch_init($scope2_id, "b6");
					_patch_join_init($scope2_id, "b7", $scope0_reason, 3, _filled_guard($scope0_reason, 8) && ">>h", _filled_guard($scope0_reason, 0) && ">>i");
					_subscribe(_unfilled_if($scope0_reason, 0) && $b__closures, _subscribe(_unfilled_if($scope0_reason, 8) && $input_a__closures, _scope($scope2_id, { _: $wi__input_b__OR__input_bChange__OR__input_show__OR__input_a && _scope_with_id($scope1_id) }), $cg__input_a && "b5"), $cg__input_b__OR__input_bChange && "b6");
					return 0;
				}
			}, $scope1_id, "b", 1, $wg__input_show, 1, 0, 0, ["b4"], $scope0_reason, 7);
			_html(`</span>${_el_resume($scope1_id, "b", $wg__input_show)}`);
			$cg__input_show && _patch_init($scope1_id, "b8");
			$wi__input_b__OR__input_bChange__OR__input_show__OR__input_a && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b3"], $scope0_reason, 7);
	_filled_guard($scope0_reason, 8) && $cg__input_show ? _patch_fill($scope0_id, "vb13", input.a) : _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "xh", input.a, !(_filled_guard($scope0_reason, 8) && $cg__input_b__OR__input_bChange));
	$cg__input_b__OR__input_bChange && _patch_init($scope0_id, "b14");
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 5)) && input.b,
		e: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 6)) && input.bChange,
		h: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 7)) && input.a,
		i: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && b,
		m: $wi__input_b__OR__input_bChange && (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && $b__closures,
		l: _write_if($scope0_reason, 8) && (_unfilled_if($scope0_reason, 8) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 7)) && $input_a__closures
	}) || (_filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 6) && _patch_fill($scope0_id, "vb9", input.b, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 5) && _patch_fill($scope0_id, "vb10", input.bChange, !_server_guard($scope0_reason, 6)), _filled_guard($scope0_reason, 0) && ($cg__input_show ? _patch_fill($scope0_id, "vb12", b) : $cg__input_a && _patch_fill($scope0_id, "vb11", b, !_server_guard($scope0_reason, 0))));
	$wg__input_show || $wi__input_b__OR__input_bChange__OR__input_show__OR__input_a && _resume_branch($scope0_id);
});

// template.marko
const $setup = _shell_setup([[], ["a2"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&%b b`)("b%c")};${((_w0) => `<!>${_w0}<!><button>+</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(133016 | (_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 1) << 11 | _mask_group($scope0_reason, 2) << 15));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	panel_default({
		bChange: _resume(function() {}, "a0"),
		a: count,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	_if(() => {}, $scope0_id, "b");
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		h: count,
		a: _existing_scope($childScope)
	});
}, 1);

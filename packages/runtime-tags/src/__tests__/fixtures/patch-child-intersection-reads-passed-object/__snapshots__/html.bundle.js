// tags/panel.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b4: "b4; ;<span></span>",
	b3: "b3;D ;<i> </i>"
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_a__OR__input_b = _unfilled_if($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 4), $wi__input_show__OR__input_a__OR__input_b = _write_if($scope0_reason, 3), $ui__input_show__OR__input_b = _unfilled_if($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 4), $ui__input_show__OR__input_a = _unfilled_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_b__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<span>");
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html(`<i>${_text_mark($scope2_id, "a", input.a + ":" + JSON.stringify(input.b), 1, $scope0_reason, 2)}</i>`);
					_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope2_id, "b0");
					_unfilled_if($scope0_reason, 6) && _patch_subscribe($scope2_id, "b1");
					_patch_render($scope2_id, "b2", ((_filled_guard($scope0_reason, 5) ? " >>e" : "") + (_filled_guard($scope0_reason, 6) ? " >>f" : "")).slice(1), $scope0_reason, 2);
					_subscribe(_unfilled_if($scope0_reason, 6) && $input_b__closures, _subscribe(_unfilled_if($scope0_reason, 5) && $input_a__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_a__OR__input_b && _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 5) && "b0"), _client_guard($scope0_reason, 6) && "b1");
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_show, 1, 0, 0, ["b3"], $scope0_reason, 4);
			_html(`</span>${_el_mark($scope1_id, "a", $wg__input_show)}`);
			$cg__input_show && _patch_render($scope1_id, "b5");
			$wi__input_show__OR__input_a__OR__input_b && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b4"], $scope0_reason, 4);
	_scope($scope0_id, {
		e: ($ui__input_show__OR__input_b || $ui__input_a__OR__input_b) && input.a,
		f: ($ui__input_show__OR__input_a || $ui__input_a__OR__input_b) && input.b,
		h: _write_if($scope0_reason, 5) && (_unfilled_if($scope0_reason, 5) || $ui__input_a__OR__input_b || $ui__input_show) && $input_a__closures,
		i: _write_if($scope0_reason, 6) && (_unfilled_if($scope0_reason, 6) || $ui__input_a__OR__input_b || $ui__input_show) && $input_b__closures
	}) || (_filled_guard($scope0_reason, 5) && $ui__input_show__OR__input_b && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 5)) && $cg__input_show && _patch_subscribers($scope0_id, "b6", "e"), _filled_guard($scope0_reason, 6) && $ui__input_show__OR__input_a && _patch_write($scope0_id, "xf", input.b, !_server_guard($scope0_reason, 6)) && $cg__input_show && _patch_subscribers($scope0_id, "b7", "f"));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)("b%c")};${((_w0) => `<!>${_w0}<button>+</button>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(2534 | (_updates_from($scope0_reason, 0) << 3 | _updates_from($scope0_reason, 2) << 9 | _updates_from($scope0_reason, 1) << 13));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	panel_default({
		a: count,
		b: { value: input.x },
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

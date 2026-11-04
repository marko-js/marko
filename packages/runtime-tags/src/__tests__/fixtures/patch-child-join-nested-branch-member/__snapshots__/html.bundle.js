// tags/panel.marko
const $template = "<!><!><p> </p>";
const $walks = "b%bD l";
const $setup$1 = [[], []];
_shells({
	b: "b;b%bD ;<!><!><p> </p>",
	b2: "b2; ;<div></div>",
	b1: "b1;D ;<em> </em>"
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_b = _client_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 3), $wi__input_show__OR__input_b = _write_if($scope0_reason, 0), $ui__input_b__OR__input_a = _unfilled_if($scope0_reason, 2), $ui__input_b = _unfilled_if($scope0_reason, 4), $ui__input_show__OR__input_a = _unfilled_if($scope0_reason, 1), $fg__input_b = _filled_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 3), $fg__input_a = _filled_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_b__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html(`<em>${_text_mark($scope2_id, "a", input.b, 1, $scope0_reason, 4)}</em>`);
					_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope2_id, "b0", $cg__input_b);
					_subscribe(_unfilled_if($scope0_reason, 4) && $input_b__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_b && _scope_with_id($scope1_id) }), $cg__input_b && "b0");
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_show, 1, 0, 0, ["b1"], $scope0_reason, 3);
			_html(`</div>${_el_mark($scope1_id, "a", $wg__input_show)}`);
			$cg__input_show && _patch_render($scope1_id, "b3");
			$wi__input_show__OR__input_b && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b2"], $scope0_reason, 3);
	_html(`<p>${_text_mark($scope0_id, "b", input.a + ":" + input.b, 1, $scope0_reason, 2)}</p>`);
	$fg__input_b && $cg__input_show && _patch_subscribers($scope0_id, "b4", "f");
	_patch_render($scope0_id, "b5", (($fg__input_b ? " f" : "") + ($fg__input_a ? " g" : "")).slice(1), $scope0_reason, 2);
	_scope($scope0_id, {
		f: ($ui__input_show__OR__input_a || $ui__input_b__OR__input_a || $ui__input_b) && input.b,
		g: ($ui__input_b || $ui__input_b__OR__input_a) && input.a,
		j: _write_if($scope0_reason, 4) && ($ui__input_b || $ui__input_b__OR__input_a || _unfilled_if($scope0_reason, 3)) && $input_b__closures
	}) || ($fg__input_b && $ui__input_show__OR__input_a && _patch_write($scope0_id, "xf", input.b, !_server_guard($scope0_reason, 4)), $fg__input_a && $ui__input_b && _patch_write($scope0_id, "xg", input.a, !_server_guard($scope0_reason, 5)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)($walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(2168 | (_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 2) << 7 | _updates_from($scope0_reason, 1) << 9));
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

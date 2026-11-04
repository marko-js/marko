// tags/panel.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b2: "b2;D l ;<p> </p><div></div>",
	b1: "b1;D ;<em> </em>"
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_show__OR__input_n = _write_if($scope0_reason, 0), $cg__input_show = _client_guard($scope0_reason, 1), $fg__input_n = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_n__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_mark($scope1_id, "a", input.n, 1, $scope0_reason, 2)}</p><div>`);
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html(`<em>${_text_mark($scope2_id, "a", input.n, 1, $scope0_reason, 2)}</em>`);
					_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "b0", $cg__input_n);
					_subscribe(_unfilled_if($scope0_reason, 2) && $input_n__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_n && _scope_with_id($scope1_id) }), $cg__input_n && "b0");
					return 0;
				}
			}, $scope1_id, "b", 1, $wg__input_show, 1, 0, 0, ["b1"], $scope0_reason, 1);
			_html(`</div>${_el_mark($scope1_id, "b", $wg__input_show)}`);
			$cg__input_show && _patch_render($scope1_id, "b3");
			$cg__input_n && _patch_render($scope1_id, "b4");
			_scope($scope1_id, { _: $wi__input_show__OR__input_n && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b2"], $scope0_reason, 1);
	$fg__input_n && $cg__input_show && _patch_subscribers($scope0_id, "b5", "e");
	$fg__input_n && $cg__input_show && _patch_render($scope0_id, "b4", "e");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.n,
		g: _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && $input_n__closures
	}) || $fg__input_n && $cg__input_show && _patch_write($scope0_id, "xe", input.n, !_server_guard($scope0_reason, 2));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)("b%c")};${((_w0) => `<!>${_w0}<button>+</button>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_x = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(102 | _updates_from($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	panel_default({
		n: count + input.x,
		show: input.show
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_patch_render($scope0_id, "a1", $fg__input_x && "e");
	_scope($scope0_id, {
		e: input.x,
		g: count,
		a: _existing_scope($childScope)
	}) || $fg__input_x && _patch_write($scope0_id, "xe", input.x, !_server_guard($scope0_reason, 0));
}, 1);

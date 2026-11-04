// tags/child.marko
const $template = "<span> </span>";
const $setup = [[], []];
_shells({ b: "b;D ;<span> </span>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_fn = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 1)}</span>`);
	_script($scope0_id, "b0", 1, $fg__input_fn);
	_scope($scope0_id, { d: input.fn }) || $fg__input_fn && _patch_write($scope0_id, "xd", input.fn, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a: "a;D%bD ;<main><!><p> </p></main>",
	a4: `a4${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show__OR__input_pick = _client_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 2), $wi__input_show = _write_if($scope0_reason, 2), $ui__input_pick = _unfilled_if($scope0_reason, 4), $ui__input_show__OR__input_pick = _unfilled_if($scope0_reason, 0), $fg__input_x = _filled_guard($scope0_reason, 3), $fg__input_pick = _filled_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let flag = 0;
	const fa = _resume(function() {
		flag = 1;
		const m = document.querySelector("main");
		m.dataset.a = String(+(m.dataset.a || 0) + 1);
	}, "a0", $scope0_id, 1);
	const fb = _resume(function() {
		flag = 2;
		const m = document.querySelector("main");
		m.dataset.b = String(+(m.dataset.b || 0) + 1);
	}, "a1", $scope0_id, 1);
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 4) << 1 | _updates_from($scope0_reason, 3) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			child_default({
				label: input.x,
				fn: input.pick ? fa : fb
			});
			_patch_child_end();
			!$cg__input_show__OR__input_pick && _unfilled_if() && _patch_write($scope0_id, "wi", fa);
			!$cg__input_show__OR__input_pick && _unfilled_if() && _patch_write($scope0_id, "wj", fb);
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "a2");
			_client_guard($scope0_reason, 4) && _patch_render($scope1_id, "a3");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["a4"], $scope0_reason, 2);
	_html(`<p>${_text_mark($scope0_id, "b", flag)}</p></main>`);
	$fg__input_x && $cg__input_show && _patch_render($scope0_id, "a2", "f");
	$fg__input_pick && $cg__input_show && _patch_render($scope0_id, "a5", "g");
	_scope($scope0_id, {
		f: $wi__input_show && ($ui__input_show || _unfilled_if($scope0_reason, 3)) && input.x,
		g: $wi__input_show && ($ui__input_show || $ui__input_pick) && input.pick,
		i: ($ui__input_show__OR__input_pick || $ui__input_pick) && fa,
		j: ($ui__input_show__OR__input_pick || $ui__input_pick) && fb
	}) || ($fg__input_x && $ui__input_show && _patch_write($scope0_id, "xf", input.x, !_server_guard($scope0_reason, 3)), $fg__input_pick && $ui__input_show && _patch_write($scope0_id, "xg", input.pick, !_server_guard($scope0_reason, 4)));
}, 1);

// tags/label-view.marko
const $template = "<!><!><span>x</span>";
const $walks = "b%b b";
const $setup$1 = [[], ["b1"]];
_shells({ b: "b !b1;b%b ;<!><!><span>x</span>" });
var label_view_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_flag__OR__input_a__OR__input_b = _write_guard($scope0_reason, 3), $ui__input_flag__OR__input_a__OR__input_b = _unfilled_if($scope0_reason, 3), $fg__input_flag__OR__input_a__OR__input_b = _filled_guard($scope0_reason, 3), $fg__input_flag = _filled_guard($scope0_reason, 4), $fg__input_a = _filled_guard($scope0_reason, 5), $fg__input_b = _filled_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	let open = true;
	const get = input.flag ? input.a : input.b;
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<p>${_text_mark($scope1_id, "a", get(), $wg__input_flag__OR__input_a__OR__input_b)}</p>`);
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "b0");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<span>x</span>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "b1");
	$fg__input_flag__OR__input_a__OR__input_b && _patch_render($scope0_id, "b0", "j");
	_patch_render($scope0_id, "b2", (($fg__input_flag ? " e" : "") + ($fg__input_a ? " f" : "") + ($fg__input_b ? " g" : "")).slice(1), $scope0_reason, 3);
	_patch_fill($scope0_id, "vb3", open, 1);
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 2) && $ui__input_flag__OR__input_a__OR__input_b && input.flag,
		f: _write_if($scope0_reason, 1) && $ui__input_flag__OR__input_a__OR__input_b && input.a,
		g: _write_if($scope0_reason, 0) && $ui__input_flag__OR__input_a__OR__input_b && input.b,
		i: open,
		j: get
	}) || ($fg__input_flag && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xe", input.flag, !_server_guard($scope0_reason, 4)), $fg__input_a && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.a, !_server_guard($scope0_reason, 5)), $fg__input_b && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xg", input.b, !_server_guard($scope0_reason, 6)), $fg__input_flag__OR__input_a__OR__input_b && _patch_write($scope0_id, "xj", get, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $setup = _shell_setup([[], ["a2"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)($walks)};${((_w0) => `<!>${_w0}<button>toggle</button>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_title = _updates_from($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "xe", input.title, !$sg__input_title);
	let upper = false;
	const up = _bind_resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "a1", $scope0_id);
	_set_scope_reason(6630 | ($uf__input_title << 3 | $uf__input_title << 13));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	label_view_default({
		a: low,
		b: low,
		flag: true
	});
	_patch_child_end();
	_html(`<button>toggle</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_patch_render($scope0_id, "a3", (($fg__input_title ? " g" : "") + ($fg__input_title ? " e" : "") + ($fg__input_title ? " h" : "")).slice(1));
	_scope($scope0_id, {
		e: input.title,
		f: upper,
		g: up,
		h: low,
		a: _existing_scope($childScope)
	}) || ($fg__input_title && _patch_write($scope0_id, "xg", up, !$sg__input_title), $fg__input_title && _patch_write($scope0_id, "xh", low, !$sg__input_title));
}, 1);

// tags/label-view.marko
const $Show_content__walks = " b";
const $Show_content__template = "<output></output>";
const $template = $Show_content__template;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($Show_content__walks);
const $setup$1 = [[], []];
_shells({
	b0: `b0;${$Show_content__walks};${$Show_content__template}`,
	b: `b;${((_w0) => `/${_w0}&`)($Show_content__walks)};${$Show_content__template}`
});
var label_view_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Show = { content: _content("b0", ({ a, b, flag }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $ui__a__OR__b__OR__flag = _unfilled_if($scope1_reason, 3), $ui__b__OR__flag = _unfilled_if($scope1_reason, 2), $ui__a__OR__flag = _unfilled_if($scope1_reason, 1), $ui__a__OR__b = _unfilled_if($scope1_reason, 0), $fg__a__OR__b__OR__flag = _filled_guard($scope1_reason, 3), $fg__a = _filled_guard($scope1_reason, 4), $fg__b = _filled_guard($scope1_reason, 5), $fg__flag = _filled_guard($scope1_reason, 6);
		const get = flag ? a : b;
		_html(`<output></output>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "b1", 1, $fg__a__OR__b__OR__flag);
		_patch_render($scope1_id, "b2", (($fg__a ? " d" : "") + ($fg__b ? " e" : "") + ($fg__flag ? " f" : "")).slice(1), $scope1_reason, 3);
		_scope($scope1_id, {
			d: ($ui__b__OR__flag || $ui__a__OR__b__OR__flag) && a,
			e: ($ui__a__OR__flag || $ui__a__OR__b__OR__flag) && b,
			f: ($ui__a__OR__b || $ui__a__OR__b__OR__flag) && flag,
			h: get
		}) || ($fg__a && $ui__b__OR__flag && _patch_write($scope1_id, "xd", a, !_server_guard($scope1_reason, 4)), $fg__b && $ui__a__OR__flag && _patch_write($scope1_id, "xe", b, !_server_guard($scope1_reason, 5)), $fg__flag && $ui__a__OR__b && _patch_write($scope1_id, "xf", flag, !_server_guard($scope1_reason, 6)), $fg__a__OR__b__OR__flag && _patch_write($scope1_id, "xh", get, !_server_guard($scope1_reason, 3)));
	}, $scope0_id, 0) };
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5 | _updates_from($scope0_reason, 3) << 7 | _updates_from($scope0_reason, 4) << 9 | _updates_from($scope0_reason, 5) << 11 | _updates_from($scope0_reason, 6) << 13);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Show.content({
		a: input.a,
		b: input.b,
		flag: input.flag
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
const $setup = _shell_setup([[], ["a2"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)($walks)};${((_w0) => `${_w0}<button>toggle</button>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_title = _updates_from($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "xe", input.title, !$sg__input_title);
	let upper = false;
	const up = _bind_resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "a1", $scope0_id);
	_set_scope_reason(1950 | ($uf__input_title << 5 | $uf__input_title << 11));
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

// tags/label-view.marko
const $Show_content__walks = " b";
const $Show_content__template = "<output></output>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Show_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Show_content__walks);
const $setup$1 = [[], []];
_shells({
	b0: /*@__PURE__*/ ((_w0, _w1) => `b0;${_w0};${_w1}`)($Show_content__walks, $Show_content__template),
	b: /*@__PURE__*/ (() => `b;${((_w0) => `b/${_w0}&b`)($Show_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Show_content__template)}`)()
});
var label_view_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Show = { content: _content_elide("b0", ({ a, b, flag }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $cg__b__OR__flag = _client_guard($scope1_reason, 2), $cg__a__OR__flag = _client_guard($scope1_reason, 1), $cg__a__OR__b = _client_guard($scope1_reason, 0), $scope1_page = _page_render();
		const get = flag ? a : b;
		_html(`<output></output>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b1");
		_filled_guard($scope1_reason, 3) && _patch_effect($scope1_id, _client_guard($scope1_reason, 3) ? "hb1" : "eb1", "h");
		$cg__b__OR__flag && _patch_write($scope1_id, "xd", a, !(_filled_guard($scope1_reason, 4) && $cg__b__OR__flag));
		$cg__a__OR__flag && _patch_write($scope1_id, "xe", b, !(_filled_guard($scope1_reason, 5) && $cg__a__OR__flag));
		$cg__a__OR__b && _patch_write($scope1_id, "xf", flag, !(_filled_guard($scope1_reason, 6) && $cg__a__OR__b));
		_patch_join_init($scope1_id, "b2", $scope1_reason, 3, _filled_guard($scope1_reason, 4) && "d", _filled_guard($scope1_reason, 5) && "e", _filled_guard($scope1_reason, 6) && "f");
		$scope1_page ? _scope($scope1_id, {
			d: (_unfilled_if($scope1_reason, 2) || _unfilled_if($scope1_reason, 3)) && a,
			e: (_unfilled_if($scope1_reason, 1) || _unfilled_if($scope1_reason, 3)) && b,
			f: (_unfilled_if($scope1_reason, 0) || _unfilled_if($scope1_reason, 3)) && flag,
			h: get
		}) : _filled_guard($scope1_reason, 3) && _patch_write($scope1_id, "xh", get, !_server_guard($scope1_reason, 3));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5 | _mask_group($scope0_reason, 3) << 7 | _mask_group($scope0_reason, 4) << 9 | _mask_group($scope0_reason, 5) << 11 | _mask_group($scope0_reason, 6) << 13);
	const $childScope = _patch_child($scope0_id, "a", 0);
	Show.content({
		a: input.a,
		b: input.b,
		flag: input.flag
	});
	_patch_child_end();
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
const $setup = _shell_setup([[], ["a2"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)($walks)};${((_w0) => `<!>${_w0}<button>toggle</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _server_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.title, !$sg__input_title);
	let upper = false;
	const up = _bind_resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "a1", $scope0_id);
	_set_scope_reason(1950 | (_mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 0) << 11));
	const $childScope = _patch_child($scope0_id, "a", 0);
	label_view_default({
		a: low,
		b: low,
		flag: true
	});
	_patch_child_end();
	_html(`<button>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_patch_effect($scope0_id, "ia3", _filled_guard($scope0_reason, 0) && "g", _filled_guard($scope0_reason, 0) && "h");
	$scope0_page ? _scope($scope0_id, {
		e: input.title,
		f: upper,
		g: up,
		h: low,
		a: _existing_scope($childScope)
	}) : (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xg", up, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xh", low, !$sg__input_title));
}, 1);

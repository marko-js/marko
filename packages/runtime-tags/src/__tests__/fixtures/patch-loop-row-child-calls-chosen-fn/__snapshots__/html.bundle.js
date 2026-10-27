// tags/label-view.marko
const $template = "<output></output>";
const $setup = [[], []];
_shells({ b: "b; ;<output></output>" });
var label_view_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "hb0" : "eb0", "c");
	$scope0_page ? _scope($scope0_id, { c: input }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xc", input, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a: "a;b%;<!><!><button>noop</button>",
	a3: /*@__PURE__*/ ((_w0) => `a3${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 2), $scope0_page = _page_render(), $sg__input_title = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xd", input.title, !$sg__input_title);
	const up = _bind_resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "a1", $scope0_id);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 2) && _patch_write($scope1_id, "xd", item?.upper, !_server_guard($scope0_reason, 2));
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _patch_child($scope1_id, "a", 0);
		label_view_default(_patch_live($childScope, { get: item.upper ? up : low }, $scope1_id, ">f >g d"));
		_patch_child_end();
		(_filled_guard($scope0_reason, 1) && !$cg__input_items || _filled_guard($scope0_reason, 1) && !$cg__input_items || _filled_guard($scope0_reason, 2)) && _patch_join_init($scope1_id, "a2", $scope0_reason, 0, _filled_guard($scope0_reason, 1) && ">f", _filled_guard($scope0_reason, 1) && ">g", _filled_guard($scope0_reason, 2) && "d");
		$scope0_page && _scope($scope1_id, {
			d: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && item?.upper,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, "id", $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a3", $scope0_reason, 2);
	_html("<button>noop</button>");
	$scope0_page ? _scope($scope0_id, {
		d: input.title,
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && up,
		g: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && low
	}) : (_filled_guard($scope0_reason, 1) && ($cg__input_items ? _patch_fill($scope0_id, "va4", up) : _patch_write($scope0_id, "xf", up, !$sg__input_title)), _filled_guard($scope0_reason, 1) && ($cg__input_items ? _patch_fill($scope0_id, "va5", low) : _patch_write($scope0_id, "xg", low, !$sg__input_title)));
}, 1);

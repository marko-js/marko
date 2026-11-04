// tags/label-view.marko
const $template = "<output></output>";
const $setup = [[], []];
_shells({ b: "b; ;<output></output>" });
var label_view_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0", 1, $fg__input);
	_scope($scope0_id, { c: input }) || $fg__input && _patch_write($scope0_id, "xc", input, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a: "a;b%;<!><!><button>noop</button>",
	a3: `a3${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b")};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_items = _unfilled_if($scope0_reason, 2), $ui__input_title__OR__input_items = _unfilled_if($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 1), $fg__input_title2 = _filled_guard($scope0_reason, 1), $cg__input_items = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	$fg__input_title2 && _patch_write($scope0_id, "xd", input.title, !$sg__input_title);
	const up = _bind_resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "a1", $scope0_id);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id(), $ui__input_title = _unfilled_if($scope0_reason, 1), $fg__input_title = _filled_guard($scope0_reason, 1), $fg__input_items = _filled_guard($scope0_reason, 2);
		$fg__input_items && $ui__input_title && _patch_write($scope1_id, "xd", item?.upper, !_server_guard($scope0_reason, 2));
		_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		label_view_default({ get: item.upper ? up : low });
		_patch_child_end();
		_patch_render($scope1_id, "a2", (($fg__input_title ? " >f" : "") + ($fg__input_title ? " >d" : "") + ($fg__input_title ? " >g" : "") + ($fg__input_items ? " d" : "")).slice(1), $scope0_reason, 0);
		_scope($scope1_id, {
			d: ($ui__input_title || _unfilled_if($scope0_reason, 0)) && item?.upper,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, "id", $scope0_id, "a", 1, 1, 1, 0, 0, "a3", $scope0_reason, 2);
	_html("<button>noop</button>");
	$fg__input_title2 && $cg__input_items && _patch_render($scope0_id, "a4", "f d");
	$fg__input_title2 && $cg__input_items && _patch_render($scope0_id, "a5", "g d");
	_scope($scope0_id, {
		d: input.title,
		f: ($ui__input_items || $ui__input_title__OR__input_items) && up,
		g: ($ui__input_items || $ui__input_title__OR__input_items) && low
	}) || ($fg__input_title2 && $ui__input_items && _patch_write($scope0_id, "xf", up, !$sg__input_title), $fg__input_title2 && $ui__input_items && _patch_write($scope0_id, "xg", low, !$sg__input_title));
}, 1);

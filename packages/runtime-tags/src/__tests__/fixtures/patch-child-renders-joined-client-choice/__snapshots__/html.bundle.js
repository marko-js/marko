// tags/label-view.marko
const $template = "<p> </p>";
const $setup$1 = [[], []];
_shells({ b: "b !;D ;<p> </p>" });
var label_view_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const get = input.flag ? input.a : input.b;
	_html(`<p>${_patch_text($scope0_id, "a", get(), void 0, $scope0_reason, 3)}</p>`);
	_client_guard($scope0_reason, 3) && _patch_init($scope0_id, "b3");
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.flag,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.a,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.b
	}) : (_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "vb0", input.flag, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb1", input.a, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb2", input.b, !_server_guard($scope0_reason, 6)));
});

// template.marko
const $setup = _shell_setup([[], ["a3"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)("D l")};${((_w0) => `${_w0}<button>toggle</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _server_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.title, !$sg__input_title);
	let upper = false;
	const up = _bind_resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "a1", $scope0_id);
	_set_scope_reason(6630);
	const $childScope = _patch_child($scope0_id, "a", 0);
	label_view_default({
		a: low,
		b: _resume(() => "x", "a2"),
		flag: true
	});
	_patch_child_end();
	_html(`<button>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	_patch_effect($scope0_id, "ia4", _filled_guard($scope0_reason, 0) && "g", _filled_guard($scope0_reason, 0) && "h");
	$scope0_page ? _scope($scope0_id, {
		e: input.title,
		f: upper,
		g: up,
		h: low,
		a: _existing_scope($childScope)
	}) : (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xg", up, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xh", low, !$sg__input_title));
}, 1);

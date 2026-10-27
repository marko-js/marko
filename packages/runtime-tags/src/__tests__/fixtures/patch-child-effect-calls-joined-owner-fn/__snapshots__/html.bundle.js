// tags/label-view.marko
const $template = "<output></output>";
const $setup$1 = [[], []];
_shells({ b: "b !; ;<output></output>" });
var label_view_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const get = input.flag ? input.a : input.b;
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0", 1, _filled_guard($scope0_reason, 3), "h");
	_client_guard($scope0_reason, 3) && _patch_init($scope0_id, "b4");
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.flag,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.a,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.b,
		h: get
	}) || (_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "vb1", input.flag, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb2", input.a, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb3", input.b, !_server_guard($scope0_reason, 6)), _filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "xh", get, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $setup = _shell_setup([[], ["a2"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)(" b")};${((_w0) => `${_w0}<button>more</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.title, !_server_guard($scope0_reason, 0));
	let n = 0;
	const low = _bind_resume(() => "l" + input.title, "a0", $scope0_id);
	_set_scope_reason(482 | (_mask_group($scope0_reason, 0) << 3 | ($scope0_page ? 1 : 0) << 11 | _mask_group($scope0_reason, 0) << 13));
	const $childScope = _patch_child($scope0_id, "a", 0);
	label_view_default({
		a: _resume(() => "x0", "a1", $scope0_id),
		b: low,
		flag: false
	});
	_patch_child_end();
	_html(`<button>more</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		e: input.title,
		f: n,
		a: _existing_scope($childScope)
	});
}, 1);

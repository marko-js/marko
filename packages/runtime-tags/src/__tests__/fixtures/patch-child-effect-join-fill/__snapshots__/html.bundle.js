// tags/child.marko
const $template = "<p> </p><div></div>";
const $walks = "D l b";
_shells({ b: "b !;D l ;<p> </p><div></div>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "a", input.a + input.b, void 0, $scope0_reason, 0)}</p><div></div>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b0", 1, 1);
	_server_guard($scope0_reason, 1) && _patch_effect($scope0_id, "eb0", "e");
	_patch_write($scope0_id, "wf", input.b, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b3");
	$scope0_page ? _scope($scope0_id, {
		e: input.a,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.b
	}) : (_filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 2) ? _patch_value($scope0_id, "vb1", input.a, !_server_guard($scope0_reason, 1)) : _patch_write($scope0_id, "we", input.a, !_server_guard($scope0_reason, 1))), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "vb2", input.b, !_server_guard($scope0_reason, 2)));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0) => `/${_w0}& b`)($walks)};${((_w0) => `${_w0}<button>+</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(38 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "a");
	child_default({
		a: input.a,
		b: n
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", n, 1);
	$scope0_page && _scope($scope0_id, {
		f: n,
		a: _existing_scope($childScope)
	});
}, 1);

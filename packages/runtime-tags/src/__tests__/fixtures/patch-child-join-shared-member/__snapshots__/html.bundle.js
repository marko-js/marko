// tags/row.marko
const $template = "<p> </p><em> </em>";
const $walks = "D lD l";
_shells({ b: "b;D lD ;<p> </p><em> </em>" });
var row_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "a", input.a + input.b, void 0, $scope0_reason, 0)}</p><em>${_patch_text($scope0_id, "b", input.y + input.b, void 0, $scope0_reason, 2)}</em>`);
	_patch_write($scope0_id, "we", input.a, !(_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 4)));
	_patch_write($scope0_id, "wf", input.b, !(_filled_guard($scope0_reason, 4) && (_client_guard($scope0_reason, 3) || _client_guard($scope0_reason, 5))));
	_patch_write($scope0_id, "wh", input.y, !(_filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 4)));
	_patch_join_init($scope0_id, "b0", $scope0_reason, 0);
	_patch_join_init($scope0_id, "b1", $scope0_reason, 2);
	$scope0_page && _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && input.a,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.b,
		h: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 2)) && input.y
	});
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0, _w1, _w2) => `/${_w0}&/${_w1}&/${_w2}& b`)($walks, $walks, $walks)};${((_w0, _w1, _w2) => `${_w0}${_w1}${_w2}<button>+</button>`)($template, $template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(762 | _mask_group($scope0_reason, 1) << 11);
	const $childScope = _patch_child($scope0_id, "a");
	row_default({
		a: n,
		b: n,
		y: input.y
	});
	_set_scope_reason(158 | (_mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 2) << 9 | _mask_group($scope0_reason, 1) << 11));
	const $childScope2 = _patch_child($scope0_id, "b");
	row_default({
		a: n,
		b: input.x,
		y: input.y
	});
	_set_scope_reason(2286 | _mask_group($scope0_reason, 2) << 9);
	const $childScope3 = _patch_child($scope0_id, "c");
	row_default({
		a: n,
		b: input.x,
		y: n
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", n, 1);
	$scope0_page && _scope($scope0_id, {
		i: n,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2),
		c: _existing_scope($childScope3)
	});
}, 1);

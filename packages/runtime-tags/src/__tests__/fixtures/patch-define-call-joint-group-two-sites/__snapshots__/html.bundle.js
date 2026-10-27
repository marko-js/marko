// template.marko
const $Row_content__walks = "D lD l";
const $Row_content__template = "<p> </p><em> </em>";
_shells({ a: /*@__PURE__*/ (() => `a !a4;${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($Row_content__walks, $Row_content__walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($Row_content__template, $Row_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_y = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_y__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const Row = { content: _content("a0", ({ a, b }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $cg__b = _client_guard($scope1_reason, 2);
		_html(`<p>${_patch_text($scope1_id, "a", a + b, void 0, $scope1_reason, 0)}</p><em>${_patch_text($scope1_id, "b", input.y + b, void 0, (_mask_group($scope0_reason, 2) | _mask_group($scope1_reason, 2)) << 1, 0)}</em>`);
		$cg__b && _patch_write($scope1_id, "xe", a, !(_filled_guard($scope1_reason, 1) && $cg__b));
		_client_guard((_mask_group($scope0_reason, 2) | _mask_group($scope1_reason, 1)) << 1, 0) && _patch_write($scope1_id, "xf", b, !(_filled_guard($scope1_reason, 2) && (_client_guard($scope0_reason, 2) || _client_guard($scope1_reason, 1))));
		_patch_join_init($scope1_id, "a1", (_mask_group($scope0_reason, 2) | _mask_group($scope1_reason, 2)) << 1, 0, _filled_guard($scope0_reason, 2) && ">f", _filled_guard($scope1_reason, 2) && "f");
		_patch_join_init($scope1_id, "a2", $scope1_reason, 0, _filled_guard($scope1_reason, 1) && "e", _filled_guard($scope1_reason, 2) && "f");
		_subscribe(_unfilled_if((_mask_group($scope0_reason, 2) | _mask_group($scope1_reason, 2)) << 1, 0) && $wi__input_y && $input_y__closures, _scope($scope1_id, {
			e: (_unfilled_if($scope1_reason, 2) || _unfilled_if($scope1_reason, 0)) && a,
			f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope1_reason, 1) || _unfilled_if($scope1_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 0)) && b,
			_: ($wi__input_y || _write_if($scope1_reason, 2)) && _scope_with_id($scope0_id)
		}), _client_guard((_mask_group($scope0_reason, 2) | _mask_group($scope1_reason, 2)) << 1, 0) && "a3");
	}, $scope0_id) };
	_set_scope_reason(14 | _mask_group($scope0_reason, 3) << 5);
	const $childScope = _patch_child($scope0_id, "a", 0);
	Row.content({
		a: n,
		b: input.x
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 4) << 3 | _mask_group($scope0_reason, 5) << 5);
	const $childScope2 = _patch_child($scope0_id, "b", 1);
	Row.content(input.row);
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.y,
		i: n,
		l: $wi__input_y && $input_y__closures,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va5", input.y, !_server_guard($scope0_reason, 2));
}, 1);

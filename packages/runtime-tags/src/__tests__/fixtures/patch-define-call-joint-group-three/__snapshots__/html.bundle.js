// template.marko
const $Row_content__walks = "D lD l";
const $Row_content__template = "<p> </p><em> </em>";
_shells({ a: /*@__PURE__*/ (() => `a !a4;${((_w0) => `b/${_w0}& b`)($Row_content__walks)};${((_w0) => `<!>${_w0}<button class=n>+</button>`)($Row_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_y = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_y__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const Row = { content: _content("a0", ({ a, b, c }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $cg__b__OR__c = _client_guard($scope1_reason, 2), $cg__a__OR__b = _client_guard($scope1_reason, 0), $scope1_page = _page_render();
		_html(`<p>${_patch_text($scope1_id, "a", a + b + c, void 0, $scope1_reason, 3)}</p><em>${_patch_text($scope1_id, "b", input.y + b, void 0, (_mask_group($scope0_reason, 1) | _mask_group($scope1_reason, 5)) << 1, 0)}</em>`);
		$cg__b__OR__c && _patch_write($scope1_id, "xe", a, !(_filled_guard($scope1_reason, 4) && $cg__b__OR__c));
		_client_guard((_mask_group($scope0_reason, 1) | _mask_group($scope1_reason, 1)) << 1, 0) && _patch_write($scope1_id, "xf", b, !(_filled_guard($scope1_reason, 5) && (_client_guard($scope1_reason, 1) || _client_guard($scope0_reason, 1))));
		$cg__a__OR__b && _patch_write($scope1_id, "xh", c, !(_filled_guard($scope1_reason, 6) && $cg__a__OR__b));
		_patch_join_init($scope1_id, "a1", (_mask_group($scope0_reason, 1) | _mask_group($scope1_reason, 5)) << 1, 0, _filled_guard($scope0_reason, 1) && ">e", _filled_guard($scope1_reason, 5) && "f");
		_patch_join_init($scope1_id, "a2", $scope1_reason, 3, _filled_guard($scope1_reason, 4) && "e", _filled_guard($scope1_reason, 5) && "f", _filled_guard($scope1_reason, 6) && "h");
		$scope1_page && _subscribe(_unfilled_if((_mask_group($scope0_reason, 1) | _mask_group($scope1_reason, 5)) << 1, 0) && $wi__input_y && $input_y__closures, _scope($scope1_id, {
			e: (_unfilled_if($scope1_reason, 2) || _unfilled_if($scope1_reason, 3)) && a,
			f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope1_reason, 1) || _unfilled_if($scope1_reason, 5) || _unfilled_if($scope1_reason, 3) || _unfilled_if($scope0_reason, 2)) && b,
			h: (_unfilled_if($scope1_reason, 0) || _unfilled_if($scope1_reason, 3)) && c,
			_: ($wi__input_y || _write_if($scope1_reason, 5)) && _scope_with_id($scope0_id)
		}), _client_guard((_mask_group($scope0_reason, 1) | _mask_group($scope1_reason, 5)) << 1, 0) && "a3");
	}, $scope0_id) };
	_set_scope_reason(926 | (_mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 2) << 11 | _mask_group($scope0_reason, 3) << 13));
	const $childScope = _patch_child($scope0_id, "a");
	Row.content({
		a: n,
		b: input.x,
		c: input.z
	});
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a4");
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.y,
		h: n,
		i: $wi__input_y && $input_y__closures,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va5", input.y, !_server_guard($scope0_reason, 1));
}, 1);

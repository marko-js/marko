// template.marko
const $Row_content__walks = "D lD l";
const $Row_content__template = "<p> </p><em> </em>";
_shells({ a: /*@__PURE__*/ (() => `a !a4;${((_w0) => `b/${_w0}& b`)($Row_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Row_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_y = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_y__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const Row = { content: _content("a0", ({ a, b }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $cg__b = _client_guard($scope1_reason, 2);
		_html(`<p>${_text_resume($scope1_id, "a", a + b, 1, $scope1_reason, 0)}</p><em>${_text_resume($scope1_id, "b", input.y + b, 1, (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 2)) << 1, 0)}</em>`);
		$cg__b && _patch_write($scope1_id, "xe", a, !(_filled_guard($scope1_reason, 1) && $cg__b));
		_client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1)) << 1, 0) && _patch_write($scope1_id, "xf", b, !(_filled_guard($scope1_reason, 2) && (_client_guard($scope0_reason, 0) || _client_guard($scope1_reason, 1))));
		_patch_join_init($scope1_id, "a1", (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 2)) << 1, 0, _filled_guard($scope0_reason, 0) && ">e", _filled_guard($scope1_reason, 2) && "f");
		_patch_join_init($scope1_id, "a2", $scope1_reason, 0, _filled_guard($scope1_reason, 1) && "e", _filled_guard($scope1_reason, 2) && "f");
		_subscribe(_unfilled_if((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 2)) << 1, 0) && $wi__input_y && $input_y__closures, _scope($scope1_id, {
			e: (_unfilled_if($scope1_reason, 2) || _unfilled_if($scope1_reason, 0)) && a,
			f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 1) || _unfilled_if($scope1_reason, 2) || _unfilled_if($scope1_reason, 0) || _unfilled_if($scope0_reason, 1)) && b,
			_: ($wi__input_y || _write_if($scope1_reason, 2)) && _scope_with_id($scope0_id)
		}), _client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 2)) << 1, 0) && "a3");
	}, $scope0_id) };
	_set_scope_reason(14 | _mask_group($scope0_reason, 1) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Row.content({
		a: n,
		b: input.x
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.y,
		g: n,
		h: $wi__input_y && $input_y__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va5", input.y, !_server_guard($scope0_reason, 0));
}, 1);

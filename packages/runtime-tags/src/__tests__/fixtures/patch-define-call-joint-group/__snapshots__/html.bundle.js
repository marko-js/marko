// template.marko
const $Row_content__walks = "D lD l";
const $Row_content__template = "<p> </p><em> </em>";
_shells({ a: `a !a4;${((_w0) => `/${_w0}& b`)($Row_content__walks)};${((_w0) => `${_w0}<button>+</button>`)($Row_content__template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_y = _updates_from($scope0_reason, 0), $wi__input_y = _write_if($scope0_reason, 0), $ui__input_x = _unfilled_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_y__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const Row = { content: _content("a0", ({ a, b }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $uf__b = _updates_from($scope1_reason, 2), $fg__b = _filled_guard($scope1_reason, 2), $wi__b = _write_if($scope1_reason, 2);
		_html(`<p>${_text_mark($scope1_id, "a", a + b, 1, $scope1_reason, 0)}</p><em>${_text_mark($scope1_id, "b", input.y + b, 1, ($uf__input_y | $uf__b) << 1, 0)}</em>`);
		_patch_render($scope1_id, "a1", ((_filled_guard($scope0_reason, 0) ? " >e" : "") + ($fg__b ? " f" : "")).slice(1), ($uf__input_y | $uf__b) << 1, 0);
		_patch_render($scope1_id, "a2", $fg__b && "f", $scope1_reason, 0);
		_subscribe(_unfilled_if(($uf__input_y | $uf__b) << 1, 0) && $wi__input_y && $input_y__closures, _scope($scope1_id, {
			e: $wi__b && a,
			f: ($wi__input_y || _write_if($scope1_reason, 1)) && b,
			_: ($wi__input_y || $wi__b) && _scope_with_id($scope0_id)
		}), _client_guard(($uf__input_y | $uf__b) << 1, 0) && "a3") || $fg__b && _patch_write($scope1_id, "xf", b, !_server_guard($scope1_reason, 2));
	}, $scope0_id) };
	_set_scope_reason(14 | _updates_from($scope0_reason, 1) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Row.content({
		a: n,
		b: input.x
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && ($ui__input_x || _unfilled_if($scope0_reason, 0)) && input.y,
		g: n,
		h: $wi__input_y && $input_y__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && $ui__input_x && _patch_write($scope0_id, "xe", input.y, !_server_guard($scope0_reason, 0));
}, 1);

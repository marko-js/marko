// template.marko
const $Box_content__walks = "D l";
const $Box_content__template = "<p> </p>";
_shells({ a: `a !a3;${((_w0) => `/${_w0}&%b b`)($Box_content__walks)};${((_w0) => `${_w0}<!><button>inc</button>`)($Box_content__template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_a = _updates_from($scope0_reason, 1), $wi__input_a = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const Box = { content: _content_resume("a0", ({ x }) => {
		const $scope1_id = _scope_id(), $ui__input_a = _unfilled_if($scope0_reason, 1);
		const $scope1_reason = _scope_reason(), $uf__x = _updates_from($scope1_reason, 0), $fg__x = _filled_guard($scope1_reason, 0);
		_html(`<p>${_text_mark($scope1_id, "a", input.a + x, 1, ($uf__input_a | $uf__x) << 1, 0)}</p>`);
		_patch_render($scope1_id, "a1", ((_filled_guard($scope0_reason, 1) ? " >f" : "") + ($fg__x ? " d" : "")).slice(1), ($uf__input_a | $uf__x) << 1, 0);
		_subscribe(_unfilled_if(($uf__input_a | $uf__x) << 1, 0) && $wi__input_a && $input_a__closures, _scope($scope1_id, {
			d: ($ui__input_a || _unfilled_if($scope1_reason, 0)) && x,
			_: (_write_if($scope0_reason, 0) || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id)
		}), _client_guard(($uf__input_a | $uf__x) << 1, 0) && "a2") || $fg__x && $ui__input_a && _patch_write($scope1_id, "xd", x, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Box.content({ x: n });
	_patch_child_end();
	_dynamic_tag($scope0_id, "b", Box, { x: input.x }, 9, 0, 0, _write_guard($scope0_reason, 2), $scope0_reason, 2, 0, 0, 0);
	_html(`<button>inc</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		f: input.a,
		h: n,
		i: _unfilled_if($scope0_reason, 2) && Box,
		k: $wi__input_a && $input_a__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.a, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a4", "f");
}, 1);

// template.marko
const $Inner_content__walks = "D l";
const $Inner_content__template = "<p> </p>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($Inner_content__walks);
const $Outer_content__template = $Inner_content__template;
const $Wrapper_content__walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($Outer_content__walks, $Outer_content__walks);
const $Wrapper_content__template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($Outer_content__template, $Outer_content__template);
_shells({ a: `a !a6;${((_w0) => `/${_w0}& b`)($Wrapper_content__walks)};${((_w0) => `${_w0}<button>+</button>`)($Wrapper_content__template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_label = _updates_from($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const Outer = { content: _content("a4", ({ x, y }) => {
		const $scope1_id = _scope_id(), $ui__input_label2 = _unfilled_if($scope0_reason, 0);
		const $Outer_content__x__closures = /* @__PURE__ */ new Set();
		const $scope1_reason = _scope_reason(), $uf__x = _updates_from($scope1_reason, 1), $wi__x = _write_if($scope1_reason, 1), $ui__y = _unfilled_if($scope1_reason, 2);
		const Inner = { content: _content("a0", ({ z }) => {
			const $scope2_id = _scope_id(), $ui__input_label = _unfilled_if($scope0_reason, 0), $ui__x = _unfilled_if($scope1_reason, 1);
			const $scope2_reason = _scope_reason(), $uf__z = _updates_from($scope2_reason, 0), $fg__z = _filled_guard($scope2_reason, 0);
			_html(`<p>${_text_mark($scope2_id, "a", input.label + x + z, 1, ($uf__input_label | $uf__x | $uf__z) << 1, 0)}</p>`);
			_patch_render($scope2_id, "a1", ((_filled_guard($scope0_reason, 0) ? " >>e" : "") + (_filled_guard($scope1_reason, 1) ? " >d" : "") + ($fg__z ? " d" : "")).slice(1), ($uf__input_label | $uf__x | $uf__z) << 1, 0);
			_subscribe(_unfilled_if(($uf__x | $uf__z) << 1, 0) && $wi__x && $Outer_content__x__closures, _subscribe(_unfilled_if(($uf__input_label | $uf__x | $uf__z) << 1, 0) && $wi__input_label && $input_label__closures, _scope($scope2_id, {
				d: ($wi__input_label || $wi__x) && ($ui__input_label || $ui__x || _unfilled_if($scope2_reason, 0)) && z,
				_: ($wi__input_label || $wi__x || _write_if($scope2_reason, 0)) && _scope_with_id($scope1_id)
			}), _client_guard(($uf__input_label | $uf__x | $uf__z) << 1, 0) && "a2"), _client_guard(($uf__x | $uf__z) << 1, 0) && "a3") || $fg__z && ($ui__input_label || $ui__x) && _patch_write($scope2_id, "xd", z, !_server_guard($scope2_reason, 0));
		}, $scope1_id) };
		_set_scope_reason(_updates_from($scope1_reason, 2) << 1);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		Inner.content({ z: y });
		_patch_child_end();
		_scope($scope1_id, {
			d: ($wi__input_label || _write_if($scope1_reason, 2)) && ($ui__input_label2 || $ui__y || _unfilled_if($scope1_reason, 1)) && x,
			_: ($wi__input_label || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id),
			i: $wi__x && $Outer_content__x__closures,
			a: _existing_scope($childScope)
		}) || _filled_guard($scope1_reason, 1) && ($ui__input_label2 || $ui__y) && _patch_write($scope1_id, "xd", x, !_server_guard($scope1_reason, 1));
	}, $scope0_id) };
	const Wrapper = { content: _content("a5", ({ a, b }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $uf__a = _updates_from($scope3_reason, 0);
		_set_scope_reason($uf__a << 1 | $uf__a << 3);
		const $childScope2 = _peek_scope_id($scope3_id, "a", 1);
		Outer.content({
			x: a,
			y: 0
		});
		_patch_child_end();
		_set_scope_reason(34);
		const $childScope3 = _peek_scope_id($scope3_id, "b", 2);
		Outer.content({
			x: 0,
			y: b
		});
		_patch_child_end();
		_scope($scope3_id, {
			a: _existing_scope($childScope2),
			b: _existing_scope($childScope3)
		});
	}, $scope0_id) };
	_set_scope_reason(8 | _updates_from($scope0_reason, 1) << 1);
	const $childScope4 = _peek_scope_id($scope0_id, "a", 3);
	Wrapper.content({
		a: input.a,
		b: n
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a6");
	_scope($scope0_id, {
		e: input.label,
		g: n,
		h: $wi__input_label && $input_label__closures,
		a: _existing_scope($childScope4)
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 0));
}, 1);

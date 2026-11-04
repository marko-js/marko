// template.marko
const $Inner_content__walks = "D l";
const $Inner_content__template = "<p> </p>";
const $Left_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($Inner_content__walks);
const $Left_content__template = $Inner_content__template;
const $Right_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($Inner_content__walks);
const $Right_content__template = $Inner_content__template;
const $Outer_content__walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($Left_content__walks, $Right_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($Left_content__template, $Right_content__template);
const $Wrapper_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($Outer_content__walks);
const $Wrapper_content__template = $Outer_content__template;
_shells({ a: `a !a8;${((_w0) => `/${_w0}& b`)($Wrapper_content__walks)};${((_w0) => `${_w0}<button>+</button>`)($Wrapper_content__template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_label = _updates_from($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const Outer = { content: _content("a6", ({ x, y }) => {
		const $scope1_id = _scope_id();
		const $Outer_content__x__closures = /* @__PURE__ */ new Set();
		const $scope1_reason = _scope_reason(), $uf__x = _updates_from($scope1_reason, 1), $wi__x = _write_if($scope1_reason, 1);
		const Inner = { content: _content("a0", ({ z }) => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(`<p>${_text_mark($scope2_id, "a", input.label + x + z, 1, (1 | ($uf__input_label | $uf__x)) << 1, 0)}</p>`);
			_patch_render($scope2_id, "a1", [_filled_guard($scope0_reason, 0) && ">>e", _filled_guard($scope1_reason, 1) && ">e"], (1 | ($uf__input_label | $uf__x)) << 1, 0);
			_subscribe(_unfilled_if((1 | $uf__x) << 1, 0) && $wi__x && $Outer_content__x__closures, _subscribe(_unfilled_if((1 | ($uf__input_label | $uf__x)) << 1, 0) && $wi__input_label && $input_label__closures, _scope($scope2_id, {
				d: z,
				_: ($wi__input_label || $wi__x || _write_if($scope2_reason, 0)) && _scope_with_id($scope1_id)
			}), _client_guard((1 | ($uf__input_label | $uf__x)) << 1, 0) && "a2"), _client_guard((1 | $uf__x) << 1, 0) && "a3");
		}, $scope1_id) };
		const Left = { content: _content("a4", ({ v }) => {
			const $scope4_id = _scope_id();
			_scope_reason();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id($scope4_id, "a", 0);
			Inner.content({ z: v });
			_patch_child_end();
			_scope($scope4_id, { a: _existing_scope($childScope) });
		}, $scope1_id) };
		const Right = { content: _content("a5", ({ w }) => {
			const $scope5_id = _scope_id();
			_scope_reason();
			_set_scope_reason(2);
			const $childScope2 = _peek_scope_id($scope5_id, "a", 1);
			Inner.content({ z: w });
			_patch_child_end();
			_scope($scope5_id, { a: _existing_scope($childScope2) });
		}, $scope1_id) };
		_set_scope_reason(2);
		const $childScope3 = _peek_scope_id($scope1_id, "a", 2);
		Left.content({ v: y });
		_patch_child_end();
		_set_scope_reason(2);
		const $childScope4 = _peek_scope_id($scope1_id, "b", 3);
		Right.content({ w: y });
		_patch_child_end();
		_scope($scope1_id, {
			e: x,
			_: ($wi__input_label || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id),
			i: $wi__x && $Outer_content__x__closures,
			a: _existing_scope($childScope3),
			b: _existing_scope($childScope4)
		}) || _filled_guard($scope1_reason, 1) && _patch_write($scope1_id, "xe", x, !_server_guard($scope1_reason, 1));
	}, $scope0_id) };
	const Wrapper = { content: _content("a7", ({ a, b }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_set_scope_reason(38 | _updates_from($scope3_reason, 1) << 3);
		const $childScope5 = _peek_scope_id($scope3_id, "a", 4);
		Outer.content({
			x: a,
			y: b
		});
		_patch_child_end();
		_scope($scope3_id, { a: _existing_scope($childScope5) });
	}, $scope0_id) };
	_set_scope_reason(38 | _updates_from($scope0_reason, 1) << 3);
	const $childScope6 = _peek_scope_id($scope0_id, "a", 5);
	Wrapper.content({
		a: input.a,
		b: n
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a8");
	_scope($scope0_id, {
		e: input.label,
		g: n,
		h: $wi__input_label && $input_label__closures,
		a: _existing_scope($childScope6)
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 0));
}, 1);

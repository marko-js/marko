// template.marko
const $Inner_content__walks = "D l";
const $Inner_content__template = "<p> </p>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content__template);
const $Wrapper_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)($Outer_content__walks);
const $Wrapper_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($Outer_content__template);
_shells({
	a: /*@__PURE__*/ (() => `a a>>a>a>!a10;${((_w0) => `b/${_w0}& b`)($Wrapper_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Wrapper_content__template)}`)(),
	a8: /*@__PURE__*/ (() => `a8 >>a>>a>a>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Wrapper_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Wrapper_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const Outer = { content: _content("a4", ({ x, y }) => {
		const $scope1_id = _scope_id();
		const $Outer_content__x__closures = /* @__PURE__ */ new Set();
		const $scope1_reason = _scope_reason(), $wi__x = _write_if($scope1_reason, 1);
		const Inner = { content: _content("a0", ({ z }) => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(`<p>${_text_resume($scope2_id, "a", input.label + x + z, 1, (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1) | _mask_group($scope2_reason, 0)) << 1, 0)}</p>`);
			_client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1)) << 1, 0) && _patch_write($scope2_id, "xd", z, !(_filled_guard($scope2_reason, 0) && ($cg__input_label || _client_guard($scope1_reason, 1))));
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, "a1");
			(_unfilled_if($scope1_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 1) || _unfilled_if($scope2_reason, 0)) && _patch_init($scope2_id, "a2");
			_patch_join_init($scope2_id, "a3", (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1) | _mask_group($scope2_reason, 0)) << 1, 0, _filled_guard($scope0_reason, 0) && ">>e", _filled_guard($scope1_reason, 1) && ">d", _filled_guard($scope2_reason, 0) && "d");
			_subscribe(_unfilled_if((_mask_group($scope1_reason, 1) | _mask_group($scope2_reason, 0)) << 1, 0) && $wi__x && $Outer_content__x__closures, _subscribe(_unfilled_if((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1) | _mask_group($scope2_reason, 0)) << 1, 0) && $wi__input_label && $input_label__closures, _scope($scope2_id, {
				d: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 1) || _unfilled_if($scope1_reason, 2) || _unfilled_if($scope2_reason, 0)) && z,
				_: _scope_with_id($scope1_id)
			}), _client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1) | _mask_group($scope2_reason, 0)) << 1, 0) && "a1"), _client_guard((_mask_group($scope1_reason, 1) | _mask_group($scope2_reason, 0)) << 1, 0) && "a2");
		}, $scope1_id) };
		_set_scope_reason(_mask_group($scope1_reason, 2) << 1);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		Inner.content({ z: y });
		_patch_child_end();
		_scope($scope1_id, {
			d: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 2) || _unfilled_if($scope1_reason, 1)) && x,
			_: ($wi__input_label || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id),
			i: $wi__x && $Outer_content__x__closures,
			a: _existing_scope($childScope)
		}) || _filled_guard($scope1_reason, 1) && ($cg__input_label || _client_guard($scope1_reason, 2)) && _patch_fill($scope1_id, "va5", x, !_server_guard($scope1_reason, 1));
	}, $scope0_id) };
	const Wrapper = { content: _content("a9", ({ a, b, depth }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $cg__depth = _client_guard($scope3_reason, 4);
		_set_scope_reason(_mask_group($scope3_reason, 0) << 1 | _mask_group($scope3_reason, 2) << 3 | _mask_group($scope3_reason, 3) << 5);
		const $childScope2 = _peek_scope_id($scope3_id, "a", 1, 0, $scope0_id);
		Outer.content({
			x: a,
			y: b
		});
		_patch_child_end();
		_if(() => {
			if (depth) {
				const $scope4_id = _scope_id();
				_set_scope_reason(_mask_group($scope3_reason, 0) << 1 | _mask_group($scope3_reason, 1) << 3 | _mask_group($scope3_reason, 3) << 5 | _mask_group($scope3_reason, 2) << 7 | _mask_group($scope3_reason, 4) << 9);
				const $childScope3 = _peek_scope_id($scope4_id, "a", 2, 0, $scope0_id);
				Wrapper.content({
					a: b,
					b: a,
					depth: depth - 1
				});
				_patch_child_end();
				_client_guard($scope3_reason, 2) && _patch_init($scope4_id, "a6");
				_client_guard($scope3_reason, 3) && _patch_init($scope4_id, "a7");
				_scope($scope4_id, {
					_: _write_if($scope3_reason, 1) && _scope_with_id($scope3_id),
					a: _existing_scope($childScope3)
				});
				return 0;
			}
		}, $scope3_id, "b", 1, _write_guard($scope3_reason, 4), void 0, void 0, void 0, ["a8"], $scope3_reason, 4);
		$cg__depth && _patch_write($scope3_id, "we", a, 1);
		$cg__depth && _patch_write($scope3_id, "wf", b, 1);
		_scope($scope3_id, {
			e: (_unfilled_if($scope3_reason, 4) || _unfilled_if($scope3_reason, 2)) && a,
			f: (_unfilled_if($scope3_reason, 4) || _unfilled_if($scope3_reason, 3)) && b,
			_: _write_if($scope3_reason, 4) && _scope_with_id($scope0_id),
			a: _existing_scope($childScope2)
		});
	}, $scope0_id) };
	_set_scope_reason(158 | _mask_group($scope0_reason, 1) << 5);
	const $childScope4 = _peek_scope_id($scope0_id, "a", 3);
	Wrapper.content({
		a: input.a,
		b: n,
		depth: 2
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a10");
	_scope($scope0_id, {
		e: input.label,
		g: n,
		h: $wi__input_label && $input_label__closures,
		a: _existing_scope($childScope4)
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va11", input.label, !_server_guard($scope0_reason, 0));
}, 1);

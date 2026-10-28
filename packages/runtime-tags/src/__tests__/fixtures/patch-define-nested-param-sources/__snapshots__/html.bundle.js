// template.marko
const $Inner_content__walks = "D l";
const $Inner_content__template = "<p> </p>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content__template);
const $Wrapper_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Outer_content__walks);
const $Wrapper_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Outer_content__template);
_shells({ a: /*@__PURE__*/ (() => `a !a7;${((_w0) => `b/${_w0}& b`)($Wrapper_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Wrapper_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0);
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
			_html(`<p>${_text_resume($scope2_id, "a", input.label + x + z, void 0, (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1) | _mask_group($scope2_reason, 0)) << 1, 0)}</p>`);
			_client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1)) << 1, 0) && _patch_write($scope2_id, "xd", z, !(_filled_guard($scope2_reason, 0) && ($cg__input_label || _client_guard($scope1_reason, 1))));
			_patch_join_init($scope2_id, "a1", (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1) | _mask_group($scope2_reason, 0)) << 1, 0, _filled_guard($scope0_reason, 0) && ">>e", _filled_guard($scope1_reason, 1) && ">d", _filled_guard($scope2_reason, 0) && "d");
			_subscribe(_unfilled_if((_mask_group($scope1_reason, 1) | _mask_group($scope2_reason, 0)) << 1, 0) && $wi__x && $Outer_content__x__closures, _subscribe(_unfilled_if((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1) | _mask_group($scope2_reason, 0)) << 1, 0) && $wi__input_label && $input_label__closures, _scope($scope2_id, {
				d: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 1) || _unfilled_if($scope1_reason, 2) || _unfilled_if($scope2_reason, 0)) && z,
				_: ($wi__input_label || $wi__x || _write_if($scope2_reason, 0)) && _scope_with_id($scope1_id)
			}), _client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1) | _mask_group($scope2_reason, 0)) << 1, 0) && "a2"), _client_guard((_mask_group($scope1_reason, 1) | _mask_group($scope2_reason, 0)) << 1, 0) && "a3");
		}, $scope1_id) };
		_set_scope_reason(_mask_group($scope1_reason, 2) << 1);
		const $childScope = _patch_child($scope1_id, "a", 0);
		Inner.content({ z: y });
		_patch_child_end();
		_scope($scope1_id, {
			d: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 2) || _unfilled_if($scope1_reason, 1)) && x,
			_: ($wi__input_label || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id),
			i: $wi__x && $Outer_content__x__closures,
			a: _existing_scope($childScope)
		}) || _filled_guard($scope1_reason, 1) && ($cg__input_label || _client_guard($scope1_reason, 2)) && _patch_fill($scope1_id, "va5", x, !_server_guard($scope1_reason, 1));
	}, $scope0_id) };
	const Wrapper = { content: _content("a6", ({ a, b }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_set_scope_reason(_mask_group($scope3_reason, 0) << 1 | _mask_group($scope3_reason, 1) << 3 | _mask_group($scope3_reason, 2) << 5);
		const $childScope2 = _patch_child($scope3_id, "a", 1);
		Outer.content({
			x: a,
			y: b
		});
		_patch_child_end();
		_scope($scope3_id, { a: _existing_scope($childScope2) });
	}, $scope0_id) };
	_set_scope_reason(38 | _mask_group($scope0_reason, 1) << 3);
	const $childScope3 = _patch_child($scope0_id, "a", 2);
	Wrapper.content({
		a: input.a,
		b: n
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a7");
	_scope($scope0_id, {
		e: input.label,
		g: n,
		h: $wi__input_label && $input_label__closures,
		a: _existing_scope($childScope3)
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va8", input.label, !_server_guard($scope0_reason, 0));
}, 1);

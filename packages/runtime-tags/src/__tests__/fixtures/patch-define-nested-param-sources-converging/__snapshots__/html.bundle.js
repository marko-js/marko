// template.marko
const $Inner_content__walks = "D l";
const $Inner_content__template = "<p> </p>";
const $Left_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content__walks);
const $Left_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content__template);
const $Right_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content__walks);
const $Right_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content__template);
const $Outer_content__walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($Left_content__walks, $Right_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($Left_content__template, $Right_content__template);
const $Wrapper_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Outer_content__walks);
const $Wrapper_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Outer_content__template);
_shells({ a: /*@__PURE__*/ (() => `a !a9;${((_w0) => `b/${_w0}& b`)($Wrapper_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Wrapper_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const Outer = { content: _content("a6", ({ x, y }) => {
		const $scope1_id = _scope_id();
		const $Outer_content__x__closures = /* @__PURE__ */ new Set();
		const $scope1_reason = _scope_reason(), $wi__x = _write_if($scope1_reason, 1), $scope1_page = _page_render();
		const Inner = { content: _content("a0", ({ z }) => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
			_html(`<p>${_patch_text($scope2_id, "a", input.label + x + z, void 0, (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1) | _mask_group($scope2_reason, 0)) << 1, 0)}</p>`);
			_client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1)) << 1, 0) && _patch_write($scope2_id, "xd", z, !(_filled_guard($scope2_reason, 0) && ($cg__input_label || _client_guard($scope1_reason, 1))));
			_patch_join_init($scope2_id, "a1", (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1) | _mask_group($scope2_reason, 0)) << 1, 0, _filled_guard($scope0_reason, 0) && ">>e", _filled_guard($scope1_reason, 1) && ">e", _filled_guard($scope2_reason, 0) && "d");
			$scope2_page && _subscribe(_unfilled_if((_mask_group($scope1_reason, 1) | _mask_group($scope2_reason, 0)) << 1, 0) && $wi__x && $Outer_content__x__closures, _subscribe(_unfilled_if((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1) | _mask_group($scope2_reason, 0)) << 1, 0) && $wi__input_label && $input_label__closures, _scope($scope2_id, {
				d: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 1) || _unfilled_if($scope1_reason, 2) || _unfilled_if($scope2_reason, 0)) && z,
				_: ($wi__input_label || $wi__x || _write_if($scope2_reason, 0)) && _scope_with_id($scope1_id)
			}), _client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1) | _mask_group($scope2_reason, 0)) << 1, 0) && "a2"), _client_guard((_mask_group($scope1_reason, 1) | _mask_group($scope2_reason, 0)) << 1, 0) && "a3");
		}, $scope1_id) };
		const Left = { content: _content("a4", ({ v }) => {
			const $scope4_id = _scope_id();
			const $scope4_reason = _scope_reason(), $scope4_page = _page_render();
			_set_scope_reason(_mask_group($scope4_reason, 0) << 1);
			const $childScope = _patch_child($scope4_id, "a", 0);
			Inner.content({ z: v });
			_patch_child_end();
			$scope4_page && _scope($scope4_id, { a: _existing_scope($childScope) });
		}, $scope1_id) };
		const Right = { content: _content("a5", ({ w }) => {
			const $scope5_id = _scope_id();
			const $scope5_reason = _scope_reason(), $scope5_page = _page_render();
			_set_scope_reason(_mask_group($scope5_reason, 0) << 1);
			const $childScope2 = _patch_child($scope5_id, "a", 1);
			Inner.content({ z: w });
			_patch_child_end();
			$scope5_page && _scope($scope5_id, { a: _existing_scope($childScope2) });
		}, $scope1_id) };
		_set_scope_reason(_mask_group($scope1_reason, 2) << 1);
		const $childScope3 = _patch_child($scope1_id, "a", 2);
		Left.content({ v: y });
		_patch_child_end();
		_set_scope_reason(_mask_group($scope1_reason, 2) << 1);
		const $childScope4 = _patch_child($scope1_id, "b", 3);
		Right.content({ w: y });
		_patch_child_end();
		$scope1_page ? _scope($scope1_id, {
			e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 2) || _unfilled_if($scope1_reason, 1)) && x,
			_: ($wi__input_label || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id),
			i: $wi__x && $Outer_content__x__closures,
			a: _existing_scope($childScope3),
			b: _existing_scope($childScope4)
		}) : _filled_guard($scope1_reason, 1) && ($cg__input_label || _client_guard($scope1_reason, 2)) && _patch_fill($scope1_id, "va7", x, !_server_guard($scope1_reason, 1));
	}, $scope0_id) };
	const Wrapper = { content: _content("a8", ({ a, b }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $scope3_page = _page_render();
		_set_scope_reason(_mask_group($scope3_reason, 0) << 1 | _mask_group($scope3_reason, 1) << 3 | _mask_group($scope3_reason, 2) << 5);
		const $childScope5 = _patch_child($scope3_id, "a", 4);
		Outer.content({
			x: a,
			y: b
		});
		_patch_child_end();
		$scope3_page && _scope($scope3_id, { a: _existing_scope($childScope5) });
	}, $scope0_id) };
	_set_scope_reason(38 | _mask_group($scope0_reason, 1) << 3);
	const $childScope6 = _patch_child($scope0_id, "a", 5);
	Wrapper.content({
		a: input.a,
		b: n
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a9");
	$scope0_page ? _scope($scope0_id, {
		e: input.label,
		g: n,
		h: $wi__input_label && $input_label__closures,
		a: _existing_scope($childScope6)
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va10", input.label, !_server_guard($scope0_reason, 0));
}, 1);

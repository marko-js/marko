// tags/card.marko
_shells({ b: "b !b0; b%;<button class=toggle>toggle</button><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
			$scope0_page && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb2", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.content,
		f: open
	}) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
const $Tree_content__walks = "D l%c";
const $Tree_content__template = "<em> </em><!><!>";
_shells({
	a0: "a0 >>>a> a12",
	a: /*@__PURE__*/ (() => `a !;${((_w0) => `D/${_w0}&l`)($Tree_content__walks)};${((_w0) => `<main>${_w0}</main>`)($Tree_content__template)}`)(),
	a3: "a3;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 2), $wi__input_on = _write_if($scope0_reason, 2), $cg__input_note = _client_guard($scope0_reason, 1), $cg__input_on = _client_guard($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_on__closures = /* @__PURE__ */ new Set();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const Tree = { content: _content("a4", ({ depth }) => {
		const $scope1_id = _scope_id();
		const $Tree_content__depth__closures = /* @__PURE__ */ new Set();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render(), $wi__depth = _write_if($scope1_reason, 0);
		_html(`<em>${_patch_text($scope1_id, "a", input.note, void 0, $scope0_reason, 1)}</em>`);
		_if(() => {
			if (depth) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", input.on ? card_default : "div", {}, 10, _content_resume("a0", () => {
					const $scope3_id = _scope_id();
					_scope_reason();
					const $scope3_page = _page_render();
					_set_scope_reason(_mask_group($scope1_reason, 0) << 1);
					const $childScope = _patch_child($scope3_id, "a", 0, void 0, $scope0_id);
					Tree.content({ depth: depth - 1 });
					_patch_child_end();
					$scope3_page && _subscribe(_unfilled_if($scope1_reason, 0) && $Tree_content__depth__closures, _scope($scope3_id, {
						_: ($wi__input_on || $wi__depth) && _scope_with_id($scope2_id),
						a: _existing_scope($childScope)
					}));
				}, $scope2_id, ($scope) => $scope1_page ? [{ e: depth }, { _: $scope($scope1_id) }] : []), 0, $wg__input_on, $scope0_reason, 2);
				_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_on ? "a1" : "a2");
				$scope1_page && ($wi__input_on || $wi__depth) && _subscribe(_unfilled_if($scope0_reason, 2) && $input_on__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a2", $wg__input_on);
				return 0;
			}
		}, $scope1_id, "b", 1, _write_guard($scope1_reason, 0), void 0, void 0, void 0, ["a3"], $scope1_reason, 0);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_note ? "a6" : "a7");
		$scope1_page ? _subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, {
			e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope1_reason, 0)) && depth,
			_: (_write_if($scope0_reason, 0) || $wi__depth) && _scope_with_id($scope0_id),
			h: $wi__depth && $Tree_content__depth__closures
		}), $cg__input_note && "a7") : _filled_guard($scope1_reason, 0) && _content_withheld("a0", $scope1_id) && _patch_fill($scope1_id, "va5", depth, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(0);
	const $childScope2 = _patch_child($scope0_id, "a", 2);
	Tree.content({ depth: 1 });
	_patch_child_end();
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		d: input.note,
		e: input.on,
		g: $wi__input_on && $input_on__closures,
		f: _write_if($scope0_reason, 1) && $input_note__closures,
		a: _existing_scope($childScope2)
	}) : (_filled_guard($scope0_reason, 1) && ($cg__input_on ? _patch_fill($scope0_id, "va8", input.note, !_server_guard($scope0_reason, 1)) : _content_withheld("a0", $scope0_id) && _patch_fill($scope0_id, "va9", input.note)), _filled_guard($scope0_reason, 2) && _content_withheld("a0", $scope0_id) && _patch_fill($scope0_id, "va10", input.on, !_server_guard($scope0_reason, 2)), _content_withheld("a0", $scope0_id) && _content_withhold(input.on));
}, 1);

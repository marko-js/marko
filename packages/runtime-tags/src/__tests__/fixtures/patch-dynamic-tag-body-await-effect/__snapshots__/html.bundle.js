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
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
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
_shells({
	a0: "a0",
	a9: "a9 !;b%;<!><!><!>",
	a10: "a10 !;b%;<!><!><!>",
	a: "a !;D b%;<main><div></div><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on = _write_guard($scope0_reason, 4), $cg__input_on = _client_guard($scope0_reason, 4), $wi__input_note__OR__input_v__OR__input_on = _write_if($scope0_reason, 1), $sg__input_note = _server_guard($scope0_reason, 2), $cg__input_v = _client_guard($scope0_reason, 3), $cg__input_note = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_on__closures = /* @__PURE__ */ new Set();
	_html(`<main><div></div>${_el_resume($scope0_id, "a")}`);
	_await($scope0_id, "b", input.v, (v) => {
		const $scope1_id = _scope_id();
		const $await_content__v__closures = /* @__PURE__ */ new Set();
		_dynamic_tag($scope1_id, "a", input.on ? card_default : "div", {}, _content_resume("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			const $scope2_page = _page_render();
			_html(`<em>${_patch_text($scope2_id, "a", input.note, void 0, $scope0_reason, 2)} ${_patch_text($scope2_id, "b", v, 2, $scope0_reason, 3)}</em>`);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_note ? "a1" : "a2");
			_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, $cg__input_v ? "a3" : "a4");
			$scope2_page && _subscribe(_unfilled_if($scope0_reason, 3) && $await_content__v__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope2_id, { _: $wi__input_note__OR__input_v__OR__input_on && _scope_with_id($scope1_id) })));
		}, $scope1_id, ($scope) => $scope0_page ? [{ c: v }] : []), 0, $wg__input_on, void 0, 2, $scope0_reason, 4);
		_filled_guard($scope0_reason, 3) && _content_withheld("a0", $scope1_id) && _patch_fill($scope1_id, "va5", v);
		_filled_guard($scope0_reason, 2) && _content_withheld("a0", $scope1_id) && _patch_fill($scope0_id, "va6", input.note);
		_unfilled_if($scope0_reason, 4) && _patch_init($scope1_id, $cg__input_on ? "a7" : "a8");
		$scope0_page && $wi__input_note__OR__input_v__OR__input_on && _subscribe(_unfilled_if($scope0_reason, 4) && $input_on__closures, _scope($scope1_id, {
			c: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 3)) && v,
			_: _scope_with_id($scope0_id),
			j: _write_if($scope0_reason, 3) && $await_content__v__closures
		}), $cg__input_on && "a8", $wg__input_on);
		$wg__input_on || $wi__input_note__OR__input_v__OR__input_on && _resume_branch($scope1_id);
	}, 1, "a9", 1, 1);
	_html("</main>");
	_script($scope0_id, "a11");
	_filled_guard($scope0_reason, 2) && _patch_effect($scope0_id, $cg__input_note ? "ha11" : "ea11", "e");
	$scope0_page ? _scope($scope0_id, {
		e: input.note,
		g: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && input.on,
		h: _write_if($scope0_reason, 2) && $input_note__closures,
		i: _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_on__closures
	}) : (_filled_guard($scope0_reason, 2) && (_client_guard($scope0_reason, 0) ? _patch_fill($scope0_id, "va6", input.note, !$sg__input_note) : _patch_write($scope0_id, "xe", input.note, !$sg__input_note)), _filled_guard($scope0_reason, 4) && $cg__input_v && _patch_fill($scope0_id, "va12", input.on, !_server_guard($scope0_reason, 4)), $cg__input_v && _content_withhold(input.on));
}, 1);

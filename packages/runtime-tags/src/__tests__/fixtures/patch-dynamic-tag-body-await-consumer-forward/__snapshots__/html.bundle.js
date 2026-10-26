// tags/keeper.marko
_shells({ c: "c !c0; b%;<button class=toggle>toggle</button><!><!>" });
var keeper_default = _template("c", (input) => {
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
	_script($scope0_id, "c0");
	_patch_fill($scope0_id, "vc2", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.content,
		f: open
	}) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc1", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// tags/card.marko
_shells({
	b0: "b0",
	b4: "b4;b%;<!><!><!>",
	b5: "b5;b%;<!><!><!>",
	b: "b !;b%;<!><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_content = _write_guard($scope0_reason, 2), $wi__input_p__OR__input_content = _write_if($scope0_reason, 0), $wg__input_p = _write_guard($scope0_reason, 1), $cg__input_p = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.p, (x) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", x ? keeper_default : "div", {}, _content_resume("b0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			const $scope2_page = _page_render();
			_dynamic_tag($scope2_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 2);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, _client_guard($scope0_reason, 2) ? "b1" : "b2");
			$scope2_page && $wi__input_p__OR__input_content && _subscribe(_unfilled_if($scope0_reason, 2) && $input_content__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
			$wg__input_content || $wi__input_p__OR__input_content && _resume_branch($scope2_id);
		}, $scope1_id, ($scope) => $scope0_page ? [{ e: input.content }, { _: $scope($scope0_id) }] : []), 0, $wg__input_p, void 0, 2, $scope0_reason, 1);
		_filled_guard($scope0_reason, 2) && _content_withheld("b0", $scope1_id) && _patch_fill($scope0_id, "vb3", input.content);
		$scope0_page && $wi__input_p__OR__input_content && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 1, "b4", 1, 1);
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content,
		f: _write_if($scope0_reason, 2) && $input_content__closures
	}) : (_filled_guard($scope0_reason, 2) && $cg__input_p && _patch_fill($scope0_id, "vb3", input.content, !_server_guard($scope0_reason, 2)), (_content_withheld("b0", $scope0_id) || $cg__input_p) && _content_withhold(input.content));
});

// template.marko
_shells({
	a0: "a0",
	a: "a !;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on__OR__input_p = _write_guard($scope0_reason, 0), $cg__input_p = _client_guard($scope0_reason, 3), $cg__input_on = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", { p: input.on && input.p }, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $scope1_page = _page_render();
		_html(`<em>${_patch_text($scope1_id, "a", input.note, void 0, $scope0_reason, 4)}</em>`);
		_unfilled_if($scope0_reason, 4) && _patch_init($scope1_id, _client_guard($scope0_reason, 4) ? "a1" : "a2");
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 4) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }));
	}, $scope0_id, ($scope) => $scope0_page ? [{ g: input.note }] : []), 0, $wg__input_on__OR__input_p, void 0, 1, $scope0_reason, 0);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.on,
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.p,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.note,
		h: _write_if($scope0_reason, 4) && $input_note__closures
	}) : (_filled_guard($scope0_reason, 2) && $cg__input_p && _patch_fill($scope0_id, "va3", input.on, !_server_guard($scope0_reason, 2)), $cg__input_p && _content_withhold(input.on), _filled_guard($scope0_reason, 3) && $cg__input_on && _patch_fill($scope0_id, "va4", input.p, !_server_guard($scope0_reason, 3)), $cg__input_on && _content_withhold(input.p), _filled_guard($scope0_reason, 4) && _content_withheld("a0", $scope0_id) && _patch_fill($scope0_id, "va5", input.note, !_server_guard($scope0_reason, 4)));
}, 1);

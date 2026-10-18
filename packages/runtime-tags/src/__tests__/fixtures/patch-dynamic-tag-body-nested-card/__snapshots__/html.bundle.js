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
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "vb2", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.content,
		f: open
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb1", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
_shells({
	a0: "a0,",
	a1: "a1 a7,",
	a: "a !;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_p = _write_guard($scope0_reason, 3), $wi__input_on__OR__input_p__OR__input_note = _write_if($scope0_reason, 1), $wg__input_on = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_p__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", {}, _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $scope1_page = _page_render();
		_dynamic_tag($scope1_id, "a", input.p ? card_default : "span", {}, _content_resume("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(`<em>${_patch_text($scope2_id, "a", input.note, void 0, $scope0_reason, 4)}</em>`);
			_unfilled_if($scope0_reason, 4) && _patch_init($scope2_id, "a2");
			_subscribe(_unfilled_if($scope0_reason, 4) && $input_note__closures, _scope($scope2_id, { _: $wi__input_on__OR__input_p__OR__input_note && _scope_with_id($scope1_id) }));
		}, $scope1_id, ($scope) => $scope1_page ? [{ f: input.note }, { _: $scope($scope0_id) }] : []), 0, $wg__input_p, void 0, 2, $scope0_reason, 3);
		$wi__input_on__OR__input_p__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 3) && $input_p__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		$wg__input_p || $wi__input_on__OR__input_p__OR__input_note && _resume_branch($scope1_id);
	}, $scope0_id, ($scope2) => $scope0_page ? [{
		f: input.note,
		e: input.p
	}] : []), 0, $wg__input_on, void 0, 2, $scope0_reason, 2);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.p,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.note,
		h: _write_if($scope0_reason, 4) && $input_note__closures,
		g: _write_if($scope0_reason, 3) && $input_p__closures
	}) : (_filled_guard($scope0_reason, 3) && _content_withheld("a1", $scope0_id) && _patch_value($scope0_id, "va3", input.p, !_server_guard($scope0_reason, 3)), _content_withheld("a1", $scope0_id) && _content_withhold(input.p), _filled_guard($scope0_reason, 4) && (_content_withheld("a1", $scope0_id) || _content_withheld("a0", $scope0_id)) && _patch_value($scope0_id, "va4", input.note, !_server_guard($scope0_reason, 4)));
}, 1);

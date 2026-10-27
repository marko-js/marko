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
_shells({
	a0: "a0",
	a10: "a10 !;b%;<!><!><!>",
	a11: "a11 !;b%;<!><!><!>",
	a6: "a6",
	a12: "a12;b%;<!><!><!>",
	a13: "a13;b%;<!><!><!>",
	a: "a !;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_inner = _write_guard($scope0_reason, 5), $wi__input_outer__OR__input_w__OR__input_inner__OR__input_note = _write_if($scope0_reason, 2), $scope0_page = _page_render(), $cg__input_w = _client_guard($scope0_reason, 4), $wg__input_outer = _write_guard($scope0_reason, 3), $cg__input_outer = _client_guard($scope0_reason, 3), $sg__input_w = _server_guard($scope0_reason, 4), $wi__input_w = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_inner__closures = /* @__PURE__ */ new Set();
	const $input_w__closures = /* @__PURE__ */ new Set();
	const $input_outer__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_await($scope0_id, "a", input.v, (v) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.outer ? card_default : "div", {}, 10, _content_resume("a6", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			const $scope2_page = _page_render();
			_await($scope2_id, "a", input.w, (w) => {
				const $scope3_id = _scope_id();
				const $await_content2__w__closures = /* @__PURE__ */ new Set();
				_dynamic_tag($scope3_id, "a", input.inner ? card_default : "section", {}, 2, _content_resume("a0", () => {
					const $scope4_id = _scope_id();
					_scope_reason();
					const $scope4_page = _page_render();
					_html(`<em>${_patch_text($scope4_id, "a", input.note, void 0, $scope0_reason, 6)} ${_patch_text($scope4_id, "b", w, 2, $scope0_reason, 4)}</em>`);
					_unfilled_if($scope0_reason, 6) && _patch_init($scope4_id, _client_guard($scope0_reason, 6) ? "a1" : "a2");
					_unfilled_if($scope0_reason, 4) && _patch_init($scope4_id, $cg__input_w ? "a3" : "a4");
					$scope4_page && _subscribe(_unfilled_if($scope0_reason, 4) && $await_content2__w__closures, _subscribe(_unfilled_if($scope0_reason, 6) && $input_note__closures, _scope($scope4_id, { _: $wi__input_outer__OR__input_w__OR__input_inner__OR__input_note && _scope_with_id($scope3_id) })));
				}, $scope3_id, ($scope) => $scope2_page ? [
					{ h: input.note },
					{ _: $scope($scope0_id) },
					{ _: $scope($scope1_id) },
					{
						c: w,
						_: $scope($scope2_id)
					}
				] : []), 0, $wg__input_inner, $scope0_reason, 5);
				_filled_guard($scope0_reason, 4) && _content_withheld("a0", $scope3_id) && _patch_fill($scope3_id, "va5", w);
				_filled_guard($scope0_reason, 6) && (_content_withheld("a6", $scope3_id) || _content_withheld("a0", $scope3_id)) && _patch_fill($scope0_id, "va7", input.note);
				_unfilled_if($scope0_reason, 5) && _patch_init($scope3_id, _client_guard($scope0_reason, 5) ? "a8" : "a9");
				$scope2_page && $wi__input_outer__OR__input_w__OR__input_inner__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 5) && $input_inner__closures, _scope($scope3_id, {
					c: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 4)) && w,
					m: $wi__input_w && $await_content2__w__closures
				}));
				$wg__input_inner || $wi__input_outer__OR__input_w__OR__input_inner__OR__input_note && _resume_branch($scope3_id);
			}, 1, "a10", void 0, 1);
			_unfilled_if($scope0_reason, 4) && _patch_init($scope2_id, $cg__input_w ? "a14" : "a15");
			$scope2_page && $wi__input_outer__OR__input_w__OR__input_inner__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 4) && $input_w__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
			$wi__input_outer__OR__input_w__OR__input_inner__OR__input_note && _resume_branch($scope2_id);
		}, $scope1_id, ($scope2) => $scope0_page ? [{
			h: input.note,
			g: input.inner,
			f: input.w
		}, { _: $scope2($scope0_id) }] : []), 0, $wg__input_outer, $scope0_reason, 3);
		_filled_guard($scope0_reason, 4) && _content_withheld("a6", $scope1_id) && _patch_fill($scope0_id, "va16", input.w);
		_filled_guard($scope0_reason, 5) && _content_withheld("a6", $scope1_id) && _patch_fill($scope0_id, "va17", input.inner);
		_filled_guard($scope0_reason, 6) && (_content_withheld("a6", $scope1_id) || _content_withheld("a0", $scope1_id)) && _patch_fill($scope0_id, "va7", input.note);
		_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, $cg__input_outer ? "a18" : "a19");
		$scope0_page && $wi__input_outer__OR__input_w__OR__input_inner__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 3) && $input_outer__closures, _scope($scope1_id, {}), $cg__input_outer && "a19", $wg__input_outer);
		$wg__input_outer || $wi__input_outer__OR__input_w__OR__input_inner__OR__input_note && _resume_branch($scope1_id);
	}, 1, "a12", 1, 1);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && input.w,
		g: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 5)) && input.inner,
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 6)) && input.note,
		l: _write_if($scope0_reason, 6) && $input_note__closures,
		k: _write_if($scope0_reason, 5) && $input_inner__closures,
		j: $wi__input_w && $input_w__closures,
		i: _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_outer__closures
	}) : (_filled_guard($scope0_reason, 4) && $cg__input_outer && _patch_fill($scope0_id, "va16", input.w, !$sg__input_w), _filled_guard($scope0_reason, 5) && $cg__input_outer && _patch_fill($scope0_id, "va17", input.inner, !_server_guard($scope0_reason, 5)), (_content_withheld("a6", $scope0_id) || $cg__input_outer) && _content_withhold(input.inner), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va7", input.note, !_server_guard($scope0_reason, 6)));
}, 1);

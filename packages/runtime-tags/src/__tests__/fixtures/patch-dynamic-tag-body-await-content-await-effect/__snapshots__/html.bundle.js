// tags/card.marko
_shells({ b: "b !b0; b%;<button class=toggle>toggle</button><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb2", open, 1);
	_scope($scope0_id, {
		e: input.content,
		f: open
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
_shells({
	a0: "a0",
	a11: "a11 !;D l%;<b> </b><!><!>",
	a12: "a12 !;D l%;<b> </b><!><!>",
	a7: "a7",
	a13: "a13;b%;<!><!><!>",
	a14: "a14;b%;<!><!><!>",
	a: "a !;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_w = _server_guard($scope0_reason, 4), $scope0_page = _page_render(), $cg__input_w = _client_guard($scope0_reason, 4), $wi__input_outer__OR__input_w__OR__input_inner__OR__input_note = _write_if($scope0_reason, 2), $wg__input_outer = _write_guard($scope0_reason, 3), $cg__input_outer = _client_guard($scope0_reason, 3), $wi__input_w = _write_if($scope0_reason, 4), $wi__input_outer = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_inner__closures = /* @__PURE__ */ new Set();
	const $input_w__closures = /* @__PURE__ */ new Set();
	const $input_outer__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_await($scope0_id, "a", input.v, (v) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.outer ? card_default : "div", {}, 10, _content_resume("a7", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			const $scope2_page = _page_render();
			_await($scope2_id, "a", input.w, (w) => {
				const $scope3_id = _scope_id();
				const $await_content2__w__closures = /* @__PURE__ */ new Set();
				_html(`<b>${_text_resume($scope3_id, "a", w, 1, $scope0_reason, 4)}</b>`);
				_dynamic_tag($scope3_id, "b", input.inner ? card_default : "section", {}, 2, _content_resume("a0", () => {
					const $scope4_id = _scope_id();
					_scope_reason();
					_html(`<em>${_text_resume($scope4_id, "a", input.note, 1, $scope0_reason, 6)} ${_text_resume($scope4_id, "b", w, 2, $scope0_reason, 4)}</em>`);
					_unfilled_if($scope0_reason, 6) && _patch_init($scope4_id, _client_guard($scope0_reason, 6) ? "a1" : "a2");
					_unfilled_if($scope0_reason, 4) && _patch_init($scope4_id, $cg__input_w ? "a3" : "a4");
					_subscribe(_unfilled_if($scope0_reason, 4) && $await_content2__w__closures, _subscribe(_unfilled_if($scope0_reason, 6) && $input_note__closures, _scope($scope4_id, { _: $wi__input_outer__OR__input_w__OR__input_inner__OR__input_note && _scope_with_id($scope3_id) })));
				}, $scope3_id, ($scope) => $scope2_page ? [
					{ h: input.note },
					{ _: $scope($scope0_id) },
					{ _: $scope($scope1_id) },
					{ _: $scope($scope2_id) }
				] : []), 0, _write_guard($scope0_reason, 5), $scope0_reason, 5);
				_script($scope3_id, "a5", 1, _filled_guard($scope0_reason, 4), "d");
				_filled_guard($scope0_reason, 4) && (_content_withheld("a0", $scope3_id) ? _patch_fill($scope3_id, "va6", w) : _patch_write($scope3_id, "xd", w, !$sg__input_w));
				_filled_guard($scope0_reason, 6) && (_content_withheld("a7", $scope3_id) || _content_withheld("a0", $scope3_id)) && _patch_fill($scope0_id, "va8", input.note);
				_unfilled_if($scope0_reason, 5) && _patch_init($scope3_id, _client_guard($scope0_reason, 5) ? "a9" : "a10");
				_subscribe(_unfilled_if($scope0_reason, 5) && $input_inner__closures, _scope($scope3_id, {
					d: w,
					m: $wi__input_w && $await_content2__w__closures
				}));
			}, 1, "a11", void 0, 1);
			_unfilled_if($scope0_reason, 4) && _patch_init($scope2_id, $cg__input_w ? "a15" : "a16");
			$wi__input_outer__OR__input_w__OR__input_inner__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 4) && $input_w__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
			$wi__input_outer__OR__input_w__OR__input_inner__OR__input_note && _resume_branch($scope2_id);
		}, $scope1_id, ($scope2) => $scope0_page ? [{
			h: input.note,
			g: input.inner,
			f: input.w
		}, { _: $scope2($scope0_id) }] : []), 0, $wg__input_outer, $scope0_reason, 3);
		_filled_guard($scope0_reason, 4) && _content_withheld("a7", $scope1_id) && _patch_fill($scope0_id, "va17", input.w);
		_filled_guard($scope0_reason, 5) && _content_withheld("a7", $scope1_id) && _patch_fill($scope0_id, "va18", input.inner);
		_filled_guard($scope0_reason, 6) && (_content_withheld("a7", $scope1_id) || _content_withheld("a0", $scope1_id)) && _patch_fill($scope0_id, "va8", input.note);
		_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, $cg__input_outer ? "a19" : "a20");
		$wi__input_outer__OR__input_w__OR__input_inner__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 3) && $input_outer__closures, _scope($scope1_id, {}), $cg__input_outer && "a20", $wg__input_outer);
		$wg__input_outer || $wi__input_outer__OR__input_w__OR__input_inner__OR__input_note && _resume_branch($scope1_id);
	}, 1, "a13", 1, 1);
	_html("</main>");
	_scope($scope0_id, {
		f: $wi__input_outer && input.w,
		g: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 5)) && input.inner,
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 6)) && input.note,
		l: _write_if($scope0_reason, 6) && $input_note__closures,
		k: _write_if($scope0_reason, 5) && $input_inner__closures,
		j: $wi__input_w && $input_w__closures,
		i: $wi__input_outer && _unfilled_if($scope0_reason, 3) && $input_outer__closures
	}) || (_filled_guard($scope0_reason, 4) && $cg__input_outer && _patch_fill($scope0_id, "va17", input.w, !$sg__input_w), _filled_guard($scope0_reason, 5) && $cg__input_outer && _patch_fill($scope0_id, "va18", input.inner, !_server_guard($scope0_reason, 5)), (_content_withheld("a7", $scope0_id) || $cg__input_outer) && _content_withhold(input.inner), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va8", input.note, !_server_guard($scope0_reason, 6)));
}, 1);

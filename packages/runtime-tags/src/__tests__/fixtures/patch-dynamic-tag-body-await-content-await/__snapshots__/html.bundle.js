// tags/card.marko
_shells({ b: "b !b1; b%;<button class=toggle>toggle</button><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "b0");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b1");
	$fg__input_content && _patch_render($scope0_id, "b0", "e");
	_patch_fill($scope0_id, "vb2", open, 1);
	_scope($scope0_id, {
		e: input.content,
		f: open
	}) || $fg__input_content && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a0: "a0",
	a5: "a5;b%;<!><!><!>",
	a6: "a6;b%;<!><!><!>",
	a7: "a7",
	a8: "a8;b%;<!><!><!>",
	a9: "a9;b%;<!><!><!>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_inner = _write_guard($scope0_reason, 6), $wi__input_outer__OR__input_w__OR__input_inner__OR__input_note = _write_if($scope0_reason, 2), $scope0_page = _page_render(), $wi__input_w = _write_if($scope0_reason, 5), $wg__input_outer = _write_guard($scope0_reason, 4), $cg__input_outer = _client_guard($scope0_reason, 4), $sg__input_w = _server_guard($scope0_reason, 5), $fg__input_w = _filled_guard($scope0_reason, 5), $fg__input_inner = _filled_guard($scope0_reason, 6), $fg__input_note = _filled_guard($scope0_reason, 7), $wi__input_outer = _write_if($scope0_reason, 4);
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
				_dynamic_tag($scope3_id, "a", input.inner ? card_default : "section", {}, 2, _content_resume("a0", () => {
					const $scope4_id = _scope_id();
					_scope_reason();
					_html(`<em>${_text_mark($scope4_id, "a", input.note, 1, $scope0_reason, 7)} ${_text_mark($scope4_id, "b", w, 2, $scope0_reason, 5)}</em>`);
					_unfilled_if($scope0_reason, 7) && _patch_subscribe($scope4_id, "a1", _client_guard($scope0_reason, 7));
					_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope4_id, "a2", _client_guard($scope0_reason, 5));
					_subscribe(_unfilled_if($scope0_reason, 5) && $await_content2__w__closures, _subscribe(_unfilled_if($scope0_reason, 7) && $input_note__closures, _scope($scope4_id, { _: $wi__input_outer__OR__input_w__OR__input_inner__OR__input_note && _scope_with_id($scope3_id) })));
				}, $scope3_id, ($scope) => $scope2_page ? [
					{ h: input.note },
					{ _: $scope($scope0_id) },
					{ _: $scope($scope1_id) },
					{
						c: w,
						_: $scope($scope2_id)
					}
				] : []), 0, $wg__input_inner, $scope0_reason, 6, 0, void 0, 0, 0, "a0");
				_filled_guard($scope0_reason, 5) && _patch_subscribers($scope3_id, "a3", "c");
				_unfilled_if($scope0_reason, 6) && _patch_subscribe($scope3_id, "a4", _client_guard($scope0_reason, 6));
				$wi__input_outer__OR__input_w__OR__input_inner__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 6) && $input_inner__closures, _scope($scope3_id, {
					c: (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 5)) && w,
					m: $wi__input_w && $await_content2__w__closures
				}));
				_filled_guard($scope0_reason, 5) && (_client_branch_if("a0", $scope3_id) || _unfilled_if($scope0_reason, 6)) && _patch_write($scope3_id, "xc", w, !$sg__input_w);
				$wg__input_inner || $wi__input_outer__OR__input_w__OR__input_inner__OR__input_note && _resume_branch($scope3_id);
			}, 1, "a5", _unfilled_if($scope0_reason, 5), 0, 1);
			_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope2_id, "a10", 1);
			$wi__input_outer__OR__input_w__OR__input_inner__OR__input_note && _subscribe($wi__input_w && $input_w__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
			$wi__input_outer__OR__input_w__OR__input_inner__OR__input_note && _write_guard($scope0_reason, 5) && _resume_branch($scope2_id);
		}, $scope1_id, ($scope2) => $scope0_page ? [{
			h: input.note,
			g: input.inner,
			f: input.w
		}, { _: $scope2($scope0_id) }] : []), 0, $wg__input_outer, $scope0_reason, 4, 0, void 0, 0, 0, "a7");
		_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope1_id, "a11", $cg__input_outer);
		$wi__input_outer__OR__input_w__OR__input_inner__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 4) && $input_outer__closures, _scope($scope1_id, {}), $cg__input_outer && "a11", $wg__input_outer);
		$wg__input_outer || $wi__input_outer__OR__input_w__OR__input_inner__OR__input_note && _resume_branch($scope1_id);
	}, 1, "a8", _unfilled_if($scope0_reason, 3), 1, 1);
	_html("</main>");
	$fg__input_w && _patch_subscribers($scope0_id, "a12", "f");
	$fg__input_inner && _patch_subscribers($scope0_id, "a13", "g");
	$fg__input_note && _patch_subscribers($scope0_id, "a14", "h");
	_scope($scope0_id, {
		f: $wi__input_outer && input.w,
		g: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 6)) && input.inner,
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 7)) && input.note,
		l: _write_if($scope0_reason, 7) && $input_note__closures,
		k: _write_if($scope0_reason, 6) && $input_inner__closures,
		j: $wi__input_w && $input_w__closures,
		i: $wi__input_outer && _unfilled_if($scope0_reason, 4) && $input_outer__closures
	}) || ($fg__input_w && (_client_branch_if("a7", $scope0_id) || _unfilled_if($scope0_reason, 4)) && _patch_write($scope0_id, "xf", input.w, !$sg__input_w), $fg__input_inner && (_client_branch_if("a7", $scope0_id) || _unfilled_if($scope0_reason, 4)) && _patch_write($scope0_id, "xg", input.inner, !_server_guard($scope0_reason, 6)), $fg__input_note && (_client_branch_if("a7", $scope0_id) || _client_branch_if("a0", $scope0_id) || _unfilled_if($scope0_reason, 0)) && _patch_write($scope0_id, "xh", input.note, !_server_guard($scope0_reason, 7)));
}, 1);

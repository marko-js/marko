// tags/list.marko
_shells({
	b: "b; ;<ul></ul>",
	b0: "b0;D%;<li><!></li>"
});
var list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.item, (it) => {
		const $scope1_id = _scope_id();
		_html("<li>");
		_dynamic_tag($scope1_id, "a", it, {}, 2, 0, 0, $wg__input_item, $scope0_reason, 0);
		_html("</li>");
		_write_if($scope0_reason, 0) && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "b0", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "a")}`);
	_scope($scope0_id, {});
});

// tags/list2.marko
_shells({
	c: "c; ;<ol></ol>",
	c0: "c0;D%;<li><!></li>"
});
var list2_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ol>");
	_for_of(input.item, (it) => {
		const $scope1_id = _scope_id();
		_html("<li>");
		_dynamic_tag($scope1_id, "a", it, {}, 2, 0, 0, $wg__input_item, $scope0_reason, 0);
		_html("</li>");
		_write_if($scope0_reason, 0) && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "c0", $scope0_reason, 0);
	_html(`</ol>${_el_resume($scope0_id, "a")}`);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a4: "a4",
	a: "a !a8; D l%;<button class=inc> </button><!><!>",
	a7: "a7 !;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_as = _client_guard($scope0_reason, 5), $wg__input_on__OR__input_bs = _write_guard($scope0_reason, 2), $wi__input_as__OR__input_on__OR__input_bs__OR__input_note = _write_if($scope0_reason, 4), $cg__input_bs = _client_guard($scope0_reason, 7), $cg__input_on = _client_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_for_of(input.as, (a) => {
		const $scope1_id = _scope_id();
		const $for_content__a__closures = /* @__PURE__ */ new Set();
		let $item;
		forOf(input.bs, (b) => {
			$item = attrTags($item, { content: _content_resume("a4", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`${_text_resume($scope2_id, "a", a, 1, $scope0_reason, 5)}:${_text_resume($scope2_id, "b", b, 2, 4, 0)}:${_text_resume($scope2_id, "c", input.note, 2, $scope0_reason, 8)}`);
				_unfilled_if($scope0_reason, 8) && _patch_init($scope2_id, _client_guard($scope0_reason, 8) ? "a0" : "a1");
				_unfilled_if($scope0_reason, 5) && _patch_init($scope2_id, $cg__input_as ? "a2" : "a3");
				_subscribe(_unfilled_if($scope0_reason, 5) && $for_content__a__closures, _subscribe(_unfilled_if($scope0_reason, 8) && $input_note__closures, _scope($scope2_id, { _: $wi__input_as__OR__input_on__OR__input_bs__OR__input_note && _scope_with_id($scope1_id) })));
			}, $scope1_id, () => [{ 3: b }]) });
		});
		_dynamic_tag($scope1_id, "a", input.on ? list_default : list2_default, { item: $item }, 1, 0, 0, $wg__input_on__OR__input_bs, (_filled_guard($scope0_reason, 6) && !$cg__input_as || _filled_guard($scope0_reason, 7) && !$cg__input_as ? _mask_group($scope0_reason, 2) : 1) << 1, 0);
		_filled_guard($scope0_reason, 5) && _content_withheld("a4", $scope1_id) && _patch_fill($scope1_id, "va5", a);
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a6");
		$wi__input_as__OR__input_on__OR__input_bs__OR__input_note && _scope($scope1_id, {
			d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 5)) && a,
			_: _scope_with_id($scope0_id),
			n: _write_if($scope0_reason, 5) && $for_content__a__closures
		});
	}, 0, $scope0_id, "c", 1, 1, 1, 0, 0, "a7", $scope0_reason, 5);
	_script($scope0_id, "a8");
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.on,
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.bs,
		i: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 8)) && input.note,
		j: n,
		m: _write_if($scope0_reason, 8) && $input_note__closures
	}) || (_filled_guard($scope0_reason, 6) && ($cg__input_as ? _patch_fill($scope0_id, "va10", input.on) : $cg__input_bs && _patch_fill($scope0_id, "va9", input.on, !_server_guard($scope0_reason, 6))), $cg__input_bs && _content_withhold(input.on), _filled_guard($scope0_reason, 7) && ($cg__input_as ? _patch_fill($scope0_id, "va12", input.bs) : $cg__input_on && _patch_fill($scope0_id, "va11", input.bs, !_server_guard($scope0_reason, 7))), $cg__input_on && _content_withhold(input.bs), _filled_guard($scope0_reason, 8) && _content_withheld("a4", $scope0_id) && _patch_fill($scope0_id, "va13", input.note, !_server_guard($scope0_reason, 8)));
}, 1);

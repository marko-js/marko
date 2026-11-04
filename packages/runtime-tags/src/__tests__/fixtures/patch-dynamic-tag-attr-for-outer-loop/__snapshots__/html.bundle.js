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
	_html(`</ul>${_el_mark($scope0_id, "a")}`);
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
	_html(`</ol>${_el_mark($scope0_id, "a")}`);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a2: "a2",
	a: "a !a6; D l%;<button class=inc> </button><!><!>",
	a5: "a5;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_bs = _write_guard($scope0_reason, 2), $wi__input_as__OR__input_on__OR__input_bs__OR__input_note = _write_if($scope0_reason, 4), $sg__input_as = _server_guard($scope0_reason, 5), $fg__input_on = _filled_guard($scope0_reason, 6), $cg__input_as = _client_guard($scope0_reason, 5), $fg__input_bs = _filled_guard($scope0_reason, 7), $fg__input_note = _filled_guard($scope0_reason, 8);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button class=inc>${_text_mark($scope0_id, "b", n)}</button>${_el_mark($scope0_id, "a")}`);
	_for_of(input.as, (a) => {
		const $scope1_id = _scope_id();
		const $for_content__a__closures = /* @__PURE__ */ new Set();
		_filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 2) && _patch_write($scope1_id, "xd", a, !$sg__input_as);
		let $item;
		forOf(input.bs, (b) => {
			$item = attrTags($item, { content: _content_resume("a2", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`${_text_mark($scope2_id, "a", a, 2, $scope0_reason, 5)}:${_text_mark($scope2_id, "b", b, 2, 4, 0)}:${_text_mark($scope2_id, "c", input.note, 2, $scope0_reason, 8)}`);
				_unfilled_if($scope0_reason, 8) && _patch_subscribe($scope2_id, "a0", _client_guard($scope0_reason, 8));
				_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope2_id, "a1", $cg__input_as);
				_subscribe(_unfilled_if($scope0_reason, 5) && $for_content__a__closures, _subscribe(_unfilled_if($scope0_reason, 8) && $input_note__closures, _scope($scope2_id, { _: $wi__input_as__OR__input_on__OR__input_bs__OR__input_note && _scope_with_id($scope1_id) })));
			}, $scope1_id, () => [{ 3: b }]) });
		});
		_dynamic_tag($scope1_id, "a", input.on ? list_default : list2_default, { item: $item }, 1, 0, 0, $wg__input_on__OR__input_bs, $scope0_reason, 2);
		_filled_guard($scope0_reason, 5) && _patch_subscribers($scope1_id, "a3", "d");
		_patch_render($scope1_id, "a4", [_filled_guard($scope0_reason, 6) && ">g", _filled_guard($scope0_reason, 7) && ">h"], $scope0_reason, 2);
		$wi__input_as__OR__input_on__OR__input_bs__OR__input_note && _scope($scope1_id, {
			d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 5)) && a,
			_: _scope_with_id($scope0_id),
			n: _write_if($scope0_reason, 5) && $for_content__a__closures
		});
	}, 0, $scope0_id, "c", 1, 1, 1, 0, 0, "a5", $scope0_reason, 5);
	_script($scope0_id, "a6");
	$fg__input_on && $cg__input_as && _patch_render($scope0_id, "a7", "g");
	$fg__input_bs && $cg__input_as && _patch_render($scope0_id, "a8", "h");
	$fg__input_note && _patch_subscribers($scope0_id, "a9", "i");
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.on,
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.bs,
		i: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 8)) && input.note,
		j: n,
		m: _write_if($scope0_reason, 8) && $input_note__closures
	}) || ($fg__input_on && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "xg", input.on, !_server_guard($scope0_reason, 6)), $fg__input_bs && _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "xh", input.bs, !_server_guard($scope0_reason, 7)), $fg__input_note && _client_guard($scope0_reason, 3) && _patch_write($scope0_id, "xi", input.note, !_server_guard($scope0_reason, 8)));
}, 1);

// tags/list.marko
var list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $wi__input_item = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.item, (it) => {
		const $scope1_id = _scope_id();
		_html("<li>");
		_dynamic_tag($scope1_id, "a", it, {}, 0, 0, $wg__input_item);
		_html("</li>");
		$wi__input_item && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $wg__input_item, $wg__input_item, $wg__input_item, "</ul>", 1);
	$wi__input_item && _scope($scope0_id, {});
});

// tags/list2.marko
var list2_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $wi__input_item = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ol>");
	_for_of(input.item, (it) => {
		const $scope1_id = _scope_id();
		_html("<li>");
		_dynamic_tag($scope1_id, "a", it, {}, 0, 0, $wg__input_item);
		_html("</li>");
		$wi__input_item && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $wg__input_item, $wg__input_item, $wg__input_item, "</ol>", 1);
	$wi__input_item && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_as = _write_guard($scope0_reason, 5), $wg__input_note = _write_guard($scope0_reason, 6), $wi__input_as__OR__input_on__OR__input_bs__OR__input_note = _write_if($scope0_reason, 4), $wg__input_on__OR__input_bs = _write_guard($scope0_reason, 2), $wi__input_as = _write_if($scope0_reason, 5), $wi__input_note = _write_if($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_for_of(input.as, (a) => {
		const $scope1_id = _scope_id();
		const $for_content__a__closures = /* @__PURE__ */ new Set();
		let $item;
		forOf(input.bs, (b) => {
			$item = attrTags($item, { content: _content_resume("a2", () => {
				const $scope2_reason = _scope_reason(), $wg__b = _write_guard($scope2_reason, 0), $wi__b = _write_if($scope2_reason, 0);
				const $scope2_id = _scope_id();
				_html(`${_text_resume($scope2_id, "a", a, $wg__input_as)}:${_text_resume($scope2_id, "b", b, $wg__b * 2)}:${_text_resume($scope2_id, "c", input.note, $wg__input_note * 2)}`);
				($wi__input_as__OR__input_on__OR__input_bs__OR__input_note || $wi__b) && _subscribe($wi__input_as && $for_content__a__closures, _subscribe($wi__input_note && $input_note__closures, _scope($scope2_id, { _: $wi__input_as__OR__input_on__OR__input_bs__OR__input_note && _scope_with_id($scope1_id) }), "a0", $wg__input_as || $wg__input_note || $wg__b), "a1", $wg__input_as || $wg__input_note || $wg__b);
				$wg__input_as || $wg__input_note || $wg__b || ($wi__input_as__OR__input_on__OR__input_bs__OR__input_note || $wi__b) && _resume_branch($scope2_id);
			}, $scope1_id, () => [{ 3: b }]) });
		});
		_dynamic_tag($scope1_id, "a", input.on ? list_default : list2_default, { item: $item }, 0, 0, $wg__input_on__OR__input_bs);
		$wi__input_as__OR__input_on__OR__input_bs__OR__input_note && _scope($scope1_id, {
			d: _write_if($scope0_reason, 2) && a,
			_: _scope_with_id($scope0_id),
			n: $wi__input_as && $for_content__a__closures
		});
	}, 0, $scope0_id, "c", _write_guard($scope0_reason, 3), $wg__input_as);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		g: _write_if($scope0_reason, 1) && input.on,
		h: _write_if($scope0_reason, 0) && input.bs,
		i: _write_if($scope0_reason, 3) && input.note,
		j: n,
		m: $wi__input_note && $input_note__closures
	});
}, 1);

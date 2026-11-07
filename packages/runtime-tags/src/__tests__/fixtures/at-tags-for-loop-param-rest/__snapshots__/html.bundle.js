// tags/list.marko
var list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $wi__input_item = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", item.content, {}, 0, 0, $wg__input_item);
		$wi__input_item && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $wg__input_item, $wg__input_item);
	$wi__input_item && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_o = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_show = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $b2__closures = /* @__PURE__ */ new Set();
	const $r__closures = /* @__PURE__ */ new Set();
	const $firstExtra__closures = /* @__PURE__ */ new Set();
	let items = [{
		id: 1,
		extra: "x"
	}, {
		id: 2,
		extra: "y"
	}];
	_html(`<button id=rename>rename</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(2);
	let $item;
	forOf(items, ({ id, ...rest }) => $item = attrTags($item, { content: _content("a0", () => {
		const $scope2_reason = _scope_reason(), $wg__id = _write_guard($scope2_reason, 1), $wg__$temp_extra = _write_guard($scope2_reason, 2);
		const $scope2_id = _scope_id();
		_html(`<p>${_text_mark($scope2_id, "a", id, $wg__id)}:${_text_mark($scope2_id, "b", rest.extra, $wg__$temp_extra * 2)}</p>`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, $scope0_id) }));
	const $childScope = _peek_scope_id();
	list_default({ item: $item });
	let $item2;
	forOf([["a", "b"], ["c", "d"]], ([first, ...others]) => $item2 = attrTags($item2, { content: _content("a1", () => {
		const $scope3_reason = _scope_reason(), $wg__first = _write_guard($scope3_reason, 1), $wg__$temp2_ = _write_guard($scope3_reason, 2);
		const $scope3_id = _scope_id();
		_html(`<b>${_text_mark($scope3_id, "a", first, $wg__first)}${_text_mark($scope3_id, "b", others[0], $wg__$temp2_ * 2)}</b>`);
		_write_if($scope3_reason, 0) && _scope($scope3_id, {});
	}, $scope0_id) }));
	list_default({ item: $item2 });
	const { a, ...r1 } = input.o;
	const { a: $a, b: $b, ...r2 } = r1;
	_set_scope_reason($wg__input_show << 1);
	let $item3;
	if (input.show) $item3 = attrTag({ content: _content("a5", () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_html(`<p${_attrs(r2, "a", $scope4_id, "p")}>${_text_mark($scope4_id, "b", r1.b, _write_guard($scope0_reason, 1))}</p>${_el_mark($scope4_id, "a")}`);
		_script($scope4_id, "a2");
		_subscribe($wi__input_o && $r__closures, _subscribe($wi__input_o && $b2__closures, _scope($scope4_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), "a3"), "a4");
	}, $scope0_id) });
	const $childScope2 = _peek_scope_id();
	list_default({ item: $item3 });
	const firstExtra = items?.[0]?.extra;
	_set_scope_reason($wg__input_show << 1);
	let $item4;
	if (input.show) $item4 = attrTag({ content: _content("a7", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		forOf([0], (items) => {
			const $scope5_id = _scope_id();
			_html(`<i>${_text_mark($scope5_id, "a", firstExtra)}</i>`);
			_subscribe($firstExtra__closures, _scope($scope5_id, { _: _scope_with_id($scope1_id) }), "a6");
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) });
	const $childScope3 = _peek_scope_id();
	list_default({ item: $item4 });
	_script($scope0_id, "a8");
	_scope($scope0_id, {
		j: items,
		l: $wi__input_show && r1.b,
		m: $wi__input_show && r2,
		o: $wi__input_show && firstExtra,
		b: _existing_scope($childScope),
		p: $wi__input_o && $b2__closures,
		q: $wi__input_o && $r__closures,
		d: $wi__input_show && _existing_scope($childScope2),
		r: $firstExtra__closures,
		e: $wi__input_show && _existing_scope($childScope3)
	});
}, 1);

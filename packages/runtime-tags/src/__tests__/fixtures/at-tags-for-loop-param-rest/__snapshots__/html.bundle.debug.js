// tags/list.marko
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $wi__input_item = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", item.content, {}, 0, 0, $wg__input_item);
		$wi__input_item && _scope($scope1_id, {}, "__tests__/tags/list.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $wg__input_item, $wg__input_item);
	$wi__input_item && _scope($scope0_id, {}, "__tests__/tags/list.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_o = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_show = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $b2__closures = new Set();
	const $r__closures = new Set();
	const $firstExtra__closures = new Set();
	let items = [{
		id: 1,
		extra: "x"
	}, {
		id: 2,
		extra: "y"
	}];
	_html(`<button id=rename>rename</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(2);
	let $item;
	forOf(items, ({ id, ...rest }) => $item = attrTags($item, { content: _content("__tests__/template.marko_2*content", () => {
		const $scope2_reason = _scope_reason(), $wg__id = _write_guard($scope2_reason, 1), $wg__$temp_extra = _write_guard($scope2_reason, 2);
		const $scope2_id = _scope_id();
		_html(`<p>${_text_mark($scope2_id, "#text/0", id, $wg__id)}:${_text_mark($scope2_id, "#text/1", rest.extra, $wg__$temp_extra * 2)}</p>`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "6:6");
	}, $scope0_id) }));
	const $childScope = _peek_scope_id();
	list_default({ item: $item });
	let $item2;
	forOf([["a", "b"], ["c", "d"]], ([first, ...others]) => $item2 = attrTags($item2, { content: _content("__tests__/template.marko_3*content", () => {
		const $scope3_reason = _scope_reason(), $wg__first = _write_guard($scope3_reason, 1), $wg__$temp2_ = _write_guard($scope3_reason, 2);
		const $scope3_id = _scope_id();
		_html(`<b>${_text_mark($scope3_id, "#text/0", first, $wg__first)}${_text_mark($scope3_id, "#text/1", others[0], $wg__$temp2_ * 2)}</b>`);
		_write_if($scope3_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "12:6");
	}, $scope0_id) }));
	list_default({ item: $item2 });
	const { a, ...r1 } = input.o;
	const { a: $a, b: $b, ...r2 } = r1;
	_set_scope_reason($wg__input_show << 1);
	let $item3;
	if (input.show) {
		$item3 = attrTag({ content: _content("__tests__/template.marko_4*content", () => {
			const $scope4_reason = _scope_reason();
			const $scope4_id = _scope_id();
			_html(`<p${_attrs(r2, "#p/0", $scope4_id, "p")}>${_text_mark($scope4_id, "#text/1", r1.b, _write_guard($scope0_reason, 1))}</p>${_el_mark($scope4_id, "#p/0")}`);
			_script($scope4_id, "__tests__/template.marko_4_r2#0:12");
			const $scope4_write = _scope($scope4_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "19:6", { "EventAttributes:#p/0": ["...r2", "21:13"] });
			_subscribe($wi__input_o && $b2__closures, $scope4_write, "__tests__/template.marko_4_b#0:11/subscribe");
			_subscribe($wi__input_o && $r__closures, $scope4_write, "__tests__/template.marko_4_r2#0:12/subscribe");
		}, $scope0_id) });
	}
	const $childScope2 = _peek_scope_id();
	list_default({ item: $item3 });
	const firstExtra = items?.[0]?.extra;
	_set_scope_reason($wg__input_show << 1);
	let $item4;
	if (input.show) {
		$item4 = attrTag({ content: _content("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			forOf([0], (items) => {
				const $scope5_id = _scope_id();
				_html(`<i>${_text_mark($scope5_id, "#text/0", firstExtra)}</i>`);
				_subscribe($firstExtra__closures, _scope($scope5_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "30:8"), "__tests__/template.marko_5_firstExtra#0:14/subscribe");
			});
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "28:6");
		}, $scope0_id) });
	}
	const $childScope3 = _peek_scope_id();
	list_default({ item: $item4 });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		items,
		b: $wi__input_show && r1.b,
		r2: $wi__input_show && r2,
		firstExtra: $wi__input_show && firstExtra,
		"#childScope/1": _existing_scope($childScope),
		"ClosureScopes:b/15": $wi__input_o && $b2__closures,
		"ClosureScopes:r2/16": $wi__input_o && $r__closures,
		"#childScope/3": $wi__input_show && _existing_scope($childScope2),
		"ClosureScopes:firstExtra/17": $firstExtra__closures,
		"#childScope/4": $wi__input_show && _existing_scope($childScope3)
	}, "__tests__/template.marko", 0, {
		items: "1:6",
		b: "20:16",
		r2: "20:22",
		firstExtra: "29:24"
	});
}, 1);

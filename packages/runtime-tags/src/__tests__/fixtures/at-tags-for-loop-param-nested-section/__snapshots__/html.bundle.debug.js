// tags/list.marko
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0), $si__input_item = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", item.content, {}, 0, 0, $sg__input_item);
		$si__input_item && _scope($scope1_id, {}, "__tests__/tags/list.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $sg__input_item, $sg__input_item, $sg__input_item);
	$si__input_item && _scope($scope0_id, {}, "__tests__/tags/list.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = new Set();
	let count = 2;
	let show = true;
	let items = [{ text: "a" }, { text: "b" }];
	_html(`<button id=add>add</button>${_el_resume($scope0_id, "#button/0")}<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/1")}<button id=rename>rename</button>${_el_resume($scope0_id, "#button/2")}`);
	_set_serialize_reason(2);
	let $item;
	forUntil(count, 0, 1, (i) => {
		$item = attrTags($item, { content: _content("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			const $item_content__i__closures = new Set();
			_if(() => {
				if (show) {
					const $scope3_id = _scope_id();
					_html(`<em>if ${_text_resume($scope3_id, "#text/0", i, 2)}</em>`);
					_scope($scope3_id, {}, "__tests__/template.marko", "12:8");
					return 0;
				}
			}, $scope1_id, "#text/0", 1, 1, 1, 0, 1);
			_dynamic_tag($scope1_id, "#text/1", show ? "b" : "i", {}, _content("__tests__/template.marko_4*content", () => {
				const $scope4_id = _scope_id();
				_scope_reason();
				_html(`tag ${_text_resume($scope4_id, "#text/0", i, 2)}`);
				_subscribe($item_content__i__closures, _scope($scope4_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "13:10"), "__tests__/template.marko_4_i#3/subscribe");
			}, $scope1_id));
			_for_until(2, 0, 1, (j) => {
				const $scope5_id = _scope_id();
				_html(`<span>${_text_resume($scope5_id, "#text/0", i)}.${_escape(j)}</span>`);
				_scope($scope5_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "14:8");
			}, 0, $scope1_id, "#text/2", 1, 0, 0, 0, 1);
			_subscribe($show__closures, _scope($scope1_id, {
				i,
				_: _scope_with_id($scope0_id),
				"ClosureScopes:i": $item_content__i__closures
			}, "__tests__/template.marko", "11:6", { i: "10:8" }), "__tests__/template.marko_1_show#6/subscribe");
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	list_default({ item: $item });
	_set_serialize_reason(2);
	let $item2;
	forOf(items, (item) => {
		$item2 = attrTags($item2, { content: _content("__tests__/template.marko_2*content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_if(() => {
				if (show) {
					const $scope6_id = _scope_id();
					_html(`<strong>${_text_resume($scope6_id, "#text/0", item.text)}</strong>`);
					_scope($scope6_id, {}, "__tests__/template.marko", "21:13");
					return 0;
				}
			}, $scope2_id, "#text/0", 1, 1, 1, 0, 1);
			_subscribe($show__closures, _scope($scope2_id, {
				item_text: item?.text,
				_: _scope_with_id($scope0_id),
				"ClosureSignalIndex:show": 1
			}, "__tests__/template.marko", "21:6", { item_text: 0 }), "__tests__/template.marko_2_show#6/subscribe");
		}, $scope0_id) });
	});
	const $childScope2 = _peek_scope_id();
	list_default({ item: $item2 });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		show,
		items,
		"ClosureScopes:show": $show__closures,
		"#childScope/3": _existing_scope($childScope),
		"#childScope/4": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		show: "2:6",
		items: "3:6"
	});
}, 1);

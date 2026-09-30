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
	let show = true;
	let items = [{ a: "x" }, {}];
	_html(`<button id=rename>rename</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason(2);
	let $item;
	forOf(items, ({ a: aa = "default" }, index) => {
		$item = attrTags($item, { content: _content("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "#text/0", index)}:${_text_resume($scope1_id, "#text/1", aa, 2)}</p>`);
			_if(() => {
				if (show) {
					const $scope2_id = _scope_id();
					_html(`<span>${_text_resume($scope2_id, "#text/0", aa)}</span>`);
					_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "9:8");
					return 0;
				}
			}, $scope1_id, "#text/2", 1, 0, 0, 0, 1);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:6");
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	list_default({ item: $item });
	let $item2;
	forOf([["a"], ["b", "c"]], ([x, y = "dy"]) => {
		$item2 = attrTags($item2, { content: _content("__tests__/template.marko_3*content", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html(`<i>${_escape(x)}${_escape(y)}</i>`);
		}, $scope0_id) });
	});
	list_default({ item: $item2 });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		show,
		items,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		show: "1:6",
		items: "2:6"
	});
}, 1);

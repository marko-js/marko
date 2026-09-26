// tags/list.marko
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=open>open</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_for_of(input.item, (item) => {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "#text/0", item.content, {}, 0, 0, $sg__input_item);
				_serialize_if($scope0_reason, 0) && _scope($scope2_id, {}, "__tests__/tags/list.marko", "4:4");
			}, 0, $scope1_id, "#text/0", $sg__input_item, $sg__input_item, $sg__input_item);
			_scope($scope1_id, {}, "__tests__/tags/list.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/list.marko_0");
	_scope($scope0_id, { input_item: input.item }, "__tests__/tags/list.marko", 0, { input_item: ["input.item"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _serialize_guard($scope0_reason, 0), $si__input_items = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let picked = null;
	_set_serialize_reason($sg__input_items << 1);
	let $item;
	forOf(input.items, (item) => {
		$item = attrTags($item, { content: _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`<span>${_text_resume($scope2_id, "#text/0", JSON.stringify(item), $sg__input_items)}</span>`);
			$si__input_items && _scope($scope2_id, {}, "__tests__/template.marko", "5:6");
		}, $scope0_id, () => [{ item }]) });
	});
	const $childScope = _peek_scope_id();
	list_default({ item: $item });
	_await($scope0_id, "#text/1", resolveAfter(input.items[1]), (v) => {
		const $scope1_id = _scope_id();
		_html(`<button id=pick>pick</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			v,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "10:2", { v: "10:8" });
	});
	_html(`<div>${_text_resume($scope0_id, "#text/2", picked && picked.text)}</div>`);
	_scope($scope0_id, { "#childScope/0": $si__input_items && _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);

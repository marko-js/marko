// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Child = { content: _content("a0", ({ item: items }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_for_of(items, (item) => {
			const $scope3_id = _scope_id();
			_dynamic_tag($scope3_id, "a", item, {}, 0, 0, 0);
		}, 0, $scope1_id, "a", 0, 0);
	}, $scope0_id) };
	forOf([[{ text: "hello" }, { text: "world" }]], (texts) => {
		const $scope2_id = _scope_id();
		let $item;
		forOf(texts, (item) => $item = attrTags($item, { content: _content("a1", () => {
			const $scope4_reason = _scope_reason(), $wg__item_text = _write_guard($scope4_reason, 0);
			const $scope4_id = _scope_id();
			_html(_text_mark($scope4_id, "a", item.text, $wg__item_text * 2));
			_write_if($scope4_reason, 0) && _scope($scope4_id, {});
		}, $scope2_id) }));
		Child.content({ item: $item });
	});
}, 1);

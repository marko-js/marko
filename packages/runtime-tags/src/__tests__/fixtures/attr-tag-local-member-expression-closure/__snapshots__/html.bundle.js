// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	const Child = { content: _content("a0", ({ item: items }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__items = _serialize_guard($scope1_reason, 0), $si__items = _serialize_if($scope1_reason, 0);
		_for_of(items, (item) => {
			const $scope3_id = _scope_id();
			_dynamic_tag($scope3_id, "a", item, {}, 0, 0, $sg__items);
			$si__items && writeScope($scope3_id, {});
		}, 0, $scope1_id, "a", $sg__items, $sg__items, $sg__items, 0, 0, 1);
		$si__items && writeScope($scope1_id, {});
	}) };
	forOf([[{ text: "hello" }, { text: "world" }]], (texts) => {
		_scope_id();
		let $item;
		forOf(texts, (item) => {
			$item = attrTags($item, { content: _content("a1", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_html(`${_escape(item.text)}${_el_resume($scope4_id, "a")}`);
				writeScope($scope4_id, {});
			}) });
		});
		Child.content({ item: $item });
	});
}, 1);

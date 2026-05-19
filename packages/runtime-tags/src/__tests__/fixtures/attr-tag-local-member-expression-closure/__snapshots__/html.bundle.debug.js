// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Child = { content: _content("__tests__/template.marko_1_content", ({ item: items }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__items = _serialize_guard($scope1_reason, 0), $si__items = _serialize_if($scope1_reason, 0);
		_for_of(items, (item) => {
			const $scope3_id = _scope_id();
			_dynamic_tag($scope3_id, "#text/0", item, {}, 0, 0, $sg__items);
			$si__items && writeScope($scope3_id, {}, "__tests__/template.marko", "2:4");
		}, 0, $scope1_id, "#text/0", $sg__items, $sg__items, $sg__items);
		$si__items && writeScope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}) };
	forOf([[{ text: "hello" }, { text: "world" }]], (texts) => {
		const $scope2_id = _scope_id();
		let $item;
		forOf(texts, (item) => {
			$item = attrTags($item, { content: _content("__tests__/template.marko_4_content", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_html(`${_escape(item.text)}${_el_resume($scope4_id, "#text/0")}`);
				writeScope($scope4_id, {}, "__tests__/template.marko", "11:14");
			}) });
		});
		Child.content({ item: $item });
	});
}, 1);

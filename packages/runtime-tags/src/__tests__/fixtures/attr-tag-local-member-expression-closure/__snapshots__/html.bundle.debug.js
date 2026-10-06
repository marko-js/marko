// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Child = { content: _content("__tests__/template.marko_1*content", ({ item: items }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__items = _write_guard($scope1_reason, 0), $wi__items = _write_if($scope1_reason, 0);
		_for_of(items, (item) => {
			const $scope3_id = _scope_id();
			_dynamic_tag($scope3_id, "#text/0", item, {}, 0, 0, $wg__items);
			$wi__items && _scope($scope3_id, {}, "__tests__/template.marko", "2:4");
		}, 0, $scope1_id, "#text/0", $wg__items, $wg__items);
		$wi__items && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	forOf([[{ text: "hello" }, { text: "world" }]], (texts) => {
		const $scope2_id = _scope_id();
		let $item;
		forOf(texts, (item) => {
			$item = attrTags($item, { content: _content("__tests__/template.marko_4*content", () => {
				const $scope4_reason = _scope_reason(), $wg__item_text = _write_guard($scope4_reason, 0);
				const $scope4_id = _scope_id();
				_html(_text_resume($scope4_id, "#text/0", item.text, $wg__item_text));
				_write_if($scope4_reason, 0) && _scope($scope4_id, {}, "__tests__/template.marko", "11:14");
			}, $scope2_id) });
		});
		Child.content({ item: $item });
	});
}, 1);

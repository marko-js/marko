// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 1), $wg__input_text = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<p${_attr("title", input.title)}>${_text_resume($scope0_id, "b", input.text, $wg__input_text)}</p>${_el_resume($scope0_id, "a", $wg__input_title)}`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/list.marko
var list_default = _template("c", (input) => {
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
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let items = [{
		text: "a",
		title: "ta"
	}, {
		text: "b",
		title: "tb"
	}];
	_html(`<button id=rename>rename</button>${_el_resume($scope0_id, "a")}`);
	const Row = { content: _content("a0", ({ text }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__text = _write_guard($scope2_reason, 0);
		_html(`<em>${_text_resume($scope2_id, "a", text, $wg__text)}</em>`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, $scope0_id) };
	_set_scope_reason(2);
	let $item;
	forOf(items, (item) => {
		$item = attrTags($item, { content: _content("a1", () => {
			const $scope1_reason = _scope_reason(), $wg__item_text = _write_guard($scope1_reason, 2), $wg__item_title__OR__item_text = _write_guard($scope1_reason, 0), $wi__item_text = _write_if($scope1_reason, 2);
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__item_title__OR__item_text << 1 | _write_guard($scope1_reason, 1) << 3 | $wg__item_text << 5);
			const $childScope = _peek_scope_id();
			child_default(item);
			_set_scope_reason($wg__item_text << 1);
			const $childScope2 = _peek_scope_id();
			Row.content(item);
			_if(() => {
				{
					const $scope3_id = _scope_id();
					_set_scope_reason($wg__item_text << 1 | $wg__item_text << 5);
					const $childScope3 = _peek_scope_id();
					child_default({
						...item,
						title: "over"
					});
					$wi__item_text && _scope($scope3_id, {
						_: _scope_with_id($scope1_id),
						a: _existing_scope($childScope3)
					});
					return 0;
				}
			}, $scope1_id, "c", $wg__item_text, 0, 0, 0, 1);
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _write_if($scope1_reason, 0) && _existing_scope($childScope),
				b: $wi__item_text && _existing_scope($childScope2)
			});
			$wg__item_title__OR__item_text || $wg__item_text || _resume_branch($scope1_id);
		}, $scope0_id) });
	});
	const $childScope4 = _peek_scope_id();
	list_default({ item: $item });
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		c: show,
		d: items,
		b: _existing_scope($childScope4)
	});
}, 1);

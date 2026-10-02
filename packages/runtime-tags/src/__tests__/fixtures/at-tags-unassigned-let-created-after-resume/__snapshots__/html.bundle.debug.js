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

// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_items = _write_if($scope0_reason, 0), $wg__input_items = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = true;
	_set_scope_reason($wg__input_items << 1);
	let $item;
	forOf(input.items, (item) => {
		$item = attrTags($item, { content: _content("__tests__/tags/child.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			if (show) {
				const $scope2_id = _scope_id();
				_html("<span>shown</span>");
			}
			$wi__input_items && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "4:6");
			$wi__input_items && _resume_branch($scope1_id);
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	list_default({ item: $item });
	$wi__input_items && _scope($scope0_id, {
		show,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/child.marko", 0, { show: "1:6" });
	$wg__input_items || $wi__input_items && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [1, 2];
	_html(`<button id=add>add</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	child_default({ items });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		items,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { items: "1:6" });
}, 1);

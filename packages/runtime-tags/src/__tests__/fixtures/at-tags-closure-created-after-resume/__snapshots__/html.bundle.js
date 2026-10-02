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

// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_show = _write_if($scope0_reason, 2), $wi__input_items__OR__input_show = _write_if($scope0_reason, 0), $wg__input_items = _write_guard($scope0_reason, 1), $wi__input_items = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_show__closures = /* @__PURE__ */ new Set();
	_set_scope_reason($wg__input_items << 1);
	let $item;
	forOf(input.items, (item) => {
		$item = attrTags($item, { content: _content("b1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html("<span>shown</span>");
					$wi__input_show && _scope($scope2_id, {});
					return 0;
				}
			}, $scope1_id, "a", $wg__input_show, $wg__input_show, 0, 0, 1);
			$wi__input_items__OR__input_show && _subscribe($wi__input_show && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b0", $wg__input_show);
			$wg__input_show || $wi__input_items__OR__input_show && _resume_branch($scope1_id);
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	list_default({ item: $item });
	$wi__input_items__OR__input_show && _scope($scope0_id, {
		e: $wi__input_items && input.show,
		f: $wi__input_show && $input_show__closures,
		a: $wi__input_items && _existing_scope($childScope)
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [1, 2];
	_html(`<button id=add>add</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(10);
	const $childScope = _peek_scope_id();
	child_default({
		items,
		show: true
	});
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		c: items,
		b: _existing_scope($childScope)
	});
}, 1);

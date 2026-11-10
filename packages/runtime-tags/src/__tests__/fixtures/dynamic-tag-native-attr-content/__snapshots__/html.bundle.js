// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_key__closures = /* @__PURE__ */ new Set();
		const Tag = item.on ? "p" : "div";
		_dynamic_tag($scope1_id, "a", Tag, { content: attrTag({ content: _content("a1", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<b>${_text_mark($scope2_id, "a", item.key, $wg__input_items)}</b>`);
			$wi__input_items && _subscribe($for_content__item_key__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_items);
		}, $scope1_id) }) }, 0, 0, $wg__input_items);
		$wi__input_items && _scope($scope1_id, { g: $for_content__item_key__closures });
	}, 0, $scope0_id, "a", $wg__input_items, $wg__input_items);
	$wi__input_items && _scope($scope0_id, {});
}, 1);

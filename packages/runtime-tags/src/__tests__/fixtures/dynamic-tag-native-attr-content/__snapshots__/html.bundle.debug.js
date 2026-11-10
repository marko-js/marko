// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_key__closures = new Set();
		const Tag = item.on ? "p" : "div";
		_dynamic_tag($scope1_id, "#text/0", Tag, { content: attrTag({ content: _content("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`<b>${_text_mark($scope2_id, "#text/0", item.key, $wg__input_items)}</b>`);
			$wi__input_items && _subscribe($for_content__item_key__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:12"), "__tests__/template.marko_2_item_key#1:4/subscribe", $wg__input_items);
		}, $scope1_id) }) }, 0, 0, $wg__input_items);
		$wi__input_items && _scope($scope1_id, { "ClosureScopes:item_key/6": $for_content__item_key__closures }, "__tests__/template.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $wg__input_items, $wg__input_items);
	$wi__input_items && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);

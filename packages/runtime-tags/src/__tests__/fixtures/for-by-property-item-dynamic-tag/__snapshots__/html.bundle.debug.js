// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $wi__input_item = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_html("<span>");
		_dynamic_tag($scope1_id, "#text/0", item, {}, 0, 0, $wg__input_item);
		_html(`:${_escape(item.id)}</span>`);
		$wi__input_item && _scope($scope1_id, {}, "__tests__/tags/child.marko", "1:2");
	}, "id", $scope0_id, "#text/0", $wg__input_item, $wg__input_item, 0, 0, 1);
	$wi__input_item && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let ids = ["a"];
	_set_scope_reason(2);
	let $item;
	forOf(ids, (id) => $item = attrTags($item, {
		id,
		content: _content("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<b>${_text_mark($scope1_id, "#text/0", id, _write_guard($scope1_reason, 0))}</b>`);
			_write_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "4:6");
		}, $scope0_id)
	}));
	const $childScope = _peek_scope_id();
	child_default({ item: $item });
	_html(`<button>add</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		ids,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { ids: "1:6" });
}, 1);

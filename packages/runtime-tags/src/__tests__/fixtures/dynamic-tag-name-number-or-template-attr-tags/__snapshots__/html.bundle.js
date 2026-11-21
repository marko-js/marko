// tags/list.marko
var list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_html("<li>");
		_dynamic_tag($scope1_id, "a", item.content, {}, 0, 0, $wg__input_item);
		_html("</li>");
		_write_if($scope0_reason, 1) && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $wg__input_item, $wg__input_item, $wg__input_item, "</ul>", 1);
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, _write_guard($scope0_reason, 2));
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let hidden = false;
	_dynamic_tag($scope0_id, "a", list_default, { item: attrTags(attrTag({ content: _content("a0", () => {
		_scope_reason();
		_scope_id();
		_html("one");
	}, $scope0_id) }), { content: _content("a1", () => {
		_scope_reason();
		_scope_id();
		_html("two");
	}, $scope0_id) }) }, _content("a2", () => {
		_scope_id();
		_scope_reason();
		_html("<em>after</em>");
	}, $scope0_id));
	_html(`<button>toggle</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	_scope($scope0_id, { c: hidden });
}, 1);

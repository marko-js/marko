// tags/list.marko
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_html("<li>");
		_dynamic_tag($scope1_id, "#text/0", item.content, {}, 0, 0, $wg__input_item);
		_html("</li>");
		_write_if($scope0_reason, 1) && _scope($scope1_id, {}, "__tests__/tags/list.marko", "2:4");
	}, 0, $scope0_id, "#ul/0", $wg__input_item, $wg__input_item, $wg__input_item, "</ul>", 1);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, _write_guard($scope0_reason, 2));
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/list.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let hidden = false;
	_dynamic_tag($scope0_id, "#text/0", hidden ? +hidden - 1 : list_default, { item: attrTags(attrTag({ content: _content("__tests__/template.marko_2*content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("one");
	}, $scope0_id) }), { content: _content("__tests__/template.marko_3*content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("two");
	}, $scope0_id) }) }, _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<em>after</em>");
	}, $scope0_id));
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { hidden }, "__tests__/template.marko", 0, { hidden: "3:6" });
}, 1);

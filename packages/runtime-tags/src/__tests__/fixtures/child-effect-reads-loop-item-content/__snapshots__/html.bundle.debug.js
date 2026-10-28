// tags/shows.marko
var shows_default = _template("__tests__/tags/shows.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, _write_guard($scope0_reason, 0));
	_html(`</div>${_el_resume($scope0_id, "#div/0")}<pre></pre>${_el_resume($scope0_id, "#pre/2")}`);
	_script($scope0_id, "__tests__/tags/shows.marko_0_input_content#5");
	_scope($scope0_id, { input_content: input.content }, "__tests__/tags/shows.marko", 0, { input_content: ["input.content"] });
});

// tags/first.marko
var first_default = _template("__tests__/tags/first.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const item = [...input.item][0];
	_set_scope_reason($wg__input_item << 1);
	const $childScope = _peek_scope_id();
	shows_default({ content: item.content });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/first.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_items << 1);
	let $item;
	forOf(input.items, (x) => {
		$item = attrTags($item, { content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason(), $wg__x = _write_guard($scope1_reason, 0);
			const $scope1_id = _scope_id();
			_html(_text_resume($scope1_id, "#text/0", x, $wg__x));
			_write_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "3:6");
		}, $scope0_id, () => [{ x }]) });
	});
	const $childScope = _peek_scope_id();
	first_default({ item: $item });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);

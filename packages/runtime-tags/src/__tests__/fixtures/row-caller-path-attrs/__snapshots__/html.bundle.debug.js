// tags/navlist.marko
var navlist_default = _template("__tests__/tags/navlist.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items__OR__input_path = _write_guard($scope0_reason, 0), $wg__input_items = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const active = item.href === input.path;
		_html(`<a class=${active ? "\"link active\"" : "link"}${_attr("href", item.href)}>${_text_resume($scope1_id, "#text/1", item.label, $wg__input_items)}</a>${_el_resume($scope1_id, "#a/0", $wg__input_items__OR__input_path)}`);
		_write_if($scope0_reason, 0) && _scope($scope1_id, {
			item_href: _write_if($scope0_reason, 2) && item?.href,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/navlist.marko", "1:2", { item_href: ["item.href", "1:6"] });
	}, 0, $scope0_id, "#text/0", $wg__input_items__OR__input_path, $wg__input_items, 0, 0, 1);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_path: input.path }, "__tests__/tags/navlist.marko", 0, { input_path: ["input.path"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let path = "/a";
	_set_scope_reason(34 | _write_guard($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id();
	navlist_default({
		items: input.items,
		path
	});
	_html(`<button class=p>p</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		path,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { path: "1:6" });
}, 1);

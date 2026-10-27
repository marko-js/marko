// tags/navlist.marko
var navlist_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const active = item.href === input.path;
		_html(`<a class=${active ? "\"link active\"" : "link"}${_attr("href", item.href)}>${_text_resume($scope1_id, "b", item.label, $wg__input_items)}</a>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b0");
		_scope($scope1_id, {
			e: item?.href,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_items, 0, 0, 1);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.path });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let items = [{
		href: "/a",
		label: "A"
	}];
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(10);
			const $childScope = _peek_scope_id();
			navlist_default({
				items,
				path: input.path
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0));
	_html(`<button class=add>add</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 0) && input.path,
		g: items
	});
}, 1);

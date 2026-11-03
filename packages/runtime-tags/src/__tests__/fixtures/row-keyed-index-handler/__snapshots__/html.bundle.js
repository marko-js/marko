// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_for_of(input.items, (item, i) => {
		const $scope1_id = _scope_id();
		_html(`<button class=r>${_escape(item.id)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_scope($scope1_id, {
			e: item?.v,
			g: i,
			_: _scope_with_id($scope0_id)
		});
	}, "id", $scope0_id, "a", $wg__input_items, $wg__input_items, 0, 0, 1);
	_html(`<p>${_text_resume($scope0_id, "b", count)}</p>`);
	_scope($scope0_id, { f: count });
}, 1);

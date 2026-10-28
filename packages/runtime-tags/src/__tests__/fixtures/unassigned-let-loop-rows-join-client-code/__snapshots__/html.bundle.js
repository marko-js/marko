// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let uid = input.id;
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", uid + "-" + item, $wg__input_items)}</p>`);
		$wi__input_items && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", $wg__input_items, $wg__input_items, 0, 0, 1);
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		h: $wi__input_items && uid,
		i: n
	});
}, 1);

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let x = input.v;
	_for_of(input.items, (i) => {
		const $scope1_id = _scope_id();
		_html(`<p${_attr_class(x)}>${_text_resume($scope1_id, "b", i, $wg__input_items)}</p>`);
		$wi__input_items && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $wg__input_items, $wg__input_items, 0, 0, 1);
	$wi__input_items && _scope($scope0_id, { f: x });
	$wg__input_items || $wi__input_items && _resume_branch($scope0_id);
}, 1);

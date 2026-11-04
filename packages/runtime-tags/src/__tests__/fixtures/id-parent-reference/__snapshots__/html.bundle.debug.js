// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const headingId = _id();
	_html(`<h2${_attr("id", headingId)}>Fields</h2>`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const uid = _id();
		_html(`<label${_attr("for", uid)}>${_escape(item.key)}</label><input${_attr("id", uid)}${_attr("aria-describedby", headingId)}>`);
		$wi__input_items && _scope($scope1_id, {}, "__tests__/template.marko", "3:2");
	}, "key", $scope0_id, "#text/1", $wg__input_items, $wg__input_items);
	$wi__input_items && _scope($scope0_id, { headingId }, "__tests__/template.marko", 0, { headingId: "1:5" });
}, 1);

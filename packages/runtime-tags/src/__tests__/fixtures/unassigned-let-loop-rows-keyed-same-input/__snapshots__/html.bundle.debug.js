// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let x = input.v;
	_for_of(input.items, (i) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_escape(x)}${_escape(i)}</p>`);
		$wi__input_items && _scope($scope1_id, {}, "__tests__/template.marko", "2:2");
	}, (i) => i, $scope0_id, "#text/0", $wg__input_items, $wg__input_items, 0, 0, 1);
	$wi__input_items && _scope($scope0_id, { x }, "__tests__/template.marko", 0, { x: "1:6" });
	$wg__input_items || $wi__input_items && _resume_branch($scope0_id);
}, 1);

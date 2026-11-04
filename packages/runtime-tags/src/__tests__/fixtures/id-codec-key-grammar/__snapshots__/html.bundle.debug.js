// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_keys = _write_guard($scope0_reason, 0), $wi__input_keys = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const heading = _id();
	_html(`<h1${_attr("id", heading)}>Keys</h1>`);
	_for_of(input.keys, (key) => {
		const $scope1_id = _scope_id();
		const uid = _id();
		_html(`<label${_attr("for", uid)}>Key</label><input${_attr("id", uid)}${_attr("aria-labelledby", heading)}>`);
		$wi__input_keys && _scope($scope1_id, {}, "__tests__/template.marko", "1:39");
	}, (key) => key, $scope0_id, "#text/1", $wg__input_keys, $wg__input_keys);
	$wi__input_keys && _scope($scope0_id, { heading }, "__tests__/template.marko", 0, { heading: "1:5" });
}, 1);
